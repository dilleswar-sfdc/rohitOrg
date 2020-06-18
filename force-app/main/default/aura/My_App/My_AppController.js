({
	OpenCloseRegister : function(component, event, helper) {
		var a=event.getSource().get("v.label");
        if(a=="Open default Register")
        {
            component.set("v.OpenRegister",true);
            component.set("v.ButtonLabel","Close The Form");
        }
        
         if(a=="Close The Form")
        {
            component.set("v.OpenRegister",false);
            component.set("v.ButtonLabel","Open default Register");
        }
	}
})