const Filter = require('@kawacrepe/badwords');
module.exports.home=function(req,res){

    return res.render("home",{
        title:"Bad-Words-Blocker"
    })
}


module.exports.create=function(req,res){
    const filter = new Filter();
    c=req.body.content;
    const v=filter.clean(req.body.content);
    console.log(v);
return res.render("home",{
    text:v,
    text1:c,
    title:"Bad Words"
});
    
}