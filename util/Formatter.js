/* 
* @Author: anshad.vp
* @Date:   2014-03-28 12:06:30
* @Last Modified by:   anshad.vp
* @Last Modified time: 2014-03-28 15:48:29
*/

jQuery.sap.declare("sap.ui.demo.app.util.Formatter");
jQuery.sap.require("sap.ui.core.format.DateFormat");

sap.ui.demo.app.util.Formatter = { 
	
	_statusStateMap : { 
		"P" : "Success", 
		"N" : "Warning" 
	},
	statusText : function (value) { 
		var bundle = this.getModel("i18n").getResourceBundle(); 
		return bundle.getText("StatusText" + value, "?"); 
	}, 
	statusState : function (value) { 
		var map = sap.ui.demo.app.util.Formatter._statusStateMap; 
		return (value && map[value]) ? map[value] : "None"; 
	}, 
	date : function (value) { 
		if (value) { 
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "dd-MM-yyyy"}); 
			return oDateFormat.format(new Date(value)); 
		} else { 
			return value; 
		} 
	},
	quantity : function (value) { 
		try { 
			return (value) ? parseFloat(value).toFixed(0) : value; 
		} catch (err) { 
			return "Not-A-Number"; 
		} 
	} 
};