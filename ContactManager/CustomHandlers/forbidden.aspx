<%--
How to change the message and the style of the error page?
	- Edit the content of this template

How to apply the changes made here to the whole farm environment?
	- Copy this file to all nodes of your farm.
	(normally the target directory is C:\Program Files\OutSystems\Platform Server\customHandlers)

--%>

<%@ Import namespace="System.Net" %>
<%@ Page language="c#" AutoEventWireup="true" %>
<% Response.TrySkipIisCustomErrors = true; %>
<% Response.StatusCode = 403; %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<html>
<head>
	<title>403 - Forbidden Access</title>
	<link type="text/css" rel="stylesheet" href="/<%= Application["EspaceName"] %>/customHandlers/default.css"></link>
</head>
<body>
	<div class="forbiddenMessage">
        403 - Forbidden
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