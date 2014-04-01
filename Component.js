/* 
* @Author: anshad.vp
* @Date:   2014-03-28 12:06:30
* @Last Modified by:   anshad.vp
* @Last Modified time: 2014-04-01 11:14:55
*/

jQuery.sap.declare("sap.ui.demo.app.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.app.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.demo.app.view.App",
			type : "JS",
			viewData : { component : this }
		});

		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: "i18n/i18n_en.properties"
		});

		oView.setModel(i18nModel,"i18n");

		// set device model 
		var deviceModel = new sap.ui.model.json.JSONModel({ 
			isPhone : jQuery.device.is.phone, 
			isNoPhone : ! jQuery.device.is.phone, 
			listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster", 
			listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive" 
		}); 
		deviceModel.setDefaultBindingMode("OneWay"); 
		oView.setModel(deviceModel, "device");

		/*
		sap.ui.controller("sapui5_test.SAPUI5_Test", {

		 initTodoModel : function() {  
		        var oModel = new sap.ui.model.json.JSONModel();
		        var aData = jQuery.ajax({
		            type : "GET",
		            contentType : "application/json",
		            url : "http://sapm04.ibsolution.local:50000/demo.sap.com~d337_resttest_web/rest/todo/init/",
		            dataType : "json",
		            async: false, 
		            success : function(data,textStatus, jqXHR) {
		                oModel.setData({modelData : data}); 
		                alert("success to post");
		            }

		        });

		        return oModel;  
		    }
		  }

		 });
		*/

		/*// Using OData model to connect against a real service
		var url = "/proxy/http/<server>:<port>/sap/opu/odata/sap/ZGWSAMPLE_SRV/";
		var oModel = new sap.ui.model.odata.ODataModel(url, true, "<user>", "<password>");
		oView.setModel(oModel);*/

		// Using a local model for offline development
		var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		oView.setModel(oModel);

		// done
		return oView;
	}
});