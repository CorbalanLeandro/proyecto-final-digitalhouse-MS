module.exports= (req,res,next) =>{
    if(res.locals.user.profile > 1){
        return next();
    }else{
        res.redirect('/') 
    }
}