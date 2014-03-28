/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.ToolbarRenderer");sap.ui.commons.ToolbarRenderer={};
sap.ui.commons.ToolbarRenderer.render=function(r,t){var a=r;var b=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");if(!t.getVisible()){return}a.write("<div role='toolbar' tabindex='0'");a.writeControlData(t);if(t.getWidth()){a.addStyle("width",t.getWidth())}var T=t.getTooltip_AsString();if(T){a.writeAttributeEscaped("title",T)}a.addClass("sapUiTb");a.addClass("sapUiTbDesign"+t.getDesign());if(t.getStandalone()){a.addClass("sapUiTbStandalone")}a.writeStyles();a.writeClasses();a.write(">");var R=t.getRightItems();var c=R.length;var h=c>0;if(h){a.write("<div class='sapUiTbCont sapUiTbContLeft'><div class='sapUiTbInner' >")}else{a.write("<div class='sapUiTbCont'><div class='sapUiTbInner'>")}var I=t.getItems();var l=I.length;for(var i=0;i<l;i++){var o=I[i];if(o){if(o instanceof sap.ui.commons.ToolbarSeparator){sap.ui.commons.ToolbarRenderer.renderSeparator(a,o)}else{a.renderControl(o)}}}a.write("<div id='");a.write(t.getId());a.write("-mn' class='sapUiTbOB' role='button' aria-haspopup='true' title='"+b.getText("TOOLBAR_OVERFLOW")+"' tabindex='-1'></div></div></div>");if(h){a.write("<div class='sapUiTbInnerRight' >");for(var i=0;i<c;i++){var o=R[i];if(o){if(o instanceof sap.ui.commons.ToolbarSeparator){sap.ui.commons.ToolbarRenderer.renderSeparator(a,o)}else{a.renderControl(o)}}}a.write("</div>")}a.write("</div>")};
sap.ui.commons.ToolbarRenderer.renderSeparator=function(r,t){if(t.getDisplayVisualSeparator()){r.write("<span ");r.writeElementData(t);if(t.getDesign()===sap.ui.commons.ToolbarSeparatorDesign.FullHeight){r.write(" class='sapUiTbSeparator sapUiTbSepFullHeight' role='separator'></span>")}else{r.write(" class='sapUiTbSeparator' role='separator'></span>")}}else{r.write("<span ");r.writeElementData(t);r.write(" class='sapUiTbSpacer' role='separator'></span>")}};
sap.ui.commons.ToolbarRenderer.fillOverflowPopup=function(t){var p=jQuery.sap.domById(t.getId()+"-pu");if(!p){p=sap.ui.commons.ToolbarRenderer.initOverflowPopup(t).firstChild}var v=t.getVisibleItemInfo().count;var T=t.getDomRef().firstChild.firstChild;var P=0;var c=T.firstChild;var o=t.getId()+"-mn";while(c){var n=c.nextSibling;if(P>=v){if(c.id==o){break}p.appendChild(c)}c=n;P++}};
sap.ui.commons.ToolbarRenderer.initOverflowPopup=function(t){var s=sap.ui.getCore().getStaticAreaRef();var p=document.createElement("div");p.className="sapUiTbDD sapUiTbDesignFlat";p.innerHTML="<div id='"+t.getId()+"-pu' data-sap-ui="+t.getId()+" tabindex='0' role='menu'></div>";s.appendChild(p);return p};
sap.ui.commons.ToolbarRenderer.emptyOverflowPopup=function(t){var p=jQuery.sap.domById(t.getId()+"-pu");if(p){var o=jQuery.sap.domById(t.getId()+"-mn");var T=t.getDomRef().firstChild.firstChild;while(p.hasChildNodes()){T.insertBefore(p.firstChild,o)}}};
sap.ui.commons.ToolbarRenderer.getPopupArea=function(t){return jQuery.sap.domById(t.getId()+"-pu")};
sap.ui.commons.ToolbarRenderer.setActive=function(t){jQuery.sap.byId(t.getId()+"-mn").addClass("sapUiTbOBAct")};
sap.ui.commons.ToolbarRenderer.unsetActive=function(t){jQuery.sap.byId(t.getId()+"-mn").removeClass("sapUiTbOBAct")};
