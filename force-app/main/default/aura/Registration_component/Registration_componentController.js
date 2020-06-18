({
    doInit:function(cmp, evt, hpr) {
    hpr.loadLoacalize(cmp, evt, hpr);
    },
	RegisterSubmit : function(cmp, evt, hpr) {
        debugger;
        console.log("this text is from Delete Education Details");
		var RegForm=cmp.get("v.RegForm");
        console.log(JSON.parse(JSON.stringify(cmp.get("v.RegForm") )));
        var action=cmp.get("c.SaveregisterDetails");
        action.setParams({regForm:RegForm});
        action.setCallback(this, function(response) {
            var state=response.getState();
               if(state==="SUCCESS") {
                   alert("From Serve-Side"+ response.getReturnValue());
               }
               else if(state==="ERROR"){
                   var error=response.getError();
                   if(error){
                       console.log("Error is"+error[0].message);
                   }
                   else
                   {console.log("Unknown Error");}
               }               
           });
        $A.enqueueAction(action);
	},
    
    CheckBoxClick:function(cmp,evt,hpr){
        console.log("this text is from Controller");
        hpr.OnCheckChange(cmp,evt);
    },
    
     
    AddEducationDetails:function(cmp,evt,hpr){
        console.log("this text is from Education Details");
        var AddEducationalDetailList=cmp.get("v.AddEducationalDetails");
        var currentSize=parseInt(AddEducationalDetailList.length);
        var newlen=parseInt((currentSize)+1);
        AddEducationalDetailList.push(newlen);
        cmp.set("v.AddEducationalDetails",AddEducationalDetailList);
    }
})