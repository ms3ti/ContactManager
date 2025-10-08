<%@ Page Language="c#" Codebehind="InvalidPermissions.aspx.cs" AutoEventWireup="false" Inherits="ssContactManager.Flows.FlowCommon.ScrnInvalidPermissions" EnableViewState="false" %>
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
<widgets:K_C9RMY3Tlkmkndhqz4X4nQ runat="server" id="wt_WebBlockInstance9" OnEvaluateParameters="webBlck_WebBlockInstance9_onDataBinding" InstanceID="_WebBlockInstance9"><phMenu><widgets:KRaaKItBSykuefvtic5G6FQ runat="server" id="wt_WebBlockInstance7" OnEvaluateParameters="webBlck_WebBlockInstance7_onDataBinding" InstanceID="_WebBlockInstance7"></widgets:KRaaKItBSykuefvtic5G6FQ></phMenu><phTitle><osweb:PlaceHolder runat="server"><%# "Invalid Permissions" %></osweb:PlaceHolder></phTitle><phMainContent><osweb:PlaceHolder runat="server"><%# "You don&#39;t have permissions to view the required screen. Please contact the system administrator." %></osweb:PlaceHolder></phMainContent><phActions></phActions></widgets:K_C9RMY3Tlkmkndhqz4X4nQ><widgets:KbCSVaJcpZ0mjk1Rm1yvZwg runat="server" id="wt_WebBlockInstance1" OnEvaluateParameters="webBlck_WebBlockInstance1_onDataBinding" InstanceID="_WebBlockInstance1"></widgets:KbCSVaJcpZ0mjk1Rm1yvZwg><osweb:DummySubmitLink runat="server" id="Dummy_Submit_Link"/>
    <%= OutSystems.HubEdition.RuntimePlatform.AppInfo.GetAppInfo().GetWatermark() %><%= GetCallbackDebug()	
%><%= GetVisitCode() %></osweb:Form><%= GetEndPageJavaScript() + GetBodyBottomJavaScript() %>
  </osweb:Body>
</html>
