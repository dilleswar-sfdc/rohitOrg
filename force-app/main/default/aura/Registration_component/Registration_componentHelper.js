({
    loadLoacalize:function(component, event, helper) {
       var action = component.get("c.RegistrationJson");        
        action.setCallback(this, function(response) {
            debugger;
            var state = response.getState();
             if (state === "SUCCESS") {
             var getapiState=JSON.parse(response.getReturnValue());
             {
                  component.set("v.getLocalize",getapiState);                      
             }
             }
        });
        $A.enqueueAction(action);
     },
    
	OnCheckChange : function(cpt,eve) {
		console.log("this text is from Helper");
        var checkval=cpt.find("checkbox").get("v.checked");
        cpt.set("v.CheckBoxVal",checkval);
        cpt.set("v.RegForm.Is_Weekends_Available__c",checkval);
	}
})