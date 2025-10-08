<%@ Page Language="c#" Codebehind="InternalError.aspx.cs" AutoEventWireup="false" Inherits="ssContactManager.Flows.FlowCommon.ScrnInternalError" %>
<%@ Register TagPrefix="osweb" Namespace="OutSystems.HubEdition.WebWidgets" Assembly="OutSystems.HubEdition.WebWidgets" %>
<%@ Import namespace="ssContactManager" %>
<%@ Import namespace="OutSystems.HubEdition.RuntimePlatform" %>
<%@ Assembly Name="OutSystems.WidgetsRuntimeAPI" %>
<%@ Register TagPrefix="widgets" TagName="K_C9RMY3Tlkmkndhqz4X4nQ" Src="Blocks\ContactManager\Common\Layout_Normal.ascx" %>
<%@ Register TagPrefix="widgets" TagName="KRaaKItBSykuefvtic5G6FQ" Src="Blocks\ContactManager\Common\Menu.ascx" %>
<%@ Register TagPrefix="widgets" TagName="KbCSVaJcpZ0mjk1Rm1yvZwg" Src="Blocks\ContactManager\RichWidgets\RemovePopups.ascx" %>

<%= ContactManager_Properties.DocType %>
<html xmlns="http://www.w3.org/1999/xhtml" >
  <head runat="server"><%= GetHeadTopJavaScript() %>
	<title><%= HttpUtility.HtmlEncode (Title) %></title>
    <meta http-equiv="Content-Type" content="<%= "text/html; charset=" + Response.ContentEncoding.WebName %>" />
    <meta http-equiv="Content-Script-Type" content="text/javascript" />
    <meta http-equiv="Content-Style-Type" content="text/css" />
<%= "\n" + GetStyleSheetIncludes() %><%= GetRequestInfoJavaScript() + GetJavaScriptIncludes() + GetHeadBottomJavaScript() %>
  </head>
  <osweb:Body runat="server"><%= GetBodyTopJavaScript() %>
    <osweb:Form id="WebForm1" method="post"  action="<%# GetFormAction() %>" runat="server">
<widgets:K_C9RMY3Tlkmkndhqz4X4nQ runat="server" id="wt_WebBlockInstance8" OnEvaluateParameters="webBlck_WebBlockInstance8_onDataBinding" InstanceID="_WebBlockInstance8"><phMenu><widgets:KRaaKItBSykuefvtic5G6FQ runat="server" id="wt_WebBlockInstance6" OnEvaluateParameters="webBlck_WebBlockInstance6_onDataBinding" InstanceID="_WebBlockInstance6"></widgets:KRaaKItBSykuefvtic5G6FQ></phMenu><phTitle><osweb:PlaceHolder runat="server"><%# "Internal Error" %></osweb:PlaceHolder></phTitle><phMainContent><osweb:Container runat="server" id="wt_Container14" anonymous="true" onDataBinding="cnt_Container14_onDataBinding"><osweb:PlaceHolder runat="server"><%# "An internal error occurred and was logged.<br/>" %></osweb:PlaceHolder><osweb:IfPlaceHolder runat="server"><osweb:If runat="server" visible="<%# if_wt_If3() %>"><osweb:PlaceHolder runat="server"><%# "Please try again later or contact the administration team.<br/><br/>Sorry for any inconvenience." %></osweb:PlaceHolder></osweb:If><osweb:If runat="server" visible="<%# !if_wt_If3() %>"><osweb:PlaceHolder runat="server"><%# "Error details:<br/>" %></osweb:PlaceHolder><osweb:Span runat="server" id="wt_InlineExpression13" anonymous="true" class="Text_Error"><%# OutSystems.HubEdition.RuntimePlatform.RuntimePlatformUtils.ExtendedHtmlEncode(expression_InlineExpression13()) %></osweb:Span><osweb:Span runat="server" id="wt_Text7" anonymous="true" class="Text_Note"><%# "<br/>(This detailed error is not shown in the public area)" %></osweb:Span></osweb:If></osweb:IfPlaceHolder><osweb:PlaceHolder runat="server"><%# "<br/><br/>" %></osweb:PlaceHolder><osweb:LinkButton runat="server" id="wtlnkPopup" onDataBinding="lnklnkPopup_onDataBinding" Visible="<%# lnklnkPopup_isVisible() %>" Enabled="<%# lnklnkPopup_isEnabled() %>" CausesValidation="false"><osweb:PlaceHolder runat="server"><%# "Press here to continue" %></osweb:PlaceHolder></osweb:LinkButton></osweb:Container><osweb:PlaceHolder runat="server"><%# expression_InlineExpression11() %></osweb:PlaceHolder></phMainContent><phActions></phActions></widgets:K_C9RMY3Tlkmkndhqz4X4nQ><widgets:KbCSVaJcpZ0mjk1Rm1yvZwg runat="server" id="wt_WebBlockInstance20" OnEvaluateParameters="webBlck_WebBlockInstance20_onDataBinding" InstanceID="_WebBlockInstance20"></widgets:KbCSVaJcpZ0mjk1Rm1yvZwg><osweb:DummySubmitLink runat="server" id="Dummy_Submit_Link"/>
    <%= OutSystems.HubEdition.RuntimePlatform.AppInfo.GetAppInfo().GetWatermark() %><%= GetCallbackDebug()	
%><%= GetVisitCode() %></osweb:Form><%= GetEndPageJavaScript() + GetBodyBottomJavaScript() %>
  </osweb:Body>
</html>
