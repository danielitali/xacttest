sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/wt/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/MessageToast"
], function (Controller, JSONModel, formatter, Filter, FilterOperator, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.wt.controller.SmartTable", {
		formatter: formatter,
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "₪"
			});
			this.getView().setModel(oViewModel, "view");
		},
		onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				// Make the search case insensitive
				var upQuery = sQuery[0].toUpperCase()+sQuery.substr(1).toLowerCase();
				var downQuery = sQuery.toLowerCase();
				aFilter.push(
					new Filter({
						filters:[
						//Using the appropriate fields and queries
						new Filter("Name", FilterOperator.Contains, upQuery),
						new Filter("Name", FilterOperator.Contains, downQuery),
						new Filter("Description", FilterOperator.Contains, upQuery),
						new Filter("Description", FilterOperator.Contains, downQuery)
					]
					}));
			}

			// filter binding
			var oList = this.getView().byId("idProductsTable");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},


	onItemPress : function(oEvent) {
			 //The function that is binded to the click event, 
			 //Pops up the window with the supplier and category names of the selected item.
			  var selectedItem = oEvent.getSource().getSelectedItem();
			  var bindingContext = selectedItem.getBindingContext("mymodel");
			  MessageToast.show(
			  	"Item Category: "+bindingContext.getProperty('Category/Name')+"\n"+
			  	"Item Supplier: "+bindingContext.getProperty('Supplier/Name')

			  	);
			},
	onPress : function(oEvent) {
		//Created by button
				  MessageToast.show("Daniel Tal \n taldaniel9@gmail.com \n +972523557944");
				},
	onLink: function()
	   {
	   	//Link to homepage
		   this.getOwnerComponent().getRouter().navTo("homepage");
	   }

	});
});