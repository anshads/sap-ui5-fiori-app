/* 
* @Author: anshad.vp
* @Date:   2014-03-28 12:06:30
* @Last Modified by:   anshad.vp
* @Last Modified time: 2014-03-28 15:45:27
*/

sap.ui.jsview("sap.ui.demo.app.view.App", {

	getControllerName: function () {
		return "sap.ui.demo.app.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.SplitApp();
		
		// load the master page
		var master = sap.ui.xmlview("Master", "sap.ui.demo.app.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		/*// load the detail page
		var detail = sap.ui.xmlview("Detail", "sap.ui.demo.app.view.Detail");
		detail.getController().nav = this.getController();
		this.app.addPage(detail, false);
		
		// done
		return this.app;*/
		// load the empty page 
		var empty = sap.ui.xmlview("Empty", "sap.ui.demo.app.view.Empty"); 
		this.app.addPage(empty, false);
		return this.app;
	}
});