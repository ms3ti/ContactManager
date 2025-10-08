<%@ Assembly Name="netstandard" %>
<%@ Import namespace="System.Net" %>
<%@ Import namespace="OutSystems.HubEdition.RuntimePlatform.Log" %>
<%@ Import namespace="OutSystems.HubEdition.RuntimePlatform.Db" %>
<%@ Import namespace="OutSystems.Internal.Db" %>
<%@ Import namespace="OutSystems.HubEdition.RuntimePlatform" %>
<%@ Assembly Name="OutSystems.HubEdition.WebWidgets" %>
<%@ Import namespace="OutSystems.HubEdition.WebWidgets" %>
<%@ Page language="c#" AutoEventWireup="true" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>Error</title>
		<script runat="server" language="C#">
HeContext heContext;
Exception excep;
bool ajaxRedirected;

protected override void Render(HtmlTextWriter writer) {
    // skip rendering for ajax redirected errors
    if (!ajaxRedirected)
        base.Render(writer);
}        

private void Page_Load(object sender, System.EventArgs e){
	AppInfo App = AppInfo.GetAppInfo();
	if (App != null) {
		heContext = App.OsContext;
	}

	excep = Server.GetLastError();
	if (excep == null) {
		excep = (Exception)Application["ApplicationStartError"]; // this key should not be used for this purpose

		if (excep == null) {
			excep = (Exception) HttpContext.Current.Items["LastUnhandledError"];
		}
	}

	ErrorLog.LogApplicationError(excep, heContext, "Global");

	bool isAjaxRequest = false;
	if (heContext != null) {
		isAjaxRequest = heContext.IsAjaxRequest;
	}
	if (!isAjaxRequest) {
		Response.StatusCode = 500;
	}

    // show placeholders
    AJAXPlaceHolder.Visible = false;
    RestartSessionPlaceHolder.Visible = false;
    RewriteUrlPlaceHolder.Visible = false;
    string entryPoint = heContext != null ? (string)heContext.Session[SessionInfo.ENTRYPOINT]: null;
    if (heContext != null && entryPoint != null && entryPoint != HeContext.UnknownEntryPoint && heContext.IsAjaxRequest) {
        AJAXPlaceHolder.Visible = true;
        RestartSessionLinkAJAX.NavigateUrl = entryPoint;
    } else if (heContext != null && entryPoint != null && entryPoint != HeContext.UnknownEntryPoint) {
		RestartSessionPlaceHolder.Visible = true;
		RestartSessionLink.NavigateUrl = entryPoint;
	} else {        
        RewriteUrlPlaceHolder.Visible = true;
	}	
	
	if (heContext != null && heContext.AppInfo != null && !heContext.AppInfo.Properties.RemoteShowStack){
		bool isLocal=false;
		if(OutSystems.HubEdition.RuntimePlatform.NetworkInterfaceUtils.IsLoopbackAddress(heContext.Context.Request.UserHostAddress)) {
			isLocal=true;
		} else {
			IPHostEntry hostInfo = Dns.GetHostEntry(Dns.GetHostName());
			
			for(int index=0; index < hostInfo.AddressList.Length; index++) 
				if(heContext.Context.Request.UserHostAddress == hostInfo.AddressList[index].ToString()){
					isLocal=true;
					break;
				}
		}
		if(!isLocal) {
			heContext.Context.Response.BufferOutput = true;
            string url = OutSystems.HubEdition.RuntimePlatform.RuntimePlatformSettings.Misc.DefaultErrorPage.GetValue();
            if (heContext.IsAjaxRequest) {
                // AJAX Redirect...
                if (url != null && url != "") {
                    OSPageViewState.WriteAJAXClientRedirectResponse(heContext.Context.Request, heContext.Context.Response, url);
                } else {
                    OSPageViewState.WriteAJAXClientRedirectResponse(heContext.Context.Request, heContext.Context.Response, "/ContactManager/CustomHandlers/internalerror.aspx");
                }
                ajaxRedirected = true;
            } else {
                // Submit redirect...
                if (url != null && url != "") {
                    heContext.Context.Response.Redirect(url);
                } else {
                    heContext.Context.Response.Redirect("/ContactManager/CustomHandlers/internalerror.aspx");
                }
            }
                
		}
	}
}

private void Page_Unload(object sender, System.EventArgs e){
	if( heContext != null) {
		DatabaseAccess.FreeupResources(true);
	}
}

private string GetMessages (Exception excep) {
	ArrayList exceptions = new ArrayList();
	while (excep != null) {
		exceptions.Add (excep);
		excep = excep.InnerException;
	}
	string message = "";
	for (int i = exceptions.Count; i > 0; i--) {
		excep = (Exception)exceptions[i-1];
		message += "<b>" + BuiltInFunction.EncodeHtml(excep.Message) + "</b><br>";
		message += BuiltInFunction.EncodeHtml(excep.StackTrace) + "<br>";
	}
	return message;
}

</script>

		<META NAME="ROBOTS" CONTENT="NOINDEX"/>
<style type="text/css">
.NormalText {
    font-size: 10pt;
    font-family: arial, helvetica, sans-serif;
}

.ErrorMessage {
    font-weight: bold;
    font-size: 10pt;
    color: #ff3333;
    font-family: arial, helvetica, sans-serif;
}

.DetailButton {
    border-right: #999999 1px solid;
    border-top: #ffffff 1px solid;
    font-size: 8pt;
    border-left: #ffffff 1px solid;
    border-bottom: #999999 1px solid;
    font-family: arial, helvetica, sans-serif;
    width: 80px;
}

.DetailLayer {
    background-color: #dddddd;
    display: none;
}</style>

<script type="text/javascript">
function toggleDetail() {
    var form1 = document.getElementById("form1");
	var DetailLayer = document.getElementById("DetailLayer");

	if (form1.ShowDetailButton.value == "Show Detail") {
		form1.ShowDetailButton.value = "Hide Detail";
	DetailLayer.style.display = "block";
	} else {
		form1.ShowDetailButton.value = "Show Detail";
	DetailLayer.style.display = "none";
	}
}
</script>

	</HEAD>
	<body>
		<p class="NormalText">There was an error processing your request:</p>
		<p class="ErrorMessage"><%= excep.Message.Replace ("\n","</br>") %>		</p>
		<form id="form1">
			<input type="button" name="ShowDetailButton" value="Show Detail" class="DetailButton" style="width: 80px" onclick="toggleDetail()">
		</form>
		<div id="DetailLayer" class="DetailLayer" style="display:none"><pre><%= GetMessages(excep) %></pre>
		</div>
		<p class="NormalText">
			<asp:PlaceHolder id="AJAXPlaceHolder" runat="server">
				Please click <a href="javascript:history.go(0)">refresh</a> on your browser and try again or, if the error persists, please <asp:HyperLink id="RestartSessionLinkAJAX" runat="server">restart your session</asp:HyperLink>.
			</asp:PlaceHolder>
			<asp:PlaceHolder id="RestartSessionPlaceHolder" runat="server">
				Please click <a href="javascript:history.back()">back</a> on your browser and try again or, if the error persists, please <asp:HyperLink id="RestartSessionLink" runat="server">restart your session</asp:HyperLink>.
			</asp:PlaceHolder>
			<asp:PlaceHolder id="RewriteUrlPlaceHolder" runat="server">
				Please rewrite the application URL.
			</asp:PlaceHolder>
		</p>
	</body>
</HTML>
