({
	DeleteEducationDetails : function(cmp, evt, hpr) {
		 console.log("this text is from Delete Education Details");
        debugger;
        var deleteEducationalDetailInner=cmp.get("v.AddEducationalDetailsInner");
        var nlen=parseInt(deleteEducationalDetailInner.length);
        console.log(nlen);
        var len=cmp.get("v.indexNo");
        console.log(parseInt(len));
        if(len > -1)
        deleteEducationalDetailInner.splice(len,1)
        cmp.set("v.AddEducationalDetailsInner",deleteEducationalDetailInner);
	},    
    
    OnchangeIndexno:function(cmp,evt,hpr){
       console.log("This text is Change Init");
    },
    
    getAfterInit:function(cmp,evt,hpr){
         console.log("This text is Change Evet");
       hpr.helperRectifySequence(cmp,evt);
    }
    
})