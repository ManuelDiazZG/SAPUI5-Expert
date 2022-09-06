sap.ui.define([

    "sap/ui/model/json/JSONModel"
],
    /**
     * 
     * @param {typeof sap.m.model.json.JSONModel} JSONModel 
     */
    function (JSONModel) {
        "use strict";
        return {
            createRecipient:function(){
                var oData={
                    recipient:{
                        name: "World"
                    }
                };
                return new JSONModel(oData);

            }

        }
    });