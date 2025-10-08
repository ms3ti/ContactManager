(function (global) {
	global.outsystems = global.outsystems || {};
	global.outsystems.api = global.outsystems.api || {};
	global.outsystems.api.preloader = {
		globalTimeout : 30000,
		manifestTimeout : 5000,
		resourceTimeout : 20000,
		initialWindowSize : 10,
		debug : false
	};

	// IE8 polyfill for Array.forEach function
	if (!Array.prototype.forEach) {
		Array.prototype.forEach = function (fn, arg) {
			var arr = this,
			len = arr.length,
			thisArg = arg ? arg : undefined,
			i;
			for (i = 0; i < len; i += 1) {
				if (arr.hasOwnProperty(i)) {
					fn.call(thisArg, arr[i], i, arr);
				}
			}
			return undefined;
		};
	}
	
    /**
	 * Prefetches static resources (css, js, png, gif. jpg, jpeg) for a list of
	 * modules so that when a resource is needed it's retrieved
	 * from the browser cache.
	 * @public
	 * @param {Array} modules - The modules to fetch the static resources.
	 * @param {string} redirectUrl - The url to redirect the user, after preloading the resources.
	 * @param {string} locale - The locale of the resources to fetch.
	 * @param {progressCallback} ProgressCallback - The callback to receive updates on the resources loaded.                     
	 */
	function OutSystems_PreloadApp(modules, redirectUrl, locale, ProgressCallback) {	
		var resourcesAddresses;
		var completed = 0;
		var requested = 0;
		var total = 0;
		var localeRegex = /<LOCALES:((?:(?:\w+-?),?)*)>/i;

		function OutSystems_Log(message) {
			if (global.outsystems.api.preloader.debug) {
				console.log(message);
			}
		}

		function OutSystems_EndPrecache() {
			if (redirectUrl && redirectUrl != '') {
				OutSystems_Log('Preloader: Redirecting user...');
				setTimeout(function () {
					window.location.replace(redirectUrl);
				}, 50); // allow progress bar ui refresh before redirecting the user
			} else {
				OutSystems_Log('Preloader: No url to redirect user, preloader process finished');
			}
		}

		function OutSystems_GetLocale(current) {
			var searchParent = locale.indexOf('-') > -1;
			var matches = localeRegex.exec(current);
			var foundLocale = '';

			if (matches && matches.length > 0) {
				var localeArray = matches[0].split(',');
				var parentLocale;

				if (searchParent) {
					parentLocale = locale.split('-')[0];
				}

				var entry;
				for (var i = 0; i < localeArray.length; i++) {
					entry = localeArray[i];
					if (entry == locale) {
						foundLocale = '.' + entry; // locale is the user defined language (pt-PT) and the files are typically suffixed with it 'HighCharts.pt-PT.js' instead of 'HighCharts.js'
						break;
					}

					if (searchParent && entry == parentLocale) {
						foundLocale = '.' + entry; // locale is the user defined language (pt-PT) and the files are typically suffixed with it 'HighCharts.pt-PT.js' instead of 'HighCharts.js'
					}
				}
			}

			return foundLocale;
		}

		function OutSystems_PrefetchNext() {
			if (resourcesAddresses == null || resourcesAddresses.length == 0) {
				OutSystems_EndPrecache();
				return;
			}

			var xhr = new XMLHttpRequest();
			xhr.onload = xhr.onerror = xhr.onabort = function () {
				completed++;

				// advance progress bar
				if(ProgressCallback) {
					try {					
						ProgressCallback((completed / total) * 100);
					} catch (err) {
						OutSystems_Log('Preloader: Error invoking progress callback - ' + err);
						ProgressCallback = null;
					}
				}

				if (total <= completed && redirectUrl) {
					OutSystems_Log('Preloader: Finished downloading all cache files');
					OutSystems_EndPrecache();
				} else {
					if (total > completed && requested < total) { // when finishing fetching a resource, get a new one if there are more
						OutSystems_PrefetchNext();
					}
				}
			}

			// request new resource download
			var next_request = ++requested;
			var current = resourcesAddresses[next_request - 1];

			var currentLocale = OutSystems_GetLocale(current);

			xhr.open('GET', current.replace(/<LOCALES:.*>/, currentLocale), true);
			xhr.timeout = global.outsystems.api.preloader.resourceTimeout;
			xhr.send();
		}

		function OutSystems_CacheResources() {
			if (preloadURLs && preloadURLs.size > 0) {
				total = preloadURLs.size;

				if (total < global.outsystems.api.preloader.initialWindowSize) {
					global.outsystems.api.preloader.initialWindowSize = total;
				}
			} else {
				OutSystems_Log('Preloader: No files to cache');
				OutSystems_EndPrecache();
				return;
			}

			// start fetching [global.outsystems.api.preloader.initialWindowSize] request in parallel
			for (var i = 0; i <= global.outsystems.api.preloader.initialWindowSize; i++) {
				OutSystems_PrefetchNext();
			}
		}

		// Set the global timeout
		if (global.outsystems.api.preloader.globalTimeout > 0) {
			setTimeout(function () {
				OutSystems_EndPrecache()
			}, global.outsystems.api.preloader.globalTimeout); // allow progress bar ui refresh before redirecting the user
		}

		// Get application module list
		var current = 0;
		var totalModules = 0;
		var preloadURLs = new Object();
		preloadURLs.size = 0;
		preloadURLs.urls = new Object();

		if (modules && modules.length > 0) {
			totalModules = modules.length;
		} else {
			OutSystems_Log('Preloader: No modules found to preload');
			OutSystems_EndPrecache();
			return;
		}

		// this function is necessary because iOS browsers operating in private mode prevent writing to  both local and session storage, launching runtime exception when attempting to do so
		var isStorageAvailable = function() {
			var testKey = 'test';
			var testValue = '1';
			var storage = window.sessionStorage;
			try {
				storage.setItem(testKey, testValue);
				var writeOkFlag = storage.getItem(testKey) === testValue;
				storage.removeItem(testKey);
				return writeOkFlag;
			} catch (e) {
				return false;
			}
		}

		var initializeURLTokenMapStructure = function() {
			if (isStorageAvailable()) {
				//initialize the storage structure that is going to hold the URL version token mappings
				var init = {};
				localStorage["urlVersionTokenStructure"] = JSON.stringify(init);
			}
		}

		var updateURLVersionToken = function (baseURL, token) {
			if (isStorageAvailable()) {
				var urlVersionTokens = JSON.parse(localStorage["urlVersionTokenStructure"]);
				urlVersionTokens[baseURL] = {
					versionedURL: baseURL + "?" + token,
					versionToken: token,
				};
				localStorage["urlVersionTokenStructure"] = JSON.stringify(urlVersionTokens);
			}
		}

		initializeURLTokenMapStructure();

		// load all module manifests
		modules.forEach(function (entry) {
			var xhr = new XMLHttpRequest();

			xhr.onload = function () {
				current++;

				// Module content
				if (xhr.readyState == 4 && xhr.status == 200) {
					var parsedManifest = JSON.parse(xhr.responseText.substring(xhr.responseText.indexOf("{"), xhr.responseText.length));
					var urlTokenList = parsedManifest.urlVersions;

					for (var baseUrl in urlTokenList) {
						if (urlTokenList.hasOwnProperty(baseUrl)) {
							// do stuff
							var parsedResource = urlTokenList[baseUrl].length > 1 ? baseUrl + urlTokenList[baseUrl] : baseUrl;
							if (preloadURLs.urls[parsedResource]) {
								// ignore entry, resource is already set to be downloaded
							} else {
								updateURLVersionToken(baseUrl, urlTokenList[baseUrl].length > 1 ? urlTokenList[baseUrl] : "undefined_version_token");
								preloadURLs.urls[parsedResource] = true; // use a hashtable to remove duplicates
								preloadURLs.size++;
							}
						}
					}
					OutSystems_Log('Preloader: Module ' + entry + 'loaded, total urls to preload: ' + preloadURLs.size);
				} else {
					OutSystems_Log('Preloader: Error downloading module ' + entry + '. Error Code: ' + xhr.status);
				}

				if (totalModules == current) {
					OutSystems_Log('Preloader: All application modules loaded, starting to cache files');
					resourcesAddresses = Object.keys(preloadURLs.urls);
					OutSystems_CacheResources();
				}
			}

			xhr.onerror = function () {
				current++; // ignore module errors
				OutSystems_Log('Preloader: Error downloading module ' + entry + '. Error Code: ' + xhr.status);

				if (totalModules == current) {
					OutSystems_Log('Preloader: All application modules loaded, starting to cache files');
					resourcesAddresses = Object.keys(preloadURLs.urls);
					OutSystems_CacheResources();
				}
			}

			xhr.onabort = function () {
				current++; // ignore module errors
				OutSystems_Log('Preloader: Error downloading module (aborted) ' + entry + '. Error Code: ' + xhr.status);

				if (totalModules == current) {
					OutSystems_Log('Preloader: All application modules loaded, starting to cache files');
					resourcesAddresses = Object.keys(preloadURLs.urls);
					OutSystems_CacheResources();
				}
			}

			OutSystems_Log('Preloader: Loading module ' + entry);

			// Fetch manifest file, using an arbitrary suffix to ensure there's no cache hit
			var cacheInvalidationSuffix = '?' + new Date().getTime();
			xhr.open('GET', '/' + entry + '/precache.manifest' + cacheInvalidationSuffix, true);
			xhr.timeout = global.outsystems.api.preloader.manifestTimeout;
			xhr.send();
		});
	};

	global.outsystems.api.preloader.preloadApp = OutSystems_PreloadApp;
})(this);