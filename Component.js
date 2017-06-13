sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/wt/controller/HelloDialog"

], 
function (UIComponent, JSONModel, HelloDialog) {
	"use strict";
	return UIComponent.extend("sap.ui.demo.wt.Component", {
		metadata : {
			manifest : "json",
		},
		init : function () {
			sap.ui.getCore().loadLibrary("openui5.googlemaps", "externalResources/googlemaps");
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			// set dialog
			this._helloDialog = new HelloDialog(this.getAggregation("rootControl"));
			this.getRouter().initialize();
		},


		openHelloDialog : function () {
			this._helloDialog.open();
		}
	});
});