<%	
dim title
dim content

title = "Not found"
content = "The page cannot be found. Please make sure you typed the URL correctly."

title = Server.HTMLEncode (title)
content = Server.HTMLEncode (content)
Response.TrySkipIisCustomErrors = true
Response.StatusCode = 404

if (InStr(Request.ServerVariables("HTTP_ACCEPT"), "application/json") > 0) then
	Response.ContentType = "application/json"
	Response.Write("""Not Found""")
else
	if (InStr(Request.ServerVariables("HTTP_ACCEPT"), "application/vnd.wap.xhtml+xml")>0 or _
		InStr(Request.ServerVariables("HTTP_ACCEPT"), "application/xhtml+xml")>0) then
		Response.Write("<?xml version=""1.0"" encoding=""utf-8""?>")
		Response.Write("<html xmlns=""http://www.w3.org/1999/xhtml""><head><META NAME=""ROBOTS"" CONTENT=""NOINDEX""/><title>" & title & "</title></head>")
		Response.Write("<body bgcolor=""#FFFFFF"">" & content & "</body></html>")
	elseif (InStr(Request.ServerVariables("HTTP_ACCEPT"), "text/vnd.wap.wml")>0) then
		Response.ContentType = "text/vnd.wap.wml"
		Response.Write("<?xml version=""1.0""?>")
		Response.Write("<!DOCTYPE wml PUBLIC ""-//WAPFORUM//DTD WML 1.1//EN"" ""http://www.wapforum.org/DTD/wml_1.1.xml"">")
		Response.Write("<wml><card id=""card1"" title=""" & title & """><p>" & content & "<br/></p></card></wml>")
	else
		Response.Write("<html><head><META NAME=""ROBOTS"" CONTENT=""NOINDEX""/><title>" & title & "</title></head>")
		Response.Write("<body bgcolor=""#FFFFFF"">" & content & "</body></html>")
	end if
	Response.Write(Environment.Newline)
	Response.Write("<!--" + Environment.Newline)
	Response.Write("Adding additional hidden content to make sure IE renders the html" + Environment.Newline)
	Response.Write("(if the content is less than 512 bytes, it always shows an HTTP 404)" + Environment.Newline)
	Response.Write(Environment.Newline)
	Response.Write("Adding additional hidden content to make sure IE renders the html" + Environment.Newline)
	Response.Write("(if the content is less than 512 bytes, it always shows an HTTP 404)" + Environment.Newline)
	Response.Write(Environment.Newline)
	Response.Write("Adding additional hidden content to make sure IE renders the html" + Environment.Newline)
	Response.Write("(if the content is less than 512 bytes, it always shows an HTTP 404)" + Environment.Newline)
	Response.Write(Environment.Newline)
	Response.Write("Adding additional hidden content to make sure IE renders the html" + Environment.Newline)
	Response.Write("(if the content is less than 512 bytes, it always shows an HTTP 404)" + Environment.Newline)
	Response.Write("-->")
end if

Response.End

%>