/* 
* @Author: anshad.vp
* @Date:   2014-03-28 15:23:26
* @Last Modified by:   anshad.vp
* @Last Modified time: 2014-03-28 15:27:26
*/

jQuery.sap.declare("sap.ui.demo.app.util.Grouper");

sap.ui.demo.app.util.Grouper = {

	bundle : null, // somebody has to set this
	LifecycleStatus : function (oContext) { 
		var status = oContext.getProperty("LifecycleStatus"); 
		var text = sap.ui.demo.app.util.Grouper.bundle.getText("StatusText" + status, "?"); 
		return { 
			key: status, 
			text: text 
		}; 
	},
	GrossAmount : function (oContext) { 
		var price = oContext.getProperty("GrossAmount"); 
		var currency = oContext.getProperty("CurrencyCode"); 
		var key = null, text = null; 
		if (price <= 5000) { 
			key = "LE10"; 
			text = "< 5000 " + currency; 
		} else if (price > 5000 && price <= 10000) { 
			key = "LE100"; 
			text = "< 10.000 " + currency; 
		} else if (price > 10000) { 
			key = "GT100"; 
			text = "> 10.000 " + currency; 
		} 
		return { 
			key: key, 
			text: text 
		}; 
	} 
};