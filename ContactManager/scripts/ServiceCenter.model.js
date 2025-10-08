define("ServiceCenter.model$Developer_EspaceRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_EspaceRec = (function (_super) {
__extends(Developer_EspaceRec, _super);
function Developer_EspaceRec(defaults) {
_super.apply(this, arguments);
}
Developer_EspaceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Security_Level", "security_LevelAttr", "Security_Level", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Developer_EspaceRec.init();
return Developer_EspaceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_EspaceRec = Developer_EspaceRec;

});
define("ServiceCenter.model$Recompilation_Errors_LogRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Recompilation_Errors_LogRec = (function (_super) {
__extends(Recompilation_Errors_LogRec, _super);
function Recompilation_Errors_LogRec(defaults) {
_super.apply(this, arguments);
}
Recompilation_Errors_LogRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("OML", "oMLAttr", "OML", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Detail", "detailAttr", "Detail", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Module", "moduleAttr", "Module", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Recompilation_Errors_LogRec.init();
return Recompilation_Errors_LogRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Recompilation_Errors_LogRec = Recompilation_Errors_LogRec;

});
define("ServiceCenter.model$Report_Slow_Web_ServiceRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Slow_Web_ServiceRec = (function (_super) {
__extends(Report_Slow_Web_ServiceRec, _super);
function Report_Slow_Web_ServiceRec(defaults) {
_super.apply(this, arguments);
}
Report_Slow_Web_ServiceRec.attributesToDeclare = function () {
return [
this.attr("espace", "espaceAttr", "espace", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("name", "nameAttr", "name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("method", "methodAttr", "method", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("avgtime", "avgtimeAttr", "avgtime", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("count", "countAttr", "count", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("totaltime", "totaltimeAttr", "totaltime", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("reportId", "reportIdAttr", "reportId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("errors", "errorsAttr", "errors", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_Slow_Web_ServiceRec.init();
return Report_Slow_Web_ServiceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Slow_Web_ServiceRec = Report_Slow_Web_ServiceRec;

});
define("ServiceCenter.model$RoleRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var RoleRec = (function (_super) {
__extends(RoleRec, _super);
function RoleRec(defaults) {
_super.apply(this, arguments);
}
RoleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Persistent", "persistentAttr", "Persistent", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RoleRec.init();
return RoleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.RoleRec = RoleRec;

});
define("ServiceCenter.model$Developer_ExtensionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_ExtensionRec = (function (_super) {
__extends(Developer_ExtensionRec, _super);
function Developer_ExtensionRec(defaults) {
_super.apply(this, arguments);
}
Developer_ExtensionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Security_Level", "security_LevelAttr", "Security_Level", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Developer_ExtensionRec.init();
return Developer_ExtensionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_ExtensionRec = Developer_ExtensionRec;

});
define("ServiceCenter.model$Report_TypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_TypeRec = (function (_super) {
__extends(Report_TypeRec, _super);
function Report_TypeRec(defaults) {
_super.apply(this, arguments);
}
Report_TypeRec.attributesToDeclare = function () {
return [
this.attr("Report_Type", "report_TypeAttr", "Report_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_TypeRec.fromStructure = function (str) {
return new Report_TypeRec(new Report_TypeRec.RecordClass({
report_TypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Report_TypeRec.init();
return Report_TypeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_TypeRec = Report_TypeRec;

});
define("ServiceCenter.model$ExportSearchApiRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ExportSearchApiRequestRec = (function (_super) {
__extends(ExportSearchApiRequestRec, _super);
function ExportSearchApiRequestRec(defaults) {
_super.apply(this, arguments);
}
ExportSearchApiRequestRec.attributesToDeclare = function () {
return [
this.attr("Query", "queryAttr", "query", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExportSearchApiRequestRec.fromStructure = function (str) {
return new ExportSearchApiRequestRec(new ExportSearchApiRequestRec.RecordClass({
queryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExportSearchApiRequestRec.init();
return ExportSearchApiRequestRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ExportSearchApiRequestRec = ExportSearchApiRequestRec;

});
define("ServiceCenter.model$AppMobile_BTypeA_ExtRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var AppMobile_BTypeA_ExtRec = (function (_super) {
__extends(AppMobile_BTypeA_ExtRec, _super);
function AppMobile_BTypeA_ExtRec(defaults) {
_super.apply(this, arguments);
}
AppMobile_BTypeA_ExtRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("BuildType_Android", "buildType_AndroidAttr", "BuildType_Android", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FileExtensionOverride", "fileExtensionOverrideAttr", "FileExtensionOverride", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppMobile_BTypeA_ExtRec.init();
return AppMobile_BTypeA_ExtRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.AppMobile_BTypeA_ExtRec = AppMobile_BTypeA_ExtRec;

});
define("ServiceCenter.model$Deprecated_Authentication_Provider_PropertiesRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Deprecated_Authentication_Provider_PropertiesRec = (function (_super) {
__extends(Deprecated_Authentication_Provider_PropertiesRec, _super);
function Deprecated_Authentication_Provider_PropertiesRec(defaults) {
_super.apply(this, arguments);
}
Deprecated_Authentication_Provider_PropertiesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ExtAuthProviderId", "extAuthProviderIdAttr", "ExtAuthProviderId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SupportedPropertyId", "supportedPropertyIdAttr", "SupportedPropertyId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PropertyValue", "propertyValueAttr", "PropertyValue", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Deprecated_Authentication_Provider_PropertiesRec.init();
return Deprecated_Authentication_Provider_PropertiesRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Deprecated_Authentication_Provider_PropertiesRec = Deprecated_Authentication_Provider_PropertiesRec;

});
define("ServiceCenter.model$Activity_OutputRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_OutputRec = (function (_super) {
__extends(Activity_OutputRec, _super);
function Activity_OutputRec(defaults) {
_super.apply(this, arguments);
}
Activity_OutputRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Output_Def_Id", "output_Def_IdAttr", "Output_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Activity_Id", "activity_IdAttr", "Activity_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Output_Value", "output_ValueAttr", "Output_Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Type", "sS_TypeAttr", "SS_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Activity_OutputRec.init();
return Activity_OutputRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_OutputRec = Activity_OutputRec;

});
define("ServiceCenter.model$Espace_VersionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_VersionRec = (function (_super) {
__extends(Espace_VersionRec, _super);
function Espace_VersionRec(defaults) {
_super.apply(this, arguments);
}
Espace_VersionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Version", "versionAttr", "Version", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("OML_File", "oML_FileAttr", "OML_File", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("Uploaded_By", "uploaded_ByAttr", "Uploaded_By", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Uploaded_Date", "uploaded_DateAttr", "Uploaded_Date", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("eSpace_Id", "eSpace_IdAttr", "eSpace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Valid", "is_ValidAttr", "Is_Valid", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Service_Studio_Version", "service_Studio_VersionAttr", "Service_Studio_Version", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Last_Upgrade_Version", "last_Upgrade_VersionAttr", "Last_Upgrade_Version", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Based_On_Previous", "based_On_PreviousAttr", "Based_On_Previous", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Hash", "hashAttr", "Hash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Publishing_Id", "publishing_IdAttr", "Publishing_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Last_Modified", "last_ModifiedAttr", "Last_Modified", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Has_HTTPS", "has_HTTPSAttr", "Has_HTTPS", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Has_HTTPSClientCertificates", "has_HTTPSClientCertificatesAttr", "Has_HTTPSClientCertificates", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Has_IntegratedAuthentication", "has_IntegratedAuthenticationAttr", "Has_IntegratedAuthentication", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Has_SMS", "has_SMSAttr", "Has_SMS", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Has_WebServices", "has_WebServicesAttr", "Has_WebServices", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Has_PublicElements", "has_PublicElementsAttr", "Has_PublicElements", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("DBCatalog_Id", "dBCatalog_IdAttr", "DBCatalog_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_User_Provider", "is_User_ProviderAttr", "Is_User_Provider", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("User_Provider_Key", "user_Provider_KeyAttr", "User_Provider_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Provider_Name", "user_Provider_NameAttr", "User_Provider_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastUpdateDate", "lastUpdateDateAttr", "LastUpdateDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("HMAC", "hMACAttr", "HMAC", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OmlHash", "omlHashAttr", "OmlHash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Default_Theme_Is_Mobile", "default_Theme_Is_MobileAttr", "Default_Theme_Is_Mobile", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("HMACVersion", "hMACVersionAttr", "HMACVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OmlHashVersion", "omlHashVersionAttr", "OmlHashVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Direct_Upgrade_From_Hash", "direct_Upgrade_From_HashAttr", "Direct_Upgrade_From_Hash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GeneralHash", "generalHashAttr", "GeneralHash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("JQueryVersion", "jQueryVersionAttr", "JQueryVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EspaceKind", "espaceKindAttr", "EspaceKind", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Espace_VersionRec.init();
return Espace_VersionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_VersionRec = Espace_VersionRec;

});
define("ServiceCenter.model$Site_Property_DefinitionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Site_Property_DefinitionRec = (function (_super) {
__extends(Site_Property_DefinitionRec, _super);
function Site_Property_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Site_Property_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Default_Value", "default_ValueAttr", "Default_Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Shared", "is_SharedAttr", "Is_Shared", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Site_Property_DefinitionRec.init();
return Site_Property_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Site_Property_DefinitionRec = Site_Property_DefinitionRec;

});
define("ServiceCenter.model$Report_Integrations_PerformanceRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Integrations_PerformanceRec = (function (_super) {
__extends(Report_Integrations_PerformanceRec, _super);
function Report_Integrations_PerformanceRec(defaults) {
_super.apply(this, arguments);
}
Report_Integrations_PerformanceRec.attributesToDeclare = function () {
return [
this.attr("espace", "espaceAttr", "espace", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("method", "methodAttr", "method", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("avgtime", "avgtimeAttr", "avgtime", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("count", "countAttr", "count", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("totaltime", "totaltimeAttr", "totaltime", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("reportId", "reportIdAttr", "reportId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("errors", "errorsAttr", "errors", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_Integrations_PerformanceRec.init();
return Report_Integrations_PerformanceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Integrations_PerformanceRec = Report_Integrations_PerformanceRec;

});
define("ServiceCenter.model$AppMobile_BTypeIOSRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var AppMobile_BTypeIOSRec = (function (_super) {
__extends(AppMobile_BTypeIOSRec, _super);
function AppMobile_BTypeIOSRec(defaults) {
_super.apply(this, arguments);
}
AppMobile_BTypeIOSRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppMobile_BTypeIOSRec.init();
return AppMobile_BTypeIOSRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.AppMobile_BTypeIOSRec = AppMobile_BTypeIOSRec;

});
define("ServiceCenter.model$Authentication_ProviderRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Authentication_ProviderRec = (function (_super) {
__extends(Authentication_ProviderRec, _super);
function Authentication_ProviderRec(defaults) {
_super.apply(this, arguments);
}
Authentication_ProviderRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EspaceId", "espaceIdAttr", "EspaceId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("WebServiceId", "webServiceIdAttr", "WebServiceId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LastUsed", "lastUsedAttr", "LastUsed", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Authentication_ProviderRec.init();
return Authentication_ProviderRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Authentication_ProviderRec = Authentication_ProviderRec;

});
define("ServiceCenter.model$Developer_DBCatalogRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_DBCatalogRec = (function (_super) {
__extends(Developer_DBCatalogRec, _super);
function Developer_DBCatalogRec(defaults) {
_super.apply(this, arguments);
}
Developer_DBCatalogRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DBCatalog_Id", "dBCatalog_IdAttr", "DBCatalog_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Security_Level", "security_LevelAttr", "Security_Level", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Developer_DBCatalogRec.init();
return Developer_DBCatalogRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_DBCatalogRec = Developer_DBCatalogRec;

});
define("ServiceCenter.model$Report_Espace_UsageRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Espace_UsageRec = (function (_super) {
__extends(Report_Espace_UsageRec, _super);
function Report_Espace_UsageRec(defaults) {
_super.apply(this, arguments);
}
Report_Espace_UsageRec.attributesToDeclare = function () {
return [
this.attr("espaceId", "espaceIdAttr", "espaceId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("reportId", "reportIdAttr", "reportId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("WebHits", "webHitsAttr", "WebHits", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("WebServices", "webServicesAttr", "WebServices", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Errors", "errorsAttr", "Errors", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UserLogins", "userLoginsAttr", "UserLogins", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ActiveUsers", "activeUsersAttr", "ActiveUsers", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Sessions", "sessionsAttr", "Sessions", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SessionDuration", "sessionDurationAttr", "SessionDuration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("HitsPerSession", "hitsPerSessionAttr", "HitsPerSession", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SlowWebHits", "slowWebHitsAttr", "SlowWebHits", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TimerRuns", "timerRunsAttr", "TimerRuns", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SlowTimerRuns", "slowTimerRunsAttr", "SlowTimerRuns", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ExtensionCalls", "extensionCallsAttr", "ExtensionCalls", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SlowExtensionCalls", "slowExtensionCallsAttr", "SlowExtensionCalls", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MobileRequests", "mobileRequestsAttr", "MobileRequests", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_Espace_UsageRec.init();
return Report_Espace_UsageRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Espace_UsageRec = Report_Espace_UsageRec;

});
define("ServiceCenter.model$Site_PropertyRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Site_PropertyRec = (function (_super) {
__extends(Site_PropertyRec, _super);
function Site_PropertyRec(defaults) {
_super.apply(this, arguments);
}
Site_PropertyRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Site_Property_Definition_Id", "site_Property_Definition_IdAttr", "Site_Property_Definition_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Property_Value", "property_ValueAttr", "Property_Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Modified", "user_ModifiedAttr", "User_Modified", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Site_PropertyRec.init();
return Site_PropertyRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Site_PropertyRec = Site_PropertyRec;

});
define("ServiceCenter.model$LogicalDatabaseRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var LogicalDatabaseRec = (function (_super) {
__extends(LogicalDatabaseRec, _super);
function LogicalDatabaseRec(defaults) {
_super.apply(this, arguments);
}
LogicalDatabaseRec.attributesToDeclare = function () {
return [
this.attr("Extension", "extensionAttr", "Extension", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LogicalDatabase", "logicalDatabaseAttr", "LogicalDatabase", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LogicalDatabaseRec.init();
return LogicalDatabaseRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.LogicalDatabaseRec = LogicalDatabaseRec;

});
define("ServiceCenter.model$ActivationRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ActivationRec = (function (_super) {
__extends(ActivationRec, _super);
function ActivationRec(defaults) {
_super.apply(this, arguments);
}
ActivationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Info", "infoAttr", "Info", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Host", "hostAttr", "Host", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Binary_Data", "binary_DataAttr", "Binary_Data", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("Text", "textAttr", "Text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HMAC", "hMACAttr", "HMAC", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HMACVersion", "hMACVersionAttr", "HMACVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ActivationRec.init();
return ActivationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ActivationRec = ActivationRec;

});
define("ServiceCenter.model$SiteHeaderRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var SiteHeaderRec = (function (_super) {
__extends(SiteHeaderRec, _super);
function SiteHeaderRec(defaults) {
_super.apply(this, arguments);
}
SiteHeaderRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RuleId", "ruleIdAttr", "RuleId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SiteHeaderRec.init();
return SiteHeaderRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.SiteHeaderRec = SiteHeaderRec;

});
define("ServiceCenter.model$PathRuleRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PathRuleRec = (function (_super) {
__extends(PathRuleRec, _super);
function PathRuleRec(defaults) {
_super.apply(this, arguments);
}
PathRuleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RuleOrder", "ruleOrderAttr", "RuleOrder", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Incoming", "incomingAttr", "Incoming", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Translation", "translationAttr", "Translation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Redirect", "redirectAttr", "Redirect", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("UseRegexp", "useRegexpAttr", "UseRegexp", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("StopProcessing", "stopProcessingAttr", "StopProcessing", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExclusiveToSiteRule", "exclusiveToSiteRuleAttr", "ExclusiveToSiteRule", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Kind", "kindAttr", "Kind", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PathRuleRec.init();
return PathRuleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PathRuleRec = PathRuleRec;

});
define("ServiceCenter.model$Activity_KindRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_KindRec = (function (_super) {
__extends(Activity_KindRec, _super);
function Activity_KindRec(defaults) {
_super.apply(this, arguments);
}
Activity_KindRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Activity_KindRec.init();
return Activity_KindRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_KindRec = Activity_KindRec;

});
define("ServiceCenter.model$App_Mobile_BuildRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var App_Mobile_BuildRec = (function (_super) {
__extends(App_Mobile_BuildRec, _super);
function App_Mobile_BuildRec(defaults) {
_super.apply(this, arguments);
}
App_Mobile_BuildRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Tracking_Number", "tracking_NumberAttr", "Tracking_Number", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Requested_By", "requested_ByAttr", "Requested_By", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Started_On", "started_OnAttr", "Started_On", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Finished_On", "finished_OnAttr", "Finished_On", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Build_Status", "build_StatusAttr", "Build_Status", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Build_Details", "build_DetailsAttr", "Build_Details", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("App_Mobile_Config", "app_Mobile_ConfigAttr", "App_Mobile_Config", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("App_Version", "app_VersionAttr", "App_Version", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Secret", "secretAttr", "Secret", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NativeHash", "nativeHashAttr", "NativeHash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VersionNumber", "versionNumberAttr", "VersionNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "0.1";
}, true), 
this.attr("VersionCode", "versionCodeAttr", "VersionCode", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ConfigurationHash", "configurationHashAttr", "ConfigurationHash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
App_Mobile_BuildRec.init();
return App_Mobile_BuildRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.App_Mobile_BuildRec = App_Mobile_BuildRec;

});
define("ServiceCenter.model$AssemblyRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var AssemblyRec = (function (_super) {
__extends(AssemblyRec, _super);
function AssemblyRec(defaults) {
_super.apply(this, arguments);
}
AssemblyRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Area_Id", "area_IdAttr", "Area_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Hash", "hashAttr", "Hash", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Signature", "signatureAttr", "Signature", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("In_Debug", "in_DebugAttr", "In_Debug", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Debugger_Version", "debugger_VersionAttr", "Debugger_Version", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CompiledButNotDeployedHash", "compiledButNotDeployedHashAttr", "CompiledButNotDeployedHash", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AssemblyRec.init();
return AssemblyRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.AssemblyRec = AssemblyRec;

});
define("ServiceCenter.model$Report_SuRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_SuRec = (function (_super) {
__extends(Report_SuRec, _super);
function Report_SuRec(defaults) {
_super.apply(this, arguments);
}
Report_SuRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("OMLComplexity", "oMLComplexityAttr", "OMLComplexity", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EspaceId", "espaceIdAttr", "EspaceId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Licensed_SUs", "licensed_SUsAttr", "Licensed_SUs", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Used_Licensed_SUs", "used_Licensed_SUsAttr", "Used_Licensed_SUs", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastUpdateDate", "lastUpdateDateAttr", "LastUpdateDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("HMAC", "hMACAttr", "HMAC", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HMACVersion", "hMACVersionAttr", "HMACVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_SuRec.init();
return Report_SuRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_SuRec = Report_SuRec;

});
define("ServiceCenter.model$Espace_ExtensionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_ExtensionRec = (function (_super) {
__extends(Espace_ExtensionRec, _super);
function Espace_ExtensionRec(defaults) {
_super.apply(this, arguments);
}
Espace_ExtensionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Espace_ExtensionRec.init();
return Espace_ExtensionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_ExtensionRec = Espace_ExtensionRec;

});
define("ServiceCenter.model$APIStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var APIStatusRec = (function (_super) {
__extends(APIStatusRec, _super);
function APIStatusRec(defaults) {
_super.apply(this, arguments);
}
APIStatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ResponseId", "responseIdAttr", "ResponseId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ResponseMessage", "responseMessageAttr", "ResponseMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ResponseAdditionalInfo", "responseAdditionalInfoAttr", "ResponseAdditionalInfo", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
APIStatusRec.init();
return APIStatusRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.APIStatusRec = APIStatusRec;

});
define("ServiceCenter.model$TenantRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var TenantRec = (function (_super) {
__extends(TenantRec, _super);
function TenantRec(defaults) {
_super.apply(this, arguments);
}
TenantRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TenantRec.init();
return TenantRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.TenantRec = TenantRec;

});
define("ServiceCenter.model$Report_Hourly_UsageRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Hourly_UsageRec = (function (_super) {
__extends(Report_Hourly_UsageRec, _super);
function Report_Hourly_UsageRec(defaults) {
_super.apply(this, arguments);
}
Report_Hourly_UsageRec.attributesToDeclare = function () {
return [
this.attr("espaceId", "espaceIdAttr", "espaceId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("reportId", "reportIdAttr", "reportId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("WebHits", "webHitsAttr", "WebHits", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("WebServices", "webServicesAttr", "WebServices", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Errors", "errorsAttr", "Errors", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Hour", "hourAttr", "Hour", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SlowWebScreens", "slowWebScreensAttr", "SlowWebScreens", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TimerRuns", "timerRunsAttr", "TimerRuns", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SlowTimerRuns", "slowTimerRunsAttr", "SlowTimerRuns", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ExtensionCalls", "extensionCallsAttr", "ExtensionCalls", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SlowExtensionCalls", "slowExtensionCallsAttr", "SlowExtensionCalls", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MobileRequests", "mobileRequestsAttr", "MobileRequests", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_Hourly_UsageRec.init();
return Report_Hourly_UsageRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Hourly_UsageRec = Report_Hourly_UsageRec;

});
define("ServiceCenter.model$Meta_Cyclic_JobRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Meta_Cyclic_JobRec = (function (_super) {
__extends(Meta_Cyclic_JobRec, _super);
function Meta_Cyclic_JobRec(defaults) {
_super.apply(this, arguments);
}
Meta_Cyclic_JobRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Default_Schedule", "default_ScheduleAttr", "Default_Schedule", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Priority", "priorityAttr", "Priority", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Timeout", "timeoutAttr", "Timeout", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Effective_Timeout", "effective_TimeoutAttr", "Effective_Timeout", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Shared", "is_SharedAttr", "Is_Shared", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Meta_Cyclic_JobRec.init();
return Meta_Cyclic_JobRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Meta_Cyclic_JobRec = Meta_Cyclic_JobRec;

});
define("ServiceCenter.model$Developer_ApplicationRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_ApplicationRec = (function (_super) {
__extends(Developer_ApplicationRec, _super);
function Developer_ApplicationRec(defaults) {
_super.apply(this, arguments);
}
Developer_ApplicationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Security_Level", "security_LevelAttr", "Security_Level", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Developer_ApplicationRec.init();
return Developer_ApplicationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_ApplicationRec = Developer_ApplicationRec;

});
define("ServiceCenter.model$Extension_Version_SignatureRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Extension_Version_SignatureRec = (function (_super) {
__extends(Extension_Version_SignatureRec, _super);
function Extension_Version_SignatureRec(defaults) {
_super.apply(this, arguments);
}
Extension_Version_SignatureRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Version_Id", "extension_Version_IdAttr", "Extension_Version_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Signature_Binary", "signature_BinaryAttr", "Signature_Binary", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("Signature_Hash", "signature_HashAttr", "Signature_Hash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Compatibility_Signature_Hash", "compatibility_Signature_HashAttr", "Compatibility_Signature_Hash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Extension_Version_SignatureRec.init();
return Extension_Version_SignatureRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Extension_Version_SignatureRec = Extension_Version_SignatureRec;

});
define("ServiceCenter.model$Process_DefinitionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_DefinitionRec = (function (_super) {
__extends(Process_DefinitionRec, _super);
function Process_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Process_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Locked", "is_LockedAttr", "Is_Locked", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Locked_Date", "locked_DateAttr", "Locked_Date", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Locked_By", "locked_ByAttr", "Locked_By", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Process_Entity_Id", "process_Entity_IdAttr", "Process_Entity_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Process_DefinitionRec.init();
return Process_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_DefinitionRec = Process_DefinitionRec;

});
define("ServiceCenter.model$Espace_ConfigurationRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_ConfigurationRec = (function (_super) {
__extends(Espace_ConfigurationRec, _super);
function Espace_ConfigurationRec(defaults) {
_super.apply(this, arguments);
}
Espace_ConfigurationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Val", "valAttr", "Val", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Espace_ConfigurationRec.init();
return Espace_ConfigurationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_ConfigurationRec = Espace_ConfigurationRec;

});
define("ServiceCenter.model$ServiceCenter_RoleRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ServiceCenter_RoleRec = (function (_super) {
__extends(ServiceCenter_RoleRec, _super);
function ServiceCenter_RoleRec(defaults) {
_super.apply(this, arguments);
}
ServiceCenter_RoleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("External_Id", "external_IdAttr", "External_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ServiceCenter_RoleRec.init();
return ServiceCenter_RoleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ServiceCenter_RoleRec = ServiceCenter_RoleRec;

});
define("ServiceCenter.model$RuntimeKindRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var RuntimeKindRec = (function (_super) {
__extends(RuntimeKindRec, _super);
function RuntimeKindRec(defaults) {
_super.apply(this, arguments);
}
RuntimeKindRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RuntimeKindRec.init();
return RuntimeKindRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.RuntimeKindRec = RuntimeKindRec;

});
define("ServiceCenter.model$Web_Services_ErrorCodeRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Web_Services_ErrorCodeRec = (function (_super) {
__extends(Web_Services_ErrorCodeRec, _super);
function Web_Services_ErrorCodeRec(defaults) {
_super.apply(this, arguments);
}
Web_Services_ErrorCodeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Message", "messageAttr", "Message", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Web_Services_ErrorCodeRec.init();
return Web_Services_ErrorCodeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Web_Services_ErrorCodeRec = Web_Services_ErrorCodeRec;

});
define("ServiceCenter.model$EspaceRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var EspaceRec = (function (_super) {
__extends(EspaceRec, _super);
function EspaceRec(defaults) {
_super.apply(this, arguments);
}
EspaceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Multitenant", "is_MultitenantAttr", "Is_Multitenant", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Is_System", "is_SystemAttr", "Is_System", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Version_Id", "version_IdAttr", "Version_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Consistent", "is_ConsistentAttr", "Is_Consistent", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Is_User_Provider", "is_User_ProviderAttr", "Is_User_Provider", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("User_Provider_Key", "user_Provider_KeyAttr", "User_Provider_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Provider_Name", "user_Provider_NameAttr", "User_Provider_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Locked", "is_LockedAttr", "Is_Locked", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Locked_Date", "locked_DateAttr", "Locked_Date", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DBCatalog_Id", "dBCatalog_IdAttr", "DBCatalog_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Pending_Version_Id", "pending_Version_IdAttr", "Pending_Version_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("HMAC", "hMACAttr", "HMAC", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HMACVersion", "hMACVersionAttr", "HMACVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EspaceKind", "espaceKindAttr", "EspaceKind", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EspaceRec.init();
return EspaceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.EspaceRec = EspaceRec;

});
define("ServiceCenter.model$AppMobile_BTypeAndroidRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var AppMobile_BTypeAndroidRec = (function (_super) {
__extends(AppMobile_BTypeAndroidRec, _super);
function AppMobile_BTypeAndroidRec(defaults) {
_super.apply(this, arguments);
}
AppMobile_BTypeAndroidRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppMobile_BTypeAndroidRec.init();
return AppMobile_BTypeAndroidRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.AppMobile_BTypeAndroidRec = AppMobile_BTypeAndroidRec;

});
define("ServiceCenter.model$Activity_Def_LinkRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_Def_LinkRec = (function (_super) {
__extends(Activity_Def_LinkRec, _super);
function Activity_Def_LinkRec(defaults) {
_super.apply(this, arguments);
}
Activity_Def_LinkRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Source_Activity_Def_Id", "source_Activity_Def_IdAttr", "Source_Activity_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Target_Activity_Def_Id", "target_Activity_Def_IdAttr", "Target_Activity_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Outcome", "outcomeAttr", "Outcome", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Activity_Def_LinkRec.init();
return Activity_Def_LinkRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_Def_LinkRec = Activity_Def_LinkRec;

});
define("ServiceCenter.model$Process_StatusRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_StatusRec = (function (_super) {
__extends(Process_StatusRec, _super);
function Process_StatusRec(defaults) {
_super.apply(this, arguments);
}
Process_StatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Terminal", "is_TerminalAttr", "Is_Terminal", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Process_StatusRec.init();
return Process_StatusRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_StatusRec = Process_StatusRec;

});
define("ServiceCenter.model$ModuleRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ModuleRec = (function (_super) {
__extends(ModuleRec, _super);
function ModuleRec(defaults) {
_super.apply(this, arguments);
}
ModuleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Module_Kind_Id", "module_Kind_IdAttr", "Module_Kind_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ModuleRec.init();
return ModuleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ModuleRec = ModuleRec;

});
define("ServiceCenter.model$ServerRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ServerRec = (function (_super) {
__extends(ServerRec, _super);
function ServerRec(defaults) {
_super.apply(this, arguments);
}
ServerRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Ip_Address", "ip_AddressAttr", "Ip_Address", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Host_Serial", "host_SerialAttr", "Host_Serial", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ServerRec.init();
return ServerRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ServerRec = ServerRec;

});
define("ServiceCenter.model$PageMetaRuleRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PageMetaRuleRec = (function (_super) {
__extends(PageMetaRuleRec, _super);
function PageMetaRuleRec(defaults) {
_super.apply(this, arguments);
}
PageMetaRuleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RuleOrder", "ruleOrderAttr", "RuleOrder", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Incoming", "incomingAttr", "Incoming", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TargetPage", "targetPageAttr", "TargetPage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExclusiveToESpace", "exclusiveToESpaceAttr", "ExclusiveToESpace", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PageMetaRuleRec.init();
return PageMetaRuleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PageMetaRuleRec = PageMetaRuleRec;

});
define("ServiceCenter.model$User_OptionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var User_OptionRec = (function (_super) {
__extends(User_OptionRec, _super);
function User_OptionRec(defaults) {
_super.apply(this, arguments);
}
User_OptionRec.attributesToDeclare = function () {
return [
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Skip_Intro", "skip_IntroAttr", "Skip_Intro", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
User_OptionRec.init();
return User_OptionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.User_OptionRec = User_OptionRec;

});
define("ServiceCenter.model$Email_StatusRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Email_StatusRec = (function (_super) {
__extends(Email_StatusRec, _super);
function Email_StatusRec(defaults) {
_super.apply(this, arguments);
}
Email_StatusRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Last_Error_Id", "last_Error_IdAttr", "Last_Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error_Count", "error_CountAttr", "Error_Count", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Is_Running_At", "is_Running_AtAttr", "Is_Running_At", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Running_Since", "is_Running_SinceAttr", "Is_Running_Since", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Sent", "sentAttr", "Sent", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Email_StatusRec.init();
return Email_StatusRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Email_StatusRec = Email_StatusRec;

});
define("ServiceCenter.model$Area_Entry_PointRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Area_Entry_PointRec = (function (_super) {
__extends(Area_Entry_PointRec, _super);
function Area_Entry_PointRec(defaults) {
_super.apply(this, arguments);
}
Area_Entry_PointRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Area_Id", "area_IdAttr", "Area_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Default", "is_DefaultAttr", "Is_Default", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Area_Entry_PointRec.init();
return Area_Entry_PointRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Area_Entry_PointRec = Area_Entry_PointRec;

});
define("ServiceCenter.model$Report_Top_ErrorsRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Top_ErrorsRec = (function (_super) {
__extends(Report_Top_ErrorsRec, _super);
function Report_Top_ErrorsRec(defaults) {
_super.apply(this, arguments);
}
Report_Top_ErrorsRec.attributesToDeclare = function () {
return [
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Count", "countAttr", "Count", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace", "espaceAttr", "Espace", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ReportId", "reportIdAttr", "ReportId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_Top_ErrorsRec.init();
return Report_Top_ErrorsRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Top_ErrorsRec = Report_Top_ErrorsRec;

});
define("ServiceCenter.model$Basic_TypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Basic_TypeRec = (function (_super) {
__extends(Basic_TypeRec, _super);
function Basic_TypeRec(defaults) {
_super.apply(this, arguments);
}
Basic_TypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Basic_TypeRec.init();
return Basic_TypeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Basic_TypeRec = Basic_TypeRec;

});
define("ServiceCenter.model$Module_StatusMessageTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Module_StatusMessageTypeRec = (function (_super) {
__extends(Module_StatusMessageTypeRec, _super);
function Module_StatusMessageTypeRec(defaults) {
_super.apply(this, arguments);
}
Module_StatusMessageTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ValidForEspaces", "validForEspacesAttr", "ValidForEspaces", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ValidForExtensions", "validForExtensionsAttr", "ValidForExtensions", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Module_StatusMessageTypeRec.init();
return Module_StatusMessageTypeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Module_StatusMessageTypeRec = Module_StatusMessageTypeRec;

});
define("ServiceCenter.model$Process_InputRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_InputRec = (function (_super) {
__extends(Process_InputRec, _super);
function Process_InputRec(defaults) {
_super.apply(this, arguments);
}
Process_InputRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Input_Def_Id", "input_Def_IdAttr", "Input_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Process_Id", "process_IdAttr", "Process_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Activity_Id", "activity_IdAttr", "Activity_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Input_Value", "input_ValueAttr", "Input_Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Type", "sS_TypeAttr", "SS_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Process_InputRec.init();
return Process_InputRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_InputRec = Process_InputRec;

});
define("ServiceCenter.model$SiteRuleRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var SiteRuleRec = (function (_super) {
__extends(SiteRuleRec, _super);
function SiteRuleRec(defaults) {
_super.apply(this, arguments);
}
SiteRuleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Incoming", "incomingAttr", "Incoming", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Translation", "translationAttr", "Translation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Redirect", "redirectAttr", "Redirect", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("UseRegexp", "useRegexpAttr", "UseRegexp", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("StopProcessing", "stopProcessingAttr", "StopProcessing", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("HTTPStatusCode", "hTTPStatusCodeAttr", "HTTPStatusCode", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SiteRuleRec.init();
return SiteRuleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.SiteRuleRec = SiteRuleRec;

});
define("ServiceCenter.model$Mobile_PlatformRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Mobile_PlatformRec = (function (_super) {
__extends(Mobile_PlatformRec, _super);
function Mobile_PlatformRec(defaults) {
_super.apply(this, arguments);
}
Mobile_PlatformRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FileExtension", "fileExtensionAttr", "FileExtension", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Mobile_PlatformRec.init();
return Mobile_PlatformRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Mobile_PlatformRec = Mobile_PlatformRec;

});
define("ServiceCenter.model$Application_ParameterRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Application_ParameterRec = (function (_super) {
__extends(Application_ParameterRec, _super);
function Application_ParameterRec(defaults) {
_super.apply(this, arguments);
}
Application_ParameterRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ApplicationId", "applicationIdAttr", "ApplicationId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Val", "valAttr", "Val", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsBinary", "isBinaryAttr", "IsBinary", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Application_ParameterRec.init();
return Application_ParameterRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Application_ParameterRec = Application_ParameterRec;

});
define("ServiceCenter.model$User_RoleRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var User_RoleRec = (function (_super) {
__extends(User_RoleRec, _super);
function User_RoleRec(defaults) {
_super.apply(this, arguments);
}
User_RoleRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Role_Id", "role_IdAttr", "Role_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
User_RoleRec.init();
return User_RoleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.User_RoleRec = User_RoleRec;

});
define("ServiceCenter.model$PathHeaderRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PathHeaderRec = (function (_super) {
__extends(PathHeaderRec, _super);
function PathHeaderRec(defaults) {
_super.apply(this, arguments);
}
PathHeaderRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RuleId", "ruleIdAttr", "RuleId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PathHeaderRec.init();
return PathHeaderRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PathHeaderRec = PathHeaderRec;

});
define("ServiceCenter.model$Activity_StatusRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_StatusRec = (function (_super) {
__extends(Activity_StatusRec, _super);
function Activity_StatusRec(defaults) {
_super.apply(this, arguments);
}
Activity_StatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Terminal", "is_TerminalAttr", "Is_Terminal", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Appears_In_Inbox", "appears_In_InboxAttr", "Appears_In_Inbox", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Activity_StatusRec.init();
return Activity_StatusRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_StatusRec = Activity_StatusRec;

});
define("ServiceCenter.model$Cyclic_JobRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Cyclic_JobRec = (function (_super) {
__extends(Cyclic_JobRec, _super);
function Cyclic_JobRec(defaults) {
_super.apply(this, arguments);
}
Cyclic_JobRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Meta_Cyclic_Job_Id", "meta_Cyclic_Job_IdAttr", "Meta_Cyclic_Job_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Schedule", "scheduleAttr", "Schedule", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Last_Run", "last_RunAttr", "Last_Run", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Last_Duration", "last_DurationAttr", "Last_Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Running_Since", "is_Running_SinceAttr", "Is_Running_Since", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Is_Running_By", "is_Running_ByAttr", "Is_Running_By", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Number_Of_Tries", "number_Of_TriesAttr", "Number_Of_Tries", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Cyclic_JobRec.init();
return Cyclic_JobRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Cyclic_JobRec = Cyclic_JobRec;

});
define("ServiceCenter.model$Email_DefinitionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Email_DefinitionRec = (function (_super) {
__extends(Email_DefinitionRec, _super);
function Email_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Email_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Email_DefinitionRec.init();
return Email_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Email_DefinitionRec = Email_DefinitionRec;

});
define("ServiceCenter.model$Activity_Definition_LangRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_Definition_LangRec = (function (_super) {
__extends(Activity_Definition_LangRec, _super);
function Activity_Definition_LangRec(defaults) {
_super.apply(this, arguments);
}
Activity_Definition_LangRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Activity_Def_Id", "activity_Def_IdAttr", "Activity_Def_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Locale", "localeAttr", "Locale", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Inbox_Instructions", "inbox_InstructionsAttr", "Inbox_Instructions", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Activity_Definition_LangRec.init();
return Activity_Definition_LangRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_Definition_LangRec = Activity_Definition_LangRec;

});
define("ServiceCenter.model$Solution_PackRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Solution_PackRec = (function (_super) {
__extends(Solution_PackRec, _super);
function Solution_PackRec(defaults) {
_super.apply(this, arguments);
}
Solution_PackRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Filename", "filenameAttr", "Filename", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Content", "contentAttr", "Content", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("Creation", "creationAttr", "Creation", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("External", "externalAttr", "External", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Solution_PackRec.init();
return Solution_PackRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Solution_PackRec = Solution_PackRec;

});
define("ServiceCenter.model$PropertiesRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PropertiesRec = (function (_super) {
__extends(PropertiesRec, _super);
function PropertiesRec(defaults) {
_super.apply(this, arguments);
}
PropertiesRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PropertiesRec.init();
return PropertiesRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PropertiesRec = PropertiesRec;

});
define("ServiceCenter.model$Process_UpgradeRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_UpgradeRec = (function (_super) {
__extends(Process_UpgradeRec, _super);
function Process_UpgradeRec(defaults) {
_super.apply(this, arguments);
}
Process_UpgradeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Process_Id", "process_IdAttr", "Process_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Activity_Def_Id", "activity_Def_IdAttr", "Activity_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Active", "activeAttr", "Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Past", "pastAttr", "Past", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Future", "futureAttr", "Future", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Deleted", "deletedAttr", "Deleted", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Espace_Version_Id", "espace_Version_IdAttr", "Espace_Version_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Process_UpgradeRec.init();
return Process_UpgradeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_UpgradeRec = Process_UpgradeRec;

});
define("ServiceCenter.model$Web_ReferenceRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Web_ReferenceRec = (function (_super) {
__extends(Web_ReferenceRec, _super);
function Web_ReferenceRec(defaults) {
_super.apply(this, arguments);
}
Web_ReferenceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("URL", "uRLAttr", "URL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Effective_URL", "effective_URLAttr", "Effective_URL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Original_Name", "original_NameAttr", "Original_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Integrated_Authentication", "integrated_AuthenticationAttr", "Integrated_Authentication", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Certificate_Id", "certificate_IdAttr", "Certificate_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Web_ReferenceRec.init();
return Web_ReferenceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Web_ReferenceRec = Web_ReferenceRec;

});
define("ServiceCenter.model$Espace_ServiceAPI_ConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_ServiceAPI_ConfigsRec = (function (_super) {
__extends(Espace_ServiceAPI_ConfigsRec, _super);
function Espace_ServiceAPI_ConfigsRec(defaults) {
_super.apply(this, arguments);
}
Espace_ServiceAPI_ConfigsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TraceErrors", "traceErrorsAttr", "TraceErrors", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("TraceAll", "traceAllAttr", "TraceAll", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Espace_ServiceAPI_ConfigsRec.init();
return Espace_ServiceAPI_ConfigsRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_ServiceAPI_ConfigsRec = Espace_ServiceAPI_ConfigsRec;

});
define("ServiceCenter.model$Developer_SolutionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_SolutionRec = (function (_super) {
__extends(Developer_SolutionRec, _super);
function Developer_SolutionRec(defaults) {
_super.apply(this, arguments);
}
Developer_SolutionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Solution_Id", "solution_IdAttr", "Solution_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Security_Level", "security_LevelAttr", "Security_Level", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 1;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Developer_SolutionRec.init();
return Developer_SolutionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_SolutionRec = Developer_SolutionRec;

});
define("ServiceCenter.model$UserRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var UserRec = (function (_super) {
__extends(UserRec, _super);
function UserRec(defaults) {
_super.apply(this, arguments);
}
UserRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Password", "passwordAttr", "Password", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("External_Id", "external_IdAttr", "External_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Creation_Date", "creation_DateAttr", "Creation_Date", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Last_Login", "last_LoginAttr", "Last_Login", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserRec.init();
return UserRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.UserRec = UserRec;

});
define("ServiceCenter.model$Report_LineRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_LineRec = (function (_super) {
__extends(Report_LineRec, _super);
function Report_LineRec(defaults) {
_super.apply(this, arguments);
}
Report_LineRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ReportType", "reportTypeAttr", "ReportType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Created", "createdAttr", "Created", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("StartDate", "startDateAttr", "StartDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EndDate", "endDateAttr", "EndDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DailyUsage", "dailyUsageAttr", "DailyUsage", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IntegrationType", "integrationTypeAttr", "IntegrationType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_LineRec.init();
return Report_LineRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_LineRec = Report_LineRec;

});
define("ServiceCenter.model$DBCatalogRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var DBCatalogRec = (function (_super) {
__extends(DBCatalogRec, _super);
function DBCatalogRec(defaults) {
_super.apply(this, arguments);
}
DBCatalogRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Logical_Name", "logical_NameAttr", "Logical_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Password", "passwordAttr", "Password", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OwnerUsername", "ownerUsernameAttr", "OwnerUsername", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OwnerPassword", "ownerPasswordAttr", "OwnerPassword", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DataTablespace", "dataTablespaceAttr", "DataTablespace", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndexTablespace", "indexTablespaceAttr", "IndexTablespace", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UseIntegratedAuth", "useIntegratedAuthAttr", "UseIntegratedAuth", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DBCatalogRec.init();
return DBCatalogRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.DBCatalogRec = DBCatalogRec;

});
define("ServiceCenter.model$App_Mobile_Build_StatusRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var App_Mobile_Build_StatusRec = (function (_super) {
__extends(App_Mobile_Build_StatusRec, _super);
function App_Mobile_Build_StatusRec(defaults) {
_super.apply(this, arguments);
}
App_Mobile_Build_StatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BuilderStatus", "builderStatusAttr", "BuilderStatus", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
App_Mobile_Build_StatusRec.init();
return App_Mobile_Build_StatusRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.App_Mobile_Build_StatusRec = App_Mobile_Build_StatusRec;

});
define("ServiceCenter.model$Espace_EntityRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_EntityRec = (function (_super) {
__extends(Espace_EntityRec, _super);
function Espace_EntityRec(defaults) {
_super.apply(this, arguments);
}
Espace_EntityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Entity_Id", "entity_IdAttr", "Entity_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Read_Only", "read_OnlyAttr", "Read_Only", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Multitenant_View", "multitenant_ViewAttr", "Multitenant_View", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Espace_EntityRec.init();
return Espace_EntityRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_EntityRec = Espace_EntityRec;

});
define("ServiceCenter.model$User_Effective_RoleRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var User_Effective_RoleRec = (function (_super) {
__extends(User_Effective_RoleRec, _super);
function User_Effective_RoleRec(defaults) {
_super.apply(this, arguments);
}
User_Effective_RoleRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Role_Id", "role_IdAttr", "Role_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
User_Effective_RoleRec.init();
return User_Effective_RoleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.User_Effective_RoleRec = User_Effective_RoleRec;

});
define("ServiceCenter.model$Entity_RecordRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Entity_RecordRec = (function (_super) {
__extends(Entity_RecordRec, _super);
function Entity_RecordRec(defaults) {
_super.apply(this, arguments);
}
Entity_RecordRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Data_Id", "data_IdAttr", "Data_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Entity_SS_Key", "entity_SS_KeyAttr", "Entity_SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Entity_RecordRec.init();
return Entity_RecordRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Entity_RecordRec = Entity_RecordRec;

});
define("ServiceCenter.model$Async_Operation_MessageRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Async_Operation_MessageRec = (function (_super) {
__extends(Async_Operation_MessageRec, _super);
function Async_Operation_MessageRec(defaults) {
_super.apply(this, arguments);
}
Async_Operation_MessageRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Message_Id", "message_IdAttr", "Message_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Detail", "detailAttr", "Detail", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HelpRef", "helpRefAttr", "HelpRef", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ExtraInfo", "extraInfoAttr", "ExtraInfo", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Submitable", "submitableAttr", "Submitable", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("State_Id", "state_IdAttr", "State_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Read", "readAttr", "Read", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Async_Operation_MessageRec.init();
return Async_Operation_MessageRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Async_Operation_MessageRec = Async_Operation_MessageRec;

});
define("ServiceCenter.model$UserMTRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var UserMTRec = (function (_super) {
__extends(UserMTRec, _super);
function UserMTRec(defaults) {
_super.apply(this, arguments);
}
UserMTRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Password", "passwordAttr", "Password", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("External_Id", "external_IdAttr", "External_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Creation_Date", "creation_DateAttr", "Creation_Date", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Last_Login", "last_LoginAttr", "Last_Login", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserMTRec.init();
return UserMTRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.UserMTRec = UserMTRec;

});
define("ServiceCenter.model$Report_Slow_ExtensionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Slow_ExtensionRec = (function (_super) {
__extends(Report_Slow_ExtensionRec, _super);
function Report_Slow_ExtensionRec(defaults) {
_super.apply(this, arguments);
}
Report_Slow_ExtensionRec.attributesToDeclare = function () {
return [
this.attr("espace", "espaceAttr", "espace", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Action_FullName", "action_FullNameAttr", "Action_FullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("avgtime", "avgtimeAttr", "avgtime", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("totaltime", "totaltimeAttr", "totaltime", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("count", "countAttr", "count", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ReportId", "reportIdAttr", "ReportId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_Slow_ExtensionRec.init();
return Report_Slow_ExtensionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Slow_ExtensionRec = Report_Slow_ExtensionRec;

});
define("ServiceCenter.model$EntityRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var EntityRec = (function (_super) {
__extends(EntityRec, _super);
function EntityRec(defaults) {
_super.apply(this, arguments);
}
EntityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Physical_Table_Name", "physical_Table_NameAttr", "Physical_Table_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Multitenant", "multitenantAttr", "Multitenant", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Multitenant_View", "multitenant_ViewAttr", "Multitenant_View", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Is_External", "is_ExternalAttr", "Is_External", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Is_System", "is_SystemAttr", "Is_System", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PrimaryKey_SS_Key", "primaryKey_SS_KeyAttr", "PrimaryKey_SS_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Generation", "generationAttr", "Generation", false, false, OS.DataTypes.DataTypes.Integer, function () {
return -1;
}, true), 
this.attr("Is_Active_Attribute", "is_Active_AttributeAttr", "Is_Active_Attribute", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label_Attribute", "label_AttributeAttr", "Label_Attribute", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order_By_Attribute", "order_By_AttributeAttr", "Order_By_Attribute", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Data_Kind", "data_KindAttr", "Data_Kind", true, false, OS.DataTypes.DataTypes.Text, function () {
return "entity";
}, true), 
this.attr("Multilingual", "multilingualAttr", "Multilingual", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LogicalDatabase", "logicalDatabaseAttr", "LogicalDatabase", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Multilingual_Table_Name", "multilingual_Table_NameAttr", "Multilingual_Table_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Expose_Process_Events", "expose_Process_EventsAttr", "Expose_Process_Events", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Event_Table_Name", "event_Table_NameAttr", "Event_Table_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Base_View_Name", "base_View_NameAttr", "Base_View_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EntityRec.init();
return EntityRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.EntityRec = EntityRec;

});
define("ServiceCenter.model$Site_Property_SharedRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Site_Property_SharedRec = (function (_super) {
__extends(Site_Property_SharedRec, _super);
function Site_Property_SharedRec(defaults) {
_super.apply(this, arguments);
}
Site_Property_SharedRec.attributesToDeclare = function () {
return [
this.attr("Site_Property_Definition_Id", "site_Property_Definition_IdAttr", "Site_Property_Definition_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Property_Value", "property_ValueAttr", "Property_Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Modified", "user_ModifiedAttr", "User_Modified", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Site_Property_SharedRec.init();
return Site_Property_SharedRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Site_Property_SharedRec = Site_Property_SharedRec;

});
define("ServiceCenter.model$Entity_AttrRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Entity_AttrRec = (function (_super) {
__extends(Entity_AttrRec, _super);
function Entity_AttrRec(defaults) {
_super.apply(this, arguments);
}
Entity_AttrRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Entity_Id", "entity_IdAttr", "Entity_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Length", "lengthAttr", "Length", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Decimals", "decimalsAttr", "Decimals", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Mandatory", "is_MandatoryAttr", "Is_Mandatory", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Is_AutoNumber", "is_AutoNumberAttr", "Is_AutoNumber", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Delete_Rule", "delete_RuleAttr", "Delete_Rule", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Default_Label", "default_LabelAttr", "Default_Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Default_Value", "default_ValueAttr", "Default_Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Order_Num", "order_NumAttr", "Order_Num", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Original_Type", "original_TypeAttr", "Original_Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Database_Name", "database_NameAttr", "Database_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Entity_AttrRec.init();
return Entity_AttrRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Entity_AttrRec = Entity_AttrRec;

});
define("ServiceCenter.model$User_DeveloperRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var User_DeveloperRec = (function (_super) {
__extends(User_DeveloperRec, _super);
function User_DeveloperRec(defaults) {
_super.apply(this, arguments);
}
User_DeveloperRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
User_DeveloperRec.init();
return User_DeveloperRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.User_DeveloperRec = User_DeveloperRec;

});
define("ServiceCenter.model$Extension_ConfigurationRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Extension_ConfigurationRec = (function (_super) {
__extends(Extension_ConfigurationRec, _super);
function Extension_ConfigurationRec(defaults) {
_super.apply(this, arguments);
}
Extension_ConfigurationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Val", "valAttr", "Val", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Extension_ConfigurationRec.init();
return Extension_ConfigurationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Extension_ConfigurationRec = Extension_ConfigurationRec;

});
define("ServiceCenter.model$Recent_ItemRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Recent_ItemRec = (function (_super) {
__extends(Recent_ItemRec, _super);
function Recent_ItemRec(defaults) {
_super.apply(this, arguments);
}
Recent_ItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Type", "typeAttr", "Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Datetime", "datetimeAttr", "Datetime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Item_Id", "item_IdAttr", "Item_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Text", "textAttr", "Text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Recent_ItemRec.init();
return Recent_ItemRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Recent_ItemRec = Recent_ItemRec;

});
define("ServiceCenter.model$Solution_ReferenceRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Solution_ReferenceRec = (function (_super) {
__extends(Solution_ReferenceRec, _super);
function Solution_ReferenceRec(defaults) {
_super.apply(this, arguments);
}
Solution_ReferenceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Kind", "kindAttr", "Kind", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Solution_Id", "solution_IdAttr", "Solution_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Solution_ReferenceRec.init();
return Solution_ReferenceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Solution_ReferenceRec = Solution_ReferenceRec;

});
define("ServiceCenter.model$ActivityRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ActivityRec = (function (_super) {
__extends(ActivityRec, _super);
function ActivityRec(defaults) {
_super.apply(this, arguments);
}
ActivityRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Activity_Def_Id", "activity_Def_IdAttr", "Activity_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Process_Id", "process_IdAttr", "Process_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Created", "createdAttr", "Created", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Opened", "openedAttr", "Opened", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Closed", "closedAttr", "Closed", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Status_Id", "status_IdAttr", "Status_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Running_Since", "is_Running_SinceAttr", "Is_Running_Since", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Is_Running_At", "is_Running_AtAttr", "Is_Running_At", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Precedent_Activity_Id", "precedent_Activity_IdAttr", "Precedent_Activity_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Precedent_Outcome", "precedent_OutcomeAttr", "Precedent_Outcome", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Due_Date", "due_DateAttr", "Due_Date", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Inbox_Detail", "inbox_DetailAttr", "Inbox_Detail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Expired", "expiredAttr", "Expired", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Skipped", "skippedAttr", "Skipped", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Error_Count", "error_CountAttr", "Error_Count", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Last_Error_Id", "last_Error_IdAttr", "Last_Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Last_Modified", "last_ModifiedAttr", "Last_Modified", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Group_Id", "group_IdAttr", "Group_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ActivityRec.init();
return ActivityRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ActivityRec = ActivityRec;

});
define("ServiceCenter.model$ExtensionDBMappingRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ExtensionDBMappingRec = (function (_super) {
__extends(ExtensionDBMappingRec, _super);
function ExtensionDBMappingRec(defaults) {
_super.apply(this, arguments);
}
ExtensionDBMappingRec.attributesToDeclare = function () {
return [
this.attr("DatabaseName", "databaseNameAttr", "DatabaseName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LogicalDatabaseName", "logicalDatabaseNameAttr", "LogicalDatabaseName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExtensionDBMappingRec.init();
return ExtensionDBMappingRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ExtensionDBMappingRec = ExtensionDBMappingRec;

});
define("ServiceCenter.model$App_Mobile_Build_BTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var App_Mobile_Build_BTypeRec = (function (_super) {
__extends(App_Mobile_Build_BTypeRec, _super);
function App_Mobile_Build_BTypeRec(defaults) {
_super.apply(this, arguments);
}
App_Mobile_Build_BTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("iOS_BuildType", "iOS_BuildTypeAttr", "iOS_BuildType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Android_BuildType", "android_BuildTypeAttr", "Android_BuildType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
App_Mobile_Build_BTypeRec.init();
return App_Mobile_Build_BTypeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.App_Mobile_Build_BTypeRec = App_Mobile_Build_BTypeRec;

});
define("ServiceCenter.model$App_Mobile_ConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var App_Mobile_ConfigRec = (function (_super) {
__extends(App_Mobile_ConfigRec, _super);
function App_Mobile_ConfigRec(defaults) {
_super.apply(this, arguments);
}
App_Mobile_ConfigRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Device_Type", "device_TypeAttr", "Device_Type", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("VersionNumber", "versionNumberAttr", "VersionNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VersionCode", "versionCodeAttr", "VersionCode", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("VersionChanged", "versionChangedAttr", "VersionChanged", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ConfigurationHash", "configurationHashAttr", "ConfigurationHash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
App_Mobile_ConfigRec.init();
return App_Mobile_ConfigRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.App_Mobile_ConfigRec = App_Mobile_ConfigRec;

});
define("ServiceCenter.model$App_Mobile_Build_DataRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var App_Mobile_Build_DataRec = (function (_super) {
__extends(App_Mobile_Build_DataRec, _super);
function App_Mobile_Build_DataRec(defaults) {
_super.apply(this, arguments);
}
App_Mobile_Build_DataRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Build_Content", "build_ContentAttr", "Build_Content", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
App_Mobile_Build_DataRec.init();
return App_Mobile_Build_DataRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.App_Mobile_Build_DataRec = App_Mobile_Build_DataRec;

});
define("ServiceCenter.model$PublishTraceRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PublishTraceRec = (function (_super) {
__extends(PublishTraceRec, _super);
function PublishTraceRec(defaults) {
_super.apply(this, arguments);
}
PublishTraceRec.attributesToDeclare = function () {
return [
this.attr("Espace_SS_KEY", "espace_SS_KEYAttr", "Espace_SS_KEY", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Step", "stepAttr", "Step", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Instant", "instantAttr", "Instant", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsStart", "isStartAttr", "IsStart", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("TraceKindId", "traceKindIdAttr", "TraceKindId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ExtraInfo", "extraInfoAttr", "ExtraInfo", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ParentStep", "parentStepAttr", "ParentStep", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PublishId", "publishIdAttr", "PublishId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PublishTraceRec.init();
return PublishTraceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PublishTraceRec = PublishTraceRec;

});
define("ServiceCenter.model$TraceKindRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var TraceKindRec = (function (_super) {
__extends(TraceKindRec, _super);
function TraceKindRec(defaults) {
_super.apply(this, arguments);
}
TraceKindRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TraceKindRec.init();
return TraceKindRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.TraceKindRec = TraceKindRec;

});
define("ServiceCenter.model$PublishingRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PublishingRec = (function (_super) {
__extends(PublishingRec, _super);
function PublishingRec(defaults) {
_super.apply(this, arguments);
}
PublishingRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Version_Id", "version_IdAttr", "Version_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Published_By", "published_ByAttr", "Published_By", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Published_Date", "published_DateAttr", "Published_Date", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("HubServerVersion", "hubServerVersionAttr", "HubServerVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Debug_Mode", "debug_ModeAttr", "Debug_Mode", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PublishingRec.init();
return PublishingRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PublishingRec = PublishingRec;

});
define("ServiceCenter.model$App_Definition_ModuleRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var App_Definition_ModuleRec = (function (_super) {
__extends(App_Definition_ModuleRec, _super);
function App_Definition_ModuleRec(defaults) {
_super.apply(this, arguments);
}
App_Definition_ModuleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Application_Id", "application_IdAttr", "Application_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Module_Id", "module_IdAttr", "Module_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
App_Definition_ModuleRec.init();
return App_Definition_ModuleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.App_Definition_ModuleRec = App_Definition_ModuleRec;

});
define("ServiceCenter.model$Group_UserRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Group_UserRec = (function (_super) {
__extends(Group_UserRec, _super);
function Group_UserRec(defaults) {
_super.apply(this, arguments);
}
Group_UserRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Group_Id", "group_IdAttr", "Group_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Group_UserRec.init();
return Group_UserRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Group_UserRec = Group_UserRec;

});
define("ServiceCenter.model$Process_Output_DefinitionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_Output_DefinitionRec = (function (_super) {
__extends(Process_Output_DefinitionRec, _super);
function Process_Output_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Process_Output_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Process_Def_Id", "process_Def_IdAttr", "Process_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Default_Value", "default_ValueAttr", "Default_Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Type", "sS_TypeAttr", "SS_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Process_Output_DefinitionRec.init();
return Process_Output_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_Output_DefinitionRec = Process_Output_DefinitionRec;

});
define("ServiceCenter.model$DBConnectionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var DBConnectionRec = (function (_super) {
__extends(DBConnectionRec, _super);
function DBConnectionRec(defaults) {
_super.apply(this, arguments);
}
DBConnectionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProviderName", "providerNameAttr", "ProviderName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DBMS_Id", "dBMS_IdAttr", "DBMS_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Connection_String", "connection_StringAttr", "Connection_String", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsMultiTenant", "isMultiTenantAttr", "IsMultiTenant", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DefaultTenantName", "defaultTenantNameAttr", "DefaultTenantName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Database_Configuration", "database_ConfigurationAttr", "Database_Configuration", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DBConnectionRec.init();
return DBConnectionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.DBConnectionRec = DBConnectionRec;

});
define("ServiceCenter.model$CallbackRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var CallbackRec = (function (_super) {
__extends(CallbackRec, _super);
function CallbackRec(defaults) {
_super.apply(this, arguments);
}
CallbackRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CallbackName", "callbackNameAttr", "CallbackName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ServiceName", "serviceNameAttr", "ServiceName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProviderName", "providerNameAttr", "ProviderName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MethodName", "methodNameAttr", "MethodName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TenantId", "tenantIdAttr", "TenantId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EspaceId", "espaceIdAttr", "EspaceId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Hide_In_Provider", "hide_In_ProviderAttr", "Hide_In_Provider", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Is_Localized", "is_LocalizedAttr", "Is_Localized", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Is_Static", "is_StaticAttr", "Is_Static", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Is_Volatile", "is_VolatileAttr", "Is_Volatile", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CallbackLocationId", "callbackLocationIdAttr", "CallbackLocationId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CallbackTypeId", "callbackTypeIdAttr", "CallbackTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Script", "scriptAttr", "Script", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CallbackRec.init();
return CallbackRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.CallbackRec = CallbackRec;

});
define("ServiceCenter.model$ParameterRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ParameterRec = (function (_super) {
__extends(ParameterRec, _super);
function ParameterRec(defaults) {
_super.apply(this, arguments);
}
ParameterRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Val", "valAttr", "Val", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Host", "hostAttr", "Host", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Host_Serial", "host_SerialAttr", "Host_Serial", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ParameterRec.init();
return ParameterRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ParameterRec = ParameterRec;

});
define("ServiceCenter.model$AreaRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var AreaRec = (function (_super) {
__extends(AreaRec, _super);
function AreaRec(defaults) {
_super.apply(this, arguments);
}
AreaRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AreaRec.init();
return AreaRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.AreaRec = AreaRec;

});
define("ServiceCenter.model$Activity_DefinitionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_DefinitionRec = (function (_super) {
__extends(Activity_DefinitionRec, _super);
function Activity_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Activity_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Inbox_Instructions", "inbox_InstructionsAttr", "Inbox_Instructions", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Kind", "kindAttr", "Kind", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Process_Def_Id", "process_Def_IdAttr", "Process_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Display_X", "display_XAttr", "Display_X", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Display_Y", "display_YAttr", "Display_Y", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Invoked_Process_Def_Id", "invoked_Process_Def_IdAttr", "Invoked_Process_Def_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Requires_Permission", "requires_PermissionAttr", "Requires_Permission", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Skippable", "skippableAttr", "Skippable", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Activity_DefinitionRec.init();
return Activity_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_DefinitionRec = Activity_DefinitionRec;

});
define("ServiceCenter.model$ProcessRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ProcessRec = (function (_super) {
__extends(ProcessRec, _super);
function ProcessRec(defaults) {
_super.apply(this, arguments);
}
ProcessRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Created", "createdAttr", "Created", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Created_By", "created_ByAttr", "Created_By", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Process_Def_Id", "process_Def_IdAttr", "Process_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Parent_Process_Id", "parent_Process_IdAttr", "Parent_Process_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Parent_Activity_Id", "parent_Activity_IdAttr", "Parent_Activity_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Top_Process_Id", "top_Process_IdAttr", "Top_Process_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Status_Id", "status_IdAttr", "Status_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Last_Modified", "last_ModifiedAttr", "Last_Modified", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Last_Modified_By", "last_Modified_ByAttr", "Last_Modified_By", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Suspended_Date", "suspended_DateAttr", "Suspended_Date", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Suspended_By", "suspended_ByAttr", "Suspended_By", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProcessRec.init();
return ProcessRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ProcessRec = ProcessRec;

});
define("ServiceCenter.model$Espace_ReferenceRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_ReferenceRec = (function (_super) {
__extends(Espace_ReferenceRec, _super);
function Espace_ReferenceRec(defaults) {
_super.apply(this, arguments);
}
Espace_ReferenceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Consumer_Version_Id", "consumer_Version_IdAttr", "Consumer_Version_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Kind", "kindAttr", "Kind", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Producer_Name", "producer_NameAttr", "Producer_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Producer_Kind", "producer_KindAttr", "Producer_Kind", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Producer_SS_Key", "producer_SS_KeyAttr", "Producer_SS_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Published_Prod_Version_Id", "published_Prod_Version_IdAttr", "Published_Prod_Version_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Broken", "is_BrokenAttr", "Is_Broken", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Missing_Status", "missing_StatusAttr", "Missing_Status", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Published_Prod_Version_Num", "published_Prod_Version_NumAttr", "Published_Prod_Version_Num", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Compatibility_Signature_Hash", "compatibility_Signature_HashAttr", "Compatibility_Signature_Hash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Full_Signature_Hash", "full_Signature_HashAttr", "Full_Signature_Hash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Espace_ReferenceRec.init();
return Espace_ReferenceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_ReferenceRec = Espace_ReferenceRec;

});
define("ServiceCenter.model$Event_QueueRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Event_QueueRec = (function (_super) {
__extends(Event_QueueRec, _super);
function Event_QueueRec(defaults) {
_super.apply(this, arguments);
}
Event_QueueRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Activity_Id", "activity_IdAttr", "Activity_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Process_Def_Id", "process_Def_IdAttr", "Process_Def_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Data_Id", "data_IdAttr", "Data_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Enqueue_Time", "enqueue_TimeAttr", "Enqueue_Time", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Dequeue_Time", "dequeue_TimeAttr", "Dequeue_Time", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Error_Count", "error_CountAttr", "Error_Count", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Event_QueueRec.init();
return Event_QueueRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Event_QueueRec = Event_QueueRec;

});
define("ServiceCenter.model$Application_Parameter_BinaryRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Application_Parameter_BinaryRec = (function (_super) {
__extends(Application_Parameter_BinaryRec, _super);
function Application_Parameter_BinaryRec(defaults) {
_super.apply(this, arguments);
}
Application_Parameter_BinaryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Binary", "binaryAttr", "Binary", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Application_Parameter_BinaryRec.init();
return Application_Parameter_BinaryRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Application_Parameter_BinaryRec = Application_Parameter_BinaryRec;

});
define("ServiceCenter.model$ApplicationRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ApplicationRec = (function (_super) {
__extends(ApplicationRec, _super);
function ApplicationRec(defaults) {
_super.apply(this, arguments);
}
ApplicationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Entry_eSpace_Id", "entry_eSpace_IdAttr", "Entry_eSpace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BackOffice_eSpace_Id", "backOffice_eSpace_IdAttr", "BackOffice_eSpace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DefaultThemeIsMobile", "defaultThemeIsMobileAttr", "DefaultThemeIsMobile", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Key", "keyAttr", "Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Disabled", "disabledAttr", "Disabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ApplicationKind", "applicationKindAttr", "ApplicationKind", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TemplateKey", "templateKeyAttr", "TemplateKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PrimaryColor", "primaryColorAttr", "PrimaryColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NativeHash", "nativeHashAttr", "NativeHash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ApplicationRec.init();
return ApplicationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ApplicationRec = ApplicationRec;

});
define("ServiceCenter.model$Developer_OperationRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_OperationRec = (function (_super) {
__extends(Developer_OperationRec, _super);
function Developer_OperationRec(defaults) {
_super.apply(this, arguments);
}
Developer_OperationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Operation_Type", "operation_TypeAttr", "Operation_Type", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ESpace_Id", "eSpace_IdAttr", "ESpace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DateTime", "dateTimeAttr", "DateTime", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Developer_OperationRec.init();
return Developer_OperationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_OperationRec = Developer_OperationRec;

});
define("ServiceCenter.model$Report_Slow_QueryRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Slow_QueryRec = (function (_super) {
__extends(Report_Slow_QueryRec, _super);
function Report_Slow_QueryRec(defaults) {
_super.apply(this, arguments);
}
Report_Slow_QueryRec.attributesToDeclare = function () {
return [
this.attr("espace", "espaceAttr", "espace", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("query", "queryAttr", "query", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("tm", "tmAttr", "tm", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ReportId", "reportIdAttr", "ReportId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_Slow_QueryRec.init();
return Report_Slow_QueryRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Slow_QueryRec = Report_Slow_QueryRec;

});
define("ServiceCenter.model$Async_Operation_LogicalDatabaseRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Async_Operation_LogicalDatabaseRec = (function (_super) {
__extends(Async_Operation_LogicalDatabaseRec, _super);
function Async_Operation_LogicalDatabaseRec(defaults) {
_super.apply(this, arguments);
}
Async_Operation_LogicalDatabaseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension", "extensionAttr", "Extension", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LogicalDatabase", "logicalDatabaseAttr", "LogicalDatabase", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DBConnection_Id", "dBConnection_IdAttr", "DBConnection_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("State_Id", "state_IdAttr", "State_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Async_Operation_LogicalDatabaseRec.init();
return Async_Operation_LogicalDatabaseRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Async_Operation_LogicalDatabaseRec = Async_Operation_LogicalDatabaseRec;

});
define("ServiceCenter.model$Deprecated_Authentication_Supported_PropertiesRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Deprecated_Authentication_Supported_PropertiesRec = (function (_super) {
__extends(Deprecated_Authentication_Supported_PropertiesRec, _super);
function Deprecated_Authentication_Supported_PropertiesRec(defaults) {
_super.apply(this, arguments);
}
Deprecated_Authentication_Supported_PropertiesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Deprecated_Authentication_Supported_PropertiesRec.init();
return Deprecated_Authentication_Supported_PropertiesRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Deprecated_Authentication_Supported_PropertiesRec = Deprecated_Authentication_Supported_PropertiesRec;

});
define("ServiceCenter.model$Report_HourRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_HourRec = (function (_super) {
__extends(Report_HourRec, _super);
function Report_HourRec(defaults) {
_super.apply(this, arguments);
}
Report_HourRec.attributesToDeclare = function () {
return [
this.attr("Hour", "hourAttr", "Hour", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Display", "displayAttr", "Display", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_HourRec.init();
return Report_HourRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_HourRec = Report_HourRec;

});
define("ServiceCenter.model$CertificateRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var CertificateRec = (function (_super) {
__extends(CertificateRec, _super);
function CertificateRec(defaults) {
_super.apply(this, arguments);
}
CertificateRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "Path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CertificateRec.init();
return CertificateRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.CertificateRec = CertificateRec;

});
define("ServiceCenter.model$DeveloperRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var DeveloperRec = (function (_super) {
__extends(DeveloperRec, _super);
function DeveloperRec(defaults) {
_super.apply(this, arguments);
}
DeveloperRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Role_Id", "role_IdAttr", "Role_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Allow_Solutions", "allow_SolutionsAttr", "Allow_Solutions", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Allow_New_Espace", "allow_New_EspaceAttr", "Allow_New_Espace", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Allow_Extensions", "allow_ExtensionsAttr", "Allow_Extensions", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Allow_External_Entities", "allow_External_EntitiesAttr", "Allow_External_Entities", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Allow_System_Entities", "allow_System_EntitiesAttr", "Allow_System_Entities", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Solutions_Security", "solutions_SecurityAttr", "Solutions_Security", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espaces_Security", "espaces_SecurityAttr", "Espaces_Security", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extensions_Security", "extensions_SecurityAttr", "Extensions_Security", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Users_Security", "users_SecurityAttr", "Users_Security", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Phones_Security", "phones_SecurityAttr", "Phones_Security", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DBConnections_Security", "dBConnections_SecurityAttr", "DBConnections_Security", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Certificates_Security", "certificates_SecurityAttr", "Certificates_Security", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("HubConfiguration_Security", "hubConfiguration_SecurityAttr", "HubConfiguration_Security", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("View_OnlineMonitoring", "view_OnlineMonitoringAttr", "View_OnlineMonitoring", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("View_Licensing", "view_LicensingAttr", "View_Licensing", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Reports_Security", "reports_SecurityAttr", "Reports_Security", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_System", "is_SystemAttr", "Is_System", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Allow_DBConnections", "allow_DBConnectionsAttr", "Allow_DBConnections", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Allow_Process_Management", "allow_Process_ManagementAttr", "Allow_Process_Management", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Allow_New_DBCatalog", "allow_New_DBCatalogAttr", "Allow_New_DBCatalog", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DBCatalog_Security", "dBCatalog_SecurityAttr", "DBCatalog_Security", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Allow_SEO_Management", "allow_SEO_ManagementAttr", "Allow_SEO_Management", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Applications_Security", "applications_SecurityAttr", "Applications_Security", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Disable_Login", "disable_LoginAttr", "Disable_Login", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DeveloperRec.init();
return DeveloperRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.DeveloperRec = DeveloperRec;

});
define("ServiceCenter.model$Async_Operation_StateRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Async_Operation_StateRec = (function (_super) {
__extends(Async_Operation_StateRec, _super);
function Async_Operation_StateRec(defaults) {
_super.apply(this, arguments);
}
Async_Operation_StateRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("OperationId", "operationIdAttr", "OperationId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Target_Object_SSKey", "target_Object_SSKeyAttr", "Target_Object_SSKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Time_Stamp", "time_StampAttr", "Time_Stamp", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("State", "stateAttr", "State", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Operation_Type", "operation_TypeAttr", "Operation_Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Return_Url", "return_UrlAttr", "Return_Url", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Async_Operation_StateRec.init();
return Async_Operation_StateRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Async_Operation_StateRec = Async_Operation_StateRec;

});
define("ServiceCenter.model$Report_Slow_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Slow_ScreenRec = (function (_super) {
__extends(Report_Slow_ScreenRec, _super);
function Report_Slow_ScreenRec(defaults) {
_super.apply(this, arguments);
}
Report_Slow_ScreenRec.attributesToDeclare = function () {
return [
this.attr("Espace", "espaceAttr", "Espace", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Hits", "hitsAttr", "Hits", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("screen_type", "screen_typeAttr", "screen_type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("avg_time", "avg_timeAttr", "avg_time", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("total_time", "total_timeAttr", "total_time", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Screen", "screenAttr", "Screen", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReportId", "reportIdAttr", "ReportId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ajax_hits", "ajax_hitsAttr", "ajax_hits", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ajax_avg_time", "ajax_avg_timeAttr", "ajax_avg_time", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ajax_total_time", "ajax_total_timeAttr", "ajax_total_time", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("screen_ajax_total_time", "screen_ajax_total_timeAttr", "screen_ajax_total_time", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_Slow_ScreenRec.init();
return Report_Slow_ScreenRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Slow_ScreenRec = Report_Slow_ScreenRec;

});
define("ServiceCenter.model$Web_ServiceRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Web_ServiceRec = (function (_super) {
__extends(Web_ServiceRec, _super);
function Web_ServiceRec(defaults) {
_super.apply(this, arguments);
}
Web_ServiceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Internal_Access", "internal_AccessAttr", "Internal_Access", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Secure_Connection", "secure_ConnectionAttr", "Secure_Connection", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Integrated_Authentication", "integrated_AuthenticationAttr", "Integrated_Authentication", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Compatibility_Mode", "compatibility_ModeAttr", "Compatibility_Mode", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Web_ServiceRec.init();
return Web_ServiceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Web_ServiceRec = Web_ServiceRec;

});
define("ServiceCenter.model$GroupRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var GroupRec = (function (_super) {
__extends(GroupRec, _super);
function GroupRec(defaults) {
_super.apply(this, arguments);
}
GroupRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Created_By", "created_ByAttr", "Created_By", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Created", "createdAttr", "Created", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Has_Custom_Management", "has_Custom_ManagementAttr", "Has_Custom_Management", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GroupRec.init();
return GroupRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.GroupRec = GroupRec;

});
define("ServiceCenter.model$TranslationOverrideRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var TranslationOverrideRec = (function (_super) {
__extends(TranslationOverrideRec, _super);
function TranslationOverrideRec(defaults) {
_super.apply(this, arguments);
}
TranslationOverrideRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ResourceKey", "resourceKeyAttr", "ResourceKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Locale", "localeAttr", "Locale", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Translation", "translationAttr", "Translation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TranslationOverrideRec.init();
return TranslationOverrideRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.TranslationOverrideRec = TranslationOverrideRec;

});
define("ServiceCenter.model$Espace_Mobile_ConfigsRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_Mobile_ConfigsRec = (function (_super) {
__extends(Espace_Mobile_ConfigsRec, _super);
function Espace_Mobile_ConfigsRec(defaults) {
_super.apply(this, arguments);
}
Espace_Mobile_ConfigsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TraceErrors", "traceErrorsAttr", "TraceErrors", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("TraceAll", "traceAllAttr", "TraceAll", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Espace_Mobile_ConfigsRec.init();
return Espace_Mobile_ConfigsRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_Mobile_ConfigsRec = Espace_Mobile_ConfigsRec;

});
define("ServiceCenter.model$Process_OutputRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_OutputRec = (function (_super) {
__extends(Process_OutputRec, _super);
function Process_OutputRec(defaults) {
_super.apply(this, arguments);
}
Process_OutputRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Output_Def_Id", "output_Def_IdAttr", "Output_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Process_Id", "process_IdAttr", "Process_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Output_Value", "output_ValueAttr", "Output_Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Type", "sS_TypeAttr", "SS_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Process_OutputRec.init();
return Process_OutputRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_OutputRec = Process_OutputRec;

});
define("ServiceCenter.model$TestCaseRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var TestCaseRec = (function (_super) {
__extends(TestCaseRec, _super);
function TestCaseRec(defaults) {
_super.apply(this, arguments);
}
TestCaseRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EspaceId", "espaceIdAttr", "EspaceId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SSKey", "sSKeyAttr", "SSKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("TransClosureCompilationHash", "transClosureCompilationHashAttr", "TransClosureCompilationHash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TestCaseRec.init();
return TestCaseRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.TestCaseRec = TestCaseRec;

});
define("ServiceCenter.model$Developer_DBConnectionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_DBConnectionRec = (function (_super) {
__extends(Developer_DBConnectionRec, _super);
function Developer_DBConnectionRec(defaults) {
_super.apply(this, arguments);
}
Developer_DBConnectionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Developer_Id", "developer_IdAttr", "Developer_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DBConnection_Id", "dBConnection_IdAttr", "DBConnection_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Security_Level", "security_LevelAttr", "Security_Level", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Developer_DBConnectionRec.init();
return Developer_DBConnectionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_DBConnectionRec = Developer_DBConnectionRec;

});
define("ServiceCenter.model$Extension_DBConnectionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Extension_DBConnectionRec = (function (_super) {
__extends(Extension_DBConnectionRec, _super);
function Extension_DBConnectionRec(defaults) {
_super.apply(this, arguments);
}
Extension_DBConnectionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LogicalDatabase", "logicalDatabaseAttr", "LogicalDatabase", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtensionId", "extensionIdAttr", "ExtensionId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DBConnectionId", "dBConnectionIdAttr", "DBConnectionId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Extension_DBConnectionRec.init();
return Extension_DBConnectionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Extension_DBConnectionRec = Extension_DBConnectionRec;

});
define("ServiceCenter.model$Security_CSP_DirectiveRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Security_CSP_DirectiveRec = (function (_super) {
__extends(Security_CSP_DirectiveRec, _super);
function Security_CSP_DirectiveRec(defaults) {
_super.apply(this, arguments);
}
Security_CSP_DirectiveRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FriendlyLabel", "friendlyLabelAttr", "FriendlyLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AllowNone", "allowNoneAttr", "AllowNone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AddSelf", "addSelfAttr", "AddSelf", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AddData", "addDataAttr", "AddData", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AddInternalURL", "addInternalURLAttr", "AddInternalURL", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AddGap", "addGapAttr", "AddGap", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Security_CSP_DirectiveRec.init();
return Security_CSP_DirectiveRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Security_CSP_DirectiveRec = Security_CSP_DirectiveRec;

});
define("ServiceCenter.model$ExtensionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ExtensionRec = (function (_super) {
__extends(ExtensionRec, _super);
function ExtensionRec(defaults) {
_super.apply(this, arguments);
}
ExtensionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_System", "is_SystemAttr", "Is_System", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Version_Id", "version_IdAttr", "Version_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Published_Date", "published_DateAttr", "Published_Date", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Published_By", "published_ByAttr", "Published_By", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExtensionRec.init();
return ExtensionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ExtensionRec = ExtensionRec;

});
define("ServiceCenter.model$Process_Definition_LangRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_Definition_LangRec = (function (_super) {
__extends(Process_Definition_LangRec, _super);
function Process_Definition_LangRec(defaults) {
_super.apply(this, arguments);
}
Process_Definition_LangRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Process_Def_Id", "process_Def_IdAttr", "Process_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Locale", "localeAttr", "Locale", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Process_Definition_LangRec.init();
return Process_Definition_LangRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_Definition_LangRec = Process_Definition_LangRec;

});
define("ServiceCenter.model$Group_RoleRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Group_RoleRec = (function (_super) {
__extends(Group_RoleRec, _super);
function Group_RoleRec(defaults) {
_super.apply(this, arguments);
}
Group_RoleRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Group_Id", "group_IdAttr", "Group_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Role_Id", "role_IdAttr", "Role_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Group_RoleRec.init();
return Group_RoleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Group_RoleRec = Group_RoleRec;

});
define("ServiceCenter.model$Solution_VersionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Solution_VersionRec = (function (_super) {
__extends(Solution_VersionRec, _super);
function Solution_VersionRec(defaults) {
_super.apply(this, arguments);
}
Solution_VersionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Version", "versionAttr", "Version", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Creation", "creationAttr", "Creation", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.BuiltinFunctions.currDateTime();
}, true), 
this.attr("Creation_By", "creation_ByAttr", "Creation_By", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Solution_Id", "solution_IdAttr", "Solution_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Publish", "publishAttr", "Publish", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Publish_By", "publish_ByAttr", "Publish_By", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Solution_VersionRec.init();
return Solution_VersionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Solution_VersionRec = Solution_VersionRec;

});
define("ServiceCenter.model$Cyclic_Job_SharedRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Cyclic_Job_SharedRec = (function (_super) {
__extends(Cyclic_Job_SharedRec, _super);
function Cyclic_Job_SharedRec(defaults) {
_super.apply(this, arguments);
}
Cyclic_Job_SharedRec.attributesToDeclare = function () {
return [
this.attr("Meta_Cyclic_Job_Id", "meta_Cyclic_Job_IdAttr", "Meta_Cyclic_Job_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Schedule", "scheduleAttr", "Schedule", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Last_Run", "last_RunAttr", "Last_Run", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Last_Duration", "last_DurationAttr", "Last_Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Running_Since", "is_Running_SinceAttr", "Is_Running_Since", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Is_Running_By", "is_Running_ByAttr", "Is_Running_By", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Number_Of_Tries", "number_Of_TriesAttr", "Number_Of_Tries", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Cyclic_Job_SharedRec.init();
return Cyclic_Job_SharedRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Cyclic_Job_SharedRec = Cyclic_Job_SharedRec;

});
define("ServiceCenter.model$Sent_EmailRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Sent_EmailRec = (function (_super) {
__extends(Sent_EmailRec, _super);
function Sent_EmailRec(defaults) {
_super.apply(this, arguments);
}
Sent_EmailRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("From", "fromAttr", "From", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("To", "toAttr", "To", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CC", "cCAttr", "CC", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BCC", "bCCAttr", "BCC", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subject", "subjectAttr", "Subject", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Created", "createdAttr", "Created", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Activity_Id", "activity_IdAttr", "Activity_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Email_Definition_Id", "email_Definition_IdAttr", "Email_Definition_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Store_Content", "store_ContentAttr", "Store_Content", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Is_Test_Email", "is_Test_EmailAttr", "Is_Test_Email", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Message_Id", "message_IdAttr", "Message_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Sent_EmailRec.init();
return Sent_EmailRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Sent_EmailRec = Sent_EmailRec;

});
define("ServiceCenter.model$Report_Slow_TimerRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Slow_TimerRec = (function (_super) {
__extends(Report_Slow_TimerRec, _super);
function Report_Slow_TimerRec(defaults) {
_super.apply(this, arguments);
}
Report_Slow_TimerRec.attributesToDeclare = function () {
return [
this.attr("espace", "espaceAttr", "espace", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("timer_key", "timer_keyAttr", "timer_key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("avgtime", "avgtimeAttr", "avgtime", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("count", "countAttr", "count", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("totaltime", "totaltimeAttr", "totaltime", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("reportId", "reportIdAttr", "reportId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("errors", "errorsAttr", "errors", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_Slow_TimerRec.init();
return Report_Slow_TimerRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Slow_TimerRec = Report_Slow_TimerRec;

});
define("ServiceCenter.model$Email_ContentRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Email_ContentRec = (function (_super) {
__extends(Email_ContentRec, _super);
function Email_ContentRec(defaults) {
_super.apply(this, arguments);
}
Email_ContentRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Content", "contentAttr", "Content", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Email_ContentRec.init();
return Email_ContentRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Email_ContentRec = Email_ContentRec;

});
define("ServiceCenter.model$SharedConfigurationRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var SharedConfigurationRec = (function (_super) {
__extends(SharedConfigurationRec, _super);
function SharedConfigurationRec(defaults) {
_super.apply(this, arguments);
}
SharedConfigurationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Kind", "kindAttr", "Kind", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SharedConfigurationRec.init();
return SharedConfigurationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.SharedConfigurationRec = SharedConfigurationRec;

});
define("ServiceCenter.model$Assembly_DependencyRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Assembly_DependencyRec = (function (_super) {
__extends(Assembly_DependencyRec, _super);
function Assembly_DependencyRec(defaults) {
_super.apply(this, arguments);
}
Assembly_DependencyRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Assembly_Id", "assembly_IdAttr", "Assembly_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Signature_In_Use", "signature_In_UseAttr", "Signature_In_Use", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Assembly_DependencyRec.init();
return Assembly_DependencyRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Assembly_DependencyRec = Assembly_DependencyRec;

});
define("ServiceCenter.model$Application_IconRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Application_IconRec = (function (_super) {
__extends(Application_IconRec, _super);
function Application_IconRec(defaults) {
_super.apply(this, arguments);
}
Application_IconRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Content_Hash", "content_HashAttr", "Content_Hash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Content", "contentAttr", "Content", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Application_IconRec.init();
return Application_IconRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Application_IconRec = Application_IconRec;

});
define("ServiceCenter.model$SolutionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var SolutionRec = (function (_super) {
__extends(SolutionRec, _super);
function SolutionRec(defaults) {
_super.apply(this, arguments);
}
SolutionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Creation", "creationAttr", "Creation", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.BuiltinFunctions.currDateTime();
}, true), 
this.attr("Creation_By", "creation_ByAttr", "Creation_By", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("External", "externalAttr", "External", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Publish", "publishAttr", "Publish", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Publish_By", "publish_ByAttr", "Publish_By", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Publish_HubServerVersion", "publish_HubServerVersionAttr", "Publish_HubServerVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Publish_Version", "publish_VersionAttr", "Publish_Version", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Transient", "is_TransientAttr", "Is_Transient", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SolutionRec.init();
return SolutionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.SolutionRec = SolutionRec;

});
define("ServiceCenter.model$ModifiedElementRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var ModifiedElementRec = (function (_super) {
__extends(ModifiedElementRec, _super);
function ModifiedElementRec(defaults) {
_super.apply(this, arguments);
}
ModifiedElementRec.attributesToDeclare = function () {
return [
this.attr("PublishId", "publishIdAttr", "PublishId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Category", "categoryAttr", "Category", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ElementType", "elementTypeAttr", "ElementType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Quantity", "quantityAttr", "Quantity", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ModifiedElementRec.init();
return ModifiedElementRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.ModifiedElementRec = ModifiedElementRec;

});
define("ServiceCenter.model$Espace_Version_SignatureRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_Version_SignatureRec = (function (_super) {
__extends(Espace_Version_SignatureRec, _super);
function Espace_Version_SignatureRec(defaults) {
_super.apply(this, arguments);
}
Espace_Version_SignatureRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Version_Id", "espace_Version_IdAttr", "Espace_Version_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Signature_Binary", "signature_BinaryAttr", "Signature_Binary", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("Signature_Hash", "signature_HashAttr", "Signature_Hash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Compatibility_Signature_Hash", "compatibility_Signature_HashAttr", "Compatibility_Signature_Hash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Espace_Version_SignatureRec.init();
return Espace_Version_SignatureRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_Version_SignatureRec = Espace_Version_SignatureRec;

});
define("ServiceCenter.model$Process_Input_DefinitionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Process_Input_DefinitionRec = (function (_super) {
__extends(Process_Input_DefinitionRec, _super);
function Process_Input_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Process_Input_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Process_Def_Id", "process_Def_IdAttr", "Process_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Mandatory", "is_MandatoryAttr", "Is_Mandatory", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Default_Value", "default_ValueAttr", "Default_Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Type", "sS_TypeAttr", "SS_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Process_Input_DefinitionRec.init();
return Process_Input_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Process_Input_DefinitionRec = Process_Input_DefinitionRec;

});
define("ServiceCenter.model$PageRuleRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PageRuleRec = (function (_super) {
__extends(PageRuleRec, _super);
function PageRuleRec(defaults) {
_super.apply(this, arguments);
}
PageRuleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RuleOrder", "ruleOrderAttr", "RuleOrder", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Incoming", "incomingAttr", "Incoming", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Translation", "translationAttr", "Translation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Redirect", "redirectAttr", "Redirect", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("UseRegexp", "useRegexpAttr", "UseRegexp", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("StopProcessing", "stopProcessingAttr", "StopProcessing", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ExclusiveToPathRule", "exclusiveToPathRuleAttr", "ExclusiveToPathRule", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ImplementsMetaRule", "implementsMetaRuleAttr", "ImplementsMetaRule", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PageRuleRec.init();
return PageRuleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PageRuleRec = PageRuleRec;

});
define("ServiceCenter.model$CapabilityRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var CapabilityRec = (function (_super) {
__extends(CapabilityRec, _super);
function CapabilityRec(defaults) {
_super.apply(this, arguments);
}
CapabilityRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CapabilityRec.init();
return CapabilityRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.CapabilityRec = CapabilityRec;

});
define("ServiceCenter.model$PluginAPIStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PluginAPIStatusRec = (function (_super) {
__extends(PluginAPIStatusRec, _super);
function PluginAPIStatusRec(defaults) {
_super.apply(this, arguments);
}
PluginAPIStatusRec.attributesToDeclare = function () {
return [
this.attr("Success", "successAttr", "Success", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ResponseId", "responseIdAttr", "ResponseId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ResponseMessage", "responseMessageAttr", "ResponseMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ResponseAdditionalInfo", "responseAdditionalInfoAttr", "ResponseAdditionalInfo", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PluginAPIStatusRec.init();
return PluginAPIStatusRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PluginAPIStatusRec = PluginAPIStatusRec;

});
define("ServiceCenter.model$Activity_Output_DefinitionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_Output_DefinitionRec = (function (_super) {
__extends(Activity_Output_DefinitionRec, _super);
function Activity_Output_DefinitionRec(defaults) {
_super.apply(this, arguments);
}
Activity_Output_DefinitionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Activity_Def_Id", "activity_Def_IdAttr", "Activity_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Data_Type", "data_TypeAttr", "Data_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Input", "is_InputAttr", "Is_Input", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Is_Mandatory", "is_MandatoryAttr", "Is_Mandatory", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Default_Value", "default_ValueAttr", "Default_Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SS_Type", "sS_TypeAttr", "SS_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Activity_Output_DefinitionRec.init();
return Activity_Output_DefinitionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_Output_DefinitionRec = Activity_Output_DefinitionRec;

});
define("ServiceCenter.model$Extension_DependencyRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Extension_DependencyRec = (function (_super) {
__extends(Extension_DependencyRec, _super);
function Extension_DependencyRec(defaults) {
_super.apply(this, arguments);
}
Extension_DependencyRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Filename", "filenameAttr", "Filename", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("File_Content", "file_ContentAttr", "File_Content", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("Last_Modified", "last_ModifiedAttr", "Last_Modified", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("SS_Key", "sS_KeyAttr", "SS_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Compile_Action", "compile_ActionAttr", "Compile_Action", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "Path", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Extension_Version_Id", "extension_Version_IdAttr", "Extension_Version_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Extension_DependencyRec.init();
return Extension_DependencyRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Extension_DependencyRec = Extension_DependencyRec;

});
define("ServiceCenter.model$Developer_AdditionalPermissionsRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_AdditionalPermissionsRec = (function (_super) {
__extends(Developer_AdditionalPermissionsRec, _super);
function Developer_AdditionalPermissionsRec(defaults) {
_super.apply(this, arguments);
}
Developer_AdditionalPermissionsRec.attributesToDeclare = function () {
return [
this.attr("DeveloperId", "developerIdAttr", "DeveloperId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Allow_New_Application", "allow_New_ApplicationAttr", "Allow_New_Application", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Developer_AdditionalPermissionsRec.init();
return Developer_AdditionalPermissionsRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_AdditionalPermissionsRec = Developer_AdditionalPermissionsRec;

});
define("ServiceCenter.model$Espace_RuntimeRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_RuntimeRec = (function (_super) {
__extends(Espace_RuntimeRec, _super);
function Espace_RuntimeRec(defaults) {
_super.apply(this, arguments);
}
Espace_RuntimeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Broken_References", "broken_ReferencesAttr", "Broken_References", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Outdated_References", "outdated_ReferencesAttr", "Outdated_References", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Outdated_Broken_References", "outdated_Broken_ReferencesAttr", "Outdated_Broken_References", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Missing_References", "missing_ReferencesAttr", "Missing_References", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Outdated_Missing_References", "outdated_Missing_ReferencesAttr", "Outdated_Missing_References", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("OldProducer_References", "oldProducer_ReferencesAttr", "OldProducer_References", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Unassigned_Phones", "unassigned_PhonesAttr", "Unassigned_Phones", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Requires_Compilation", "requires_CompilationAttr", "Requires_Compilation", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Disabled", "disabledAttr", "Disabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("UserProvider_Version_Id", "userProvider_Version_IdAttr", "UserProvider_Version_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Outdated_UserProvider", "outdated_UserProviderAttr", "Outdated_UserProvider", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Missing_UserProvider", "missing_UserProviderAttr", "Missing_UserProvider", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("OldProducer_UserProvider", "oldProducer_UserProviderAttr", "OldProducer_UserProvider", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SecuritySettingsChanged", "securitySettingsChangedAttr", "SecuritySettingsChanged", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PendingRuntimeConfigs", "pendingRuntimeConfigsAttr", "PendingRuntimeConfigs", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Espace_RuntimeRec.init();
return Espace_RuntimeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_RuntimeRec = Espace_RuntimeRec;

});
define("ServiceCenter.model$Activity_Def_RoleRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Activity_Def_RoleRec = (function (_super) {
__extends(Activity_Def_RoleRec, _super);
function Activity_Def_RoleRec(defaults) {
_super.apply(this, arguments);
}
Activity_Def_RoleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Role_Id", "role_IdAttr", "Role_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Activity_Def_Id", "activity_Def_IdAttr", "Activity_Def_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Activity_Def_RoleRec.init();
return Activity_Def_RoleRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Activity_Def_RoleRec = Activity_Def_RoleRec;

});
define("ServiceCenter.model$Async_Operation_DBCatalogRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Async_Operation_DBCatalogRec = (function (_super) {
__extends(Async_Operation_DBCatalogRec, _super);
function Async_Operation_DBCatalogRec(defaults) {
_super.apply(this, arguments);
}
Async_Operation_DBCatalogRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace", "espaceAttr", "Espace", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DBCatalogName", "dBCatalogNameAttr", "DBCatalogName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DBCatalog_Id", "dBCatalog_IdAttr", "DBCatalog_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("State_Id", "state_IdAttr", "State_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Async_Operation_DBCatalogRec.init();
return Async_Operation_DBCatalogRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Async_Operation_DBCatalogRec = Async_Operation_DBCatalogRec;

});
define("ServiceCenter.model$Espace_SharedConfigurationRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_SharedConfigurationRec = (function (_super) {
__extends(Espace_SharedConfigurationRec, _super);
function Espace_SharedConfigurationRec(defaults) {
_super.apply(this, arguments);
}
Espace_SharedConfigurationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("eSpaceId", "eSpaceIdAttr", "eSpaceId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SharedConfigurationId", "sharedConfigurationIdAttr", "SharedConfigurationId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Espace_SharedConfigurationRec.init();
return Espace_SharedConfigurationRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_SharedConfigurationRec = Espace_SharedConfigurationRec;

});
define("ServiceCenter.model$PluginAPIConfigurationParameterRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var PluginAPIConfigurationParameterRec = (function (_super) {
__extends(PluginAPIConfigurationParameterRec, _super);
function PluginAPIConfigurationParameterRec(defaults) {
_super.apply(this, arguments);
}
PluginAPIConfigurationParameterRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PluginAPIConfigurationParameterRec.init();
return PluginAPIConfigurationParameterRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.PluginAPIConfigurationParameterRec = PluginAPIConfigurationParameterRec;

});
define("ServiceCenter.model$DBMSRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var DBMSRec = (function (_super) {
__extends(DBMSRec, _super);
function DBMSRec(defaults) {
_super.apply(this, arguments);
}
DBMSRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DBMSRec.init();
return DBMSRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.DBMSRec = DBMSRec;

});
define("ServiceCenter.model$Recompilation_LogRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Recompilation_LogRec = (function (_super) {
__extends(Recompilation_LogRec, _super);
function Recompilation_LogRec(defaults) {
_super.apply(this, arguments);
}
Recompilation_LogRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DateStarted", "dateStartedAttr", "DateStarted", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DateFinished", "dateFinishedAttr", "DateFinished", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("By", "byAttr", "By", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Version", "versionAttr", "Version", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Recompilation_LogRec.init();
return Recompilation_LogRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Recompilation_LogRec = Recompilation_LogRec;

});
define("ServiceCenter.model$Security_ReferrerRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Security_ReferrerRec = (function (_super) {
__extends(Security_ReferrerRec, _super);
function Security_ReferrerRec(defaults) {
_super.apply(this, arguments);
}
Security_ReferrerRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Security_ReferrerRec.init();
return Security_ReferrerRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Security_ReferrerRec = Security_ReferrerRec;

});
define("ServiceCenter.model$Report_Slow_SqlRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Report_Slow_SqlRec = (function (_super) {
__extends(Report_Slow_SqlRec, _super);
function Report_Slow_SqlRec(defaults) {
_super.apply(this, arguments);
}
Report_Slow_SqlRec.attributesToDeclare = function () {
return [
this.attr("espace", "espaceAttr", "espace", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("query", "queryAttr", "query", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("avgtime", "avgtimeAttr", "avgtime", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("totaltime", "totaltimeAttr", "totaltime", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("count", "countAttr", "count", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ReportId", "reportIdAttr", "ReportId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Report_Slow_SqlRec.init();
return Report_Slow_SqlRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Report_Slow_SqlRec = Report_Slow_SqlRec;

});
define("ServiceCenter.model$Extension_VersionRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Extension_VersionRec = (function (_super) {
__extends(Extension_VersionRec, _super);
function Extension_VersionRec(defaults) {
_super.apply(this, arguments);
}
Extension_VersionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Generation", "generationAttr", "Generation", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Xif_File", "xif_FileAttr", "Xif_File", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("Uploaded_By", "uploaded_ByAttr", "Uploaded_By", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Uploaded_Date", "uploaded_DateAttr", "Uploaded_Date", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Valid", "is_ValidAttr", "Is_Valid", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("XIf_Version", "xIf_VersionAttr", "XIf_Version", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Tool_Version", "tool_VersionAttr", "Tool_Version", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Hash", "hashAttr", "Hash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Last_Modified", "last_ModifiedAttr", "Last_Modified", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("NeededDBConnection", "neededDBConnectionAttr", "NeededDBConnection", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Has_SAP", "has_SAPAttr", "Has_SAP", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LastUpdateDate", "lastUpdateDateAttr", "LastUpdateDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("HMAC", "hMACAttr", "HMAC", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HMACVersion", "hMACVersionAttr", "HMACVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Direct_Upgrade_From_Hash", "direct_Upgrade_From_HashAttr", "Direct_Upgrade_From_Hash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Extension_VersionRec.init();
return Extension_VersionRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Extension_VersionRec = Extension_VersionRec;

});
define("ServiceCenter.model$Solution_Version_ReferenceRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Solution_Version_ReferenceRec = (function (_super) {
__extends(Solution_Version_ReferenceRec, _super);
function Solution_Version_ReferenceRec(defaults) {
_super.apply(this, arguments);
}
Solution_Version_ReferenceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Kind", "kindAttr", "Kind", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Main_Reference", "main_ReferenceAttr", "Main_Reference", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Solution_Version_Id", "solution_Version_IdAttr", "Solution_Version_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Version_Id", "espace_Version_IdAttr", "Espace_Version_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Version_Id", "extension_Version_IdAttr", "Extension_Version_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Solution_Version_ReferenceRec.init();
return Solution_Version_ReferenceRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Solution_Version_ReferenceRec = Solution_Version_ReferenceRec;

});
define("ServiceCenter.model$Application_IconHighResRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Application_IconHighResRec = (function (_super) {
__extends(Application_IconHighResRec, _super);
function Application_IconHighResRec(defaults) {
_super.apply(this, arguments);
}
Application_IconHighResRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Image", "imageAttr", "Image", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Application_IconHighResRec.init();
return Application_IconHighResRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Application_IconHighResRec = Application_IconHighResRec;

});
define("ServiceCenter.model$Developer_Operation_TypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Developer_Operation_TypeRec = (function (_super) {
__extends(Developer_Operation_TypeRec, _super);
function Developer_Operation_TypeRec(defaults) {
_super.apply(this, arguments);
}
Developer_Operation_TypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DeployPhaseId", "deployPhaseIdAttr", "DeployPhaseId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Developer_Operation_TypeRec.init();
return Developer_Operation_TypeRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Developer_Operation_TypeRec = Developer_Operation_TypeRec;

});
define("ServiceCenter.model$Persistent_LoginRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Persistent_LoginRec = (function (_super) {
__extends(Persistent_LoginRec, _super);
function Persistent_LoginRec(defaults) {
_super.apply(this, arguments);
}
Persistent_LoginRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Terminal_Type", "terminal_TypeAttr", "Terminal_Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Secret", "secretAttr", "Secret", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Expires", "expiresAttr", "Expires", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Persistent_LoginRec.init();
return Persistent_LoginRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Persistent_LoginRec = Persistent_LoginRec;

});
define("ServiceCenter.model$Espace_TenantRec", ["exports", "OutSystems/ClientRuntime/Main", "ServiceCenter.model"], function (exports, OutSystems, ServiceCenterModel) {
var OS = OutSystems.Internal;
var Espace_TenantRec = (function (_super) {
__extends(Espace_TenantRec, _super);
function Espace_TenantRec(defaults) {
_super.apply(this, arguments);
}
Espace_TenantRec.attributesToDeclare = function () {
return [
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Tenant_Name", "tenant_NameAttr", "Tenant_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Espace_TenantRec.init();
return Espace_TenantRec;
})(OS.DataTypes.GenericRecord);
ServiceCenterModel.Espace_TenantRec = Espace_TenantRec;

});
define("ServiceCenter.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var ServiceCenterModel = exports;
});
