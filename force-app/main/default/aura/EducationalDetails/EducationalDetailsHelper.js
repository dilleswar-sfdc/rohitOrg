({
	helperRectifySequence : function(cmp,hpr) {
		var numb=cmp.get("v.indexNo");
        var newNumb=parseInt(numb)+1;
    	cmp.set("v.SequenceNo",newNumb);
    }
})