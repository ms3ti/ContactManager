var RichWidgets_Feedback_AjaxWait_ajaxWaitMessageTimer;
var RichWidgets_Feedback_AjaxWait_Timeout = 200;

function RichWidgets_Feedback_AjaxWait_init(divId) {
 osjs(function($) {
  osAjaxBackend.BindBeforeAjaxRequest(function(){
   RichWidgets_Feedback_AjaxWait_ajaxWaitMessageTimer = setTimeout(function () { $('#' + divId).fadeIn();} , RichWidgets_Feedback_AjaxWait_Timeout);
  });
  window.OsOnBeforeChange = function(){
   clearTimeout(RichWidgets_Feedback_AjaxWait_ajaxWaitMessageTimer);
   $('#' + divId ).fadeOut();
  };
  $(window).unload(function() {
   window.OsOnBeforeChange = null;
  });
  osAjaxBackend.BindAfterAjaxRequest(function(){window.OsOnBeforeChange();});
 
  var isIPhoneOrIPad = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);
  //iphone, ipad and ipod do not support fixed position
  if ( isIPhoneOrIPad) {
    $('.Feedback_AjaxWait').css("position","absolute");
    $(document).bind('touchstart', function() {
      $('.Feedback_AjaxWait').css("bottom", "0px");
    });
    $(window).bind('scroll', function() {
      $('.Feedback_AjaxWait').css("bottom", (-(window.pageYOffset==null?document.documentElement.scrollTop:window.pageYOffset) + (window.navigator.standalone? 0:-60))  +"px");
    });

    osjs(window).bind('touchend', function() {
      $('.Feedback_AjaxWait').css("bottom", (-(window.pageYOffset==null?document.documentElement.scrollTop:window.pageYOffset) + (window.navigator.standalone? 0:-60)) +"px");
    });         
  }
    
 });
}


