<%@ Page EnableSessionState="true" language="c#" AutoEventWireup="false"  %>
<%@ Import Namespace="OutSystems.HubEdition.RuntimePlatform" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<html>
	<head>
		<title>status</title>
	</head>
	<body>
		<% 
           Visits.CreatVisitLog(Request);
		%>
	</body>
</html>
