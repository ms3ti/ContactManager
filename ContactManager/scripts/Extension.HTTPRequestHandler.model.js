define("Extension.HTTPRequestHandler.model$UserLanguageRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.HTTPRequestHandler.model"], function (exports, OutSystems, Extension_HTTPRequestHandlerModel) {
var OS = OutSystems.Internal;
var UserLanguageRec = (function (_super) {
__extends(UserLanguageRec, _super);
function UserLanguageRec(defaults) {
_super.apply(this, arguments);
}
UserLanguageRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserLanguageRec.fromStructure = function (str) {
return new UserLanguageRec(new UserLanguageRec.RecordClass({
valueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserLanguageRec.init();
return UserLanguageRec;
})(OS.DataTypes.GenericRecord);
Extension_HTTPRequestHandlerModel.UserLanguageRec = UserLanguageRec;

});
define("Extension.HTTPRequestHandler.model$UserLanguageRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.HTTPRequestHandler.model", "Extension.HTTPRequestHandler.model$UserLanguageRec"], function (exports, OutSystems, Extension_HTTPRequestHandlerModel) {
var OS = OutSystems.Internal;
var UserLanguageRecord = (function (_super) {
__extends(UserLanguageRecord, _super);
function UserLanguageRecord(defaults) {
_super.apply(this, arguments);
}
UserLanguageRecord.attributesToDeclare = function () {
return [
this.attr("UserLanguage", "userLanguageAttr", "UserLanguage", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_HTTPRequestHandlerModel.UserLanguageRec());
}, true, Extension_HTTPRequestHandlerModel.UserLanguageRec)
].concat(_super.attributesToDeclare.call(this));
};
UserLanguageRecord.fromStructure = function (str) {
return new UserLanguageRecord(new UserLanguageRecord.RecordClass({
userLanguageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserLanguageRecord._isAnonymousRecord = true;
UserLanguageRecord.UniqueId = "0d91522b-fe98-b8e2-225c-65a8c955d8b3";
UserLanguageRecord.init();
return UserLanguageRecord;
})(OS.DataTypes.GenericRecord);
Extension_HTTPRequestHandlerModel.UserLanguageRecord = UserLanguageRecord;

});
define("Extension.HTTPRequestHandler.model$RequestFileRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.HTTPRequestHandler.model"], function (exports, OutSystems, Extension_HTTPRequestHandlerModel) {
var OS = OutSystems.Internal;
var RequestFileRec = (function (_super) {
__extends(RequestFileRec, _super);
function RequestFileRec(defaults) {
_super.apply(this, arguments);
}
RequestFileRec.attributesToDeclare = function () {
return [
this.attr("FileName", "fileNameAttr", "FileName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FileType", "fileTypeAttr", "FileType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FileSize", "fileSizeAttr", "FileSize", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BinaryContent", "binaryContentAttr", "BinaryContent", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RequestFileRec.init();
return RequestFileRec;
})(OS.DataTypes.GenericRecord);
Extension_HTTPRequestHandlerModel.RequestFileRec = RequestFileRec;

});
define("Extension.HTTPRequestHandler.model$RequestFileRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.HTTPRequestHandler.model", "Extension.HTTPRequestHandler.model$RequestFileRec"], function (exports, OutSystems, Extension_HTTPRequestHandlerModel) {
var OS = OutSystems.Internal;
var RequestFileRecord = (function (_super) {
__extends(RequestFileRecord, _super);
function RequestFileRecord(defaults) {
_super.apply(this, arguments);
}
RequestFileRecord.attributesToDeclare = function () {
return [
this.attr("RequestFile", "requestFileAttr", "RequestFile", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_HTTPRequestHandlerModel.RequestFileRec());
}, true, Extension_HTTPRequestHandlerModel.RequestFileRec)
].concat(_super.attributesToDeclare.call(this));
};
RequestFileRecord.fromStructure = function (str) {
return new RequestFileRecord(new RequestFileRecord.RecordClass({
requestFileAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RequestFileRecord._isAnonymousRecord = true;
RequestFileRecord.UniqueId = "b9403ff6-84fc-9a29-84e6-29b52108bc4c";
RequestFileRecord.init();
return RequestFileRecord;
})(OS.DataTypes.GenericRecord);
Extension_HTTPRequestHandlerModel.RequestFileRecord = RequestFileRecord;

});
define("Extension.HTTPRequestHandler.model$RequestFileRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.HTTPRequestHandler.model", "Extension.HTTPRequestHandler.model$RequestFileRecord"], function (exports, OutSystems, Extension_HTTPRequestHandlerModel) {
var OS = OutSystems.Internal;
var RequestFileRecordList = (function (_super) {
__extends(RequestFileRecordList, _super);
function RequestFileRecordList(defaults) {
_super.apply(this, arguments);
}
RequestFileRecordList.itemType = Extension_HTTPRequestHandlerModel.RequestFileRecord;
return RequestFileRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_HTTPRequestHandlerModel.RequestFileRecordList = RequestFileRecordList;

});
define("Extension.HTTPRequestHandler.model$UserLanguageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.HTTPRequestHandler.model", "Extension.HTTPRequestHandler.model$UserLanguageRecord"], function (exports, OutSystems, Extension_HTTPRequestHandlerModel) {
var OS = OutSystems.Internal;
var UserLanguageRecordList = (function (_super) {
__extends(UserLanguageRecordList, _super);
function UserLanguageRecordList(defaults) {
_super.apply(this, arguments);
}
UserLanguageRecordList.itemType = Extension_HTTPRequestHandlerModel.UserLanguageRecord;
return UserLanguageRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_HTTPRequestHandlerModel.UserLanguageRecordList = UserLanguageRecordList;

});
define("Extension.HTTPRequestHandler.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_HTTPRequestHandlerModel = exports;
});
