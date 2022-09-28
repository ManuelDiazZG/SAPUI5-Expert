sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * * @param {typeof sap.m.core.MessageToast} MessageToast 
     */
    function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("logaligroup.SAPUI5.controller.HelloPanel", {
            onInit: function () {



            },
            onShowHello: function () {
                //READ TEXT FROM I18N MODEL
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property fromm data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name")
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            },


            onOpenDialog: function () {
              this.getOwnerComponent().openHelloDialog();
            }
      
        });
    });