function RichWidgets_Container_Round(divId){
    osjs(function($){
        if (!($.browser.msie && $.browser.version<7) && !($.browser.mozilla && $.browser.version.split('.')[0]<=1 && $.browser.version.split('.')[1]<9)) {
            //FF2 and IE6 do not support this
            var container = $('#' + divId);
            if (container.length>0 && container.css('border-top-style')=='none' && container.css('background-color')=='transparent' && container.css("background-image")=='none')
                window.OsHandleException(new Error('The element to apply rounded corners to needs to have a style with a border or a background'), $.osErrorCodes.SystemJavascriptError, 'Container_Round');
            else
                container.corner();
     }
 });
}

function RichWidgets_Container_RoundTops(selector){
    osjs(function($){
        if(!($.browser.msie && $.browser.version<7) && !($.browser.mozilla && $.browser.version.split('.')[0]<=1 && $.browser.version.split('.')[1]<9)) {
            //FF2 and IE6 do not support this
            $(selector).corner({
                tl: { radius: 5 },
                tr: { radius: 5 },
                bl: { radius: 0 },
                br: { radius: 0 }
            });
            if ($.browser.msie && $.browser.version==9) {
                $(selector).css('margin-top','0');
                $(selector).css('margin-bottom','0');
            }
        }
    });
}