var RichWidgets_Feedback_Message_timerHide;
var RichWidgets_Feedback_Message_widget;
var RichWidgets_Feedback_Message_notifyWidget;
var RichWidgets_Feedback_Message_Feedback;

// Detect whether or not we are loading this page from the browser cache
osjs(function($) {
    var CACHE_COOKIE = 'pageLoadedFromBrowserCache';
    osjs.loadedFromBrowserCache = (document.cookie.indexOf(CACHE_COOKIE + "=true") != -1);
    document.cookie = CACHE_COOKIE + "=true;path=/";
});

  
function RichWidgets_Feedback_Message_feedbackSlideDown(feedbackWrapperId, autoHide){
  osjs(function($){
    
    //Prevent messages from showing when the user clicks the browser back button
    if (osjs.loadedFromBrowserCache)
        return;
    feedbackWrapperId = '#' + feedbackWrapperId;

    var isMobile = ('ontouchstart' in document.documentElement);
    
    if (isMobile) { //mobile phones
        $(feedbackWrapperId).css("position","absolute");
        $('.Feedback_Message_Wrapper_Close').hide();
        $(feedbackWrapperId).css("top", window.pageYOffset  +"px");
        $(window).bind('scroll', function() {
          $(feedbackWrapperId).css("top", (window.pageYOffset==null?document.documentElement.scrollTop:window.pageYOffset)  +"px");
        });
        $(feedbackWrapperId).bind('click', function() {
          $(feedbackWrapperId).css("top", (window.pageYOffset==null?document.documentElement.scrollTop:window.pageYOffset)  +"px");
        });             
    }
    
    try { //dropShadow
      $(feedbackWrapperId).find('div:eq(0)').dropShadow({left:2, top:0});
    } catch (ex) { }    
    
    //Cancel previous hide animation if exists
    clearTimeout(RichWidgets_Feedback_Message_timerHide);
    if (RichWidgets_Feedback_Message_widget)
      RichWidgets_Feedback_Message_widget.stop().hide();


    $(feedbackWrapperId).hide();
    if(!($.browser.msie && $.browser.version<7) && !isMobile)
      $(feedbackWrapperId).css("top", "-2px"); //Don't do this in IE 6

    //Slidedown Feedback 
    RichWidgets_Feedback_Message_widget = $(feedbackWrapperId).show('slide',{direction:'up'}, 600, function(){
        var slideUp = function(){
          $(feedbackWrapperId).css("height","auto");
          $(RichWidgets_Feedback_Message_widget).hide('slide',{direction:'up'}, 500); 
          clearTimeout(RichWidgets_Feedback_Message_timerHide);
        };
        $(feedbackWrapperId).find('.Feedback_Message_Wrapper_Close').click(slideUp);
        $(feedbackWrapperId).bind('touchstart', slideUp); // mobile devices
        $(feedbackWrapperId).css("height",0);// to avoid ignoring clicks
        if (autoHide) {
          RichWidgets_Feedback_Message_timerHide = window.setTimeout(slideUp, 15000);
        }
      });

    try {
      if(!($.browser.msie && $.browser.version<7) && !($.browser.mozilla && $.browser.version.split('.')[0]<=1 && $.browser.version.split('.')[1]<9)){ 
        //FF2 and IE6 do not support this 
        $(feedbackWrapperId).find('div:eq(0)').corner();
      }
    } catch (ex) { }
    $(feedbackWrapperId).find('.Feedback_Message_Wrapper_Close').css('right', '0px');
  });
}

var RichWidgets_Feedback_Message_errorTrapped = false;
function RichWidgets_Feedback_Message_ErrorHandler(event, exception) {
  if (!RichWidgets_Feedback_Message_errorTrapped)
    OsNotifyWidget(RichWidgets_Feedback_Message_notifyWidget, '3) An exception occurred in the client script.<br\> Error: ' + (exception.message == ''? exception : exception.message) );
  RichWidgets_Feedback_Message_errorTrapped = true;
}

