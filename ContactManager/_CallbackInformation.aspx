<%@ Page EnableSessionState="False" language="c#" AutoEventWireup="false" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<html>
	<head>
		<title>Callback Debug Information</title>
	</head>
	<body>
<%= 
	(Request.HttpMethod == "GET" && Request.QueryString["__CALLBACK_DEBUG" ] != null && Request.QueryString["__CALLBACK_DEBUG" ] != "" ? 
		(Request.QueryString["__CALLBACK_DEBUG" ] == OutSystems.HubEdition.RuntimePlatform.RuntimePlatformSettings.Misc.CallbackDebugInformationKey.GetValue() ?
			OutSystems.HubEdition.RuntimePlatform.AppInfo.GetAppInfo().GetCallbackDebugInformation() :
			"")
		: "")
%>		
	</body>
</html>
