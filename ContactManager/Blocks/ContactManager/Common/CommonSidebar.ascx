<%@ Control Language="c#" AutoEventWireup="false" Codebehind="Blocks\ContactManager\Common\CommonSidebar.ascx.cs" Inherits="ssContactManager.Flows.FlowCommon.WBlkCommonSidebar,ContactManager" TargetSchema="http://schemas.microsoft.com/intellisense/ie5"%>
<%@ Register TagPrefix="osweb" Namespace="OutSystems.HubEdition.WebWidgets" Assembly="OutSystems.HubEdition.WebWidgets" %>
<%@ Assembly Name="OutSystems.WidgetsRuntimeAPI" %>
<%@ Import namespace="ssContactManager" %>
<%@ Register TagPrefix="widgets" TagName="KSrtG47qYXkWEbCEK8mKqcw" Src="..\..\ContactManager\RichWidgets\RecentItems.ascx" %>
<%# PageStartHook() %><osweb:Container runat="server" id="wt_Container2" anonymous="true" onDataBinding="cnt_Container2_onDataBinding" cssClass="Sidebar_Block"><widgets:KSrtG47qYXkWEbCEK8mKqcw runat="server" id="wt_WebBlockInstance1" OnEvaluateParameters="webBlck_WebBlockInstance1_onDataBinding" InstanceID="_WebBlockInstance1"></widgets:KSrtG47qYXkWEbCEK8mKqcw></osweb:Container><%# PageEndHook() %>