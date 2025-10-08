<%--
How to change the message and the style of the error page?
	- Edit the content of this template

How to apply the changes made here to the whole farm environment?
	- Copy this file to all nodes of your farm.
	(normally the target directory is C:\Program Files\OutSystems\Platform Server\customHandlers)
	
The following request parameters are sent to this page:
	- contact: the email address of the Platform Server administrator.
	- errorCode: used to identify the error type. Possible values are:
		- "APPLICATION_OFFLINE": indicates that the application was deliberately taken offline in Service Center. 
		- "APPLICATION_LICENSING_ERROR": indicates that the application was taken offline due to a licensing error.
	- errorDetail: Detailed information about licensing errors.

--%>

<%@ Import namespace="System.Net" %>
<%@ Page language="c#" AutoEventWireup="true" %>
<% 
// PLACEHOLDER TO STATUS CODE UPGRADER, DO NOT DELETE
Response.TrySkipIisCustomErrors = true;
Response.StatusCode = 503; 
%>
<% if (Request.ServerVariables["HTTP_ACCEPT"] != null && Request.ServerVariables["HTTP_ACCEPT"].Contains("application/json")) { %>
<%
    Response.TrySkipIisCustomErrors = true;
    Response.ContentType = "application/json";
%>{"exception":{"name":"ApplicationBackendUnavailableException","message":"Application Backend Unavailable"}}<% } else { %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<html>
<head>
	<title>Application Unavailable</title>
	<link type="text/css" rel="stylesheet" href="/<%= Application["EspaceName"] %>/customHandlers/default.css"></link>
</head>
<body class="appOfflineBody">
	<div class="errorBox" align="center">
		<div class="errorTitle" align="left">
			<img src="/<%= Application["EspaceName"] %>/customHandlers/stop.png" class="errorImage" />
			<div class="errorMessageTitle">				
				<% if (Context.Items["AppOffline_ErrorCode"] == "APPLICATION_OFFLINE") { %>
					Application Temporarily Unavailable
				<% } else { %> 
					Application Unavailable
				<% } %> 
			</div>
		</div>
		<div class="errorDescription" align="left">
			This application is currently unavailable.<br/>
			Please try again later or contact the 
			<% if (Context.Items["AppOffline_Contact"] != "") { %>
				<a href='mailto:<%: Context.Items["AppOffline_Contact"] %>'>system administrator</a>.
			<% } else { %>
				system administrator.
			<% } %> 
		</div>
<%-- Uncomment the block below if you want to display detailed error messages --%>
<%--
		<div class="errorDetail" align="left">			
			<%: Context.Items["AppOffline_ErrorCode"] %><br/>
			<%: Context.Items["AppOffline_ErrorDetail"] %>
		</div>
--%>
	</div>		
</body>
</html>
<!--        
    Adding additional hidden content to make sure IE renders the html
    (if the content is less than 512 bytes, it always shows an HTTP 404)
    
    Adding additional hidden content to make sure IE renders the html
    (if the content is less than 512 bytes, it always shows an HTTP 404)

    Adding additional hidden content to make sure IE renders the html
    (if the content is less than 512 bytes, it always shows an HTTP 404)

    Adding additional hidden content to make sure IE renders the html
    (if the content is less than 512 bytes, it always shows an HTTP 404)
-->
<% } %> 