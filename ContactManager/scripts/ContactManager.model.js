define("ContactManager.model$MenuItemRec",["exports", "OutSystems/ClientRuntime/Main", "ContactManager.model"], function(exports, OutSystems, ContactManagerModel) {
	var OS = OutSystems.Internal;
	var MenuItemRec = (function(_super) {
		__extends(MenuItemRec, _super);
		function MenuItemRec(defaults) {
			_super.apply(this, arguments);
		}
		MenuItemRec.attributesToDeclare = function() {
			return[
			this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function() {
				return 0;
			}
			, true),
			this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function() {
				return 0;
			}
			, true),
			this.attr("Caption", "captionAttr", "Caption", true, false, OS.DataTypes.DataTypes.Text, function() {
				return "";
			}
			, true)
			] .concat(_super.attributesToDeclare.call(this));
		};
		MenuItemRec.init();
		return MenuItemRec;
	}
	) (OS.DataTypes.GenericRecord);
	ContactManagerModel.MenuItemRec = MenuItemRec;

});
define("ContactManager.model$MessageTypeRec",["exports", "OutSystems/ClientRuntime/Main", "ContactManager.model"], function(exports, OutSystems, ContactManagerModel) {
	var OS = OutSystems.Internal;
	var MessageTypeRec = (function(_super) {
		__extends(MessageTypeRec, _super);
		function MessageTypeRec(defaults) {
			_super.apply(this, arguments);
		}
		MessageTypeRec.attributesToDeclare = function() {
			return[
			this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function() {
				return 0;
			}
			, true),
			this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function() {
				return "";
			}
			, true)
			] .concat(_super.attributesToDeclare.call(this));
		};
		MessageTypeRec.init();
		return MessageTypeRec;
	}
	) (OS.DataTypes.GenericRecord);
	ContactManagerModel.MessageTypeRec = MessageTypeRec;

});
define("ContactManager.model",["exports", "OutSystems/ClientRuntime/Main"], function(exports, OutSystems) {
	var OS = OutSystems.Internal;
	var ContactManagerModel = exports;
});
