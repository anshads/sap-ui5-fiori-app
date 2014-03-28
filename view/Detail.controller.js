/* 
* @Author: anshad.vp
* @Date:   2014-03-28 12:06:30
* @Last Modified by:   anshad.vp
* @Last Modified time: 2014-03-28 15:45:19
*/

jQuery.sap.require("sap.ui.demo.app.util.Formatter");
jQuery.sap.require("sap.m.MessageBox"); 
jQuery.sap.require("sap.m.MessageToast");
sap.ui.controller("sap.ui.demo.app.view.Detail", {

	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},
	onBeforeRendering:function(){ 
		this.byId("SupplierForm").bindElement("BusinessPartner"); 
	},
	handleApprove : function (evt) {
		// show confirmation dialog 
		var bundle = this.getView().getModel("i18n").getResourceBundle(); 
		sap.m.MessageBox.confirm( bundle.getText("ApproveDialogMsg"), function (oAction) { 
			if (sap.m.MessageBox.Action.OK === oAction) { 
				// notify user 
				var successMsg = bundle.getText("ApproveDialogSuccessMsg"); 
				sap.m.MessageToast.show(successMsg); 
				// TODO call proper service method and update model (not part of this session) 
			} 
		}, bundle.getText("ApproveDialogTitle") );
	},
	handleLineItemPress : function (evt) { 
		var context = evt.getSource().getBindingContext(); 
		this.nav.to("LineItem", context); 
	}
});