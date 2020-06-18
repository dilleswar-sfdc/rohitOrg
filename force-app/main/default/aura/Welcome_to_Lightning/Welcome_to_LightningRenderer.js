({
    render:function(cmp,hlpr){
        var a=this.superRender();
        console.log("This text is from Render function");
        return a;
    }
})