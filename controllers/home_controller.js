// const Post = require('../models/post');
// const User = require('../models/user');

module.exports.home = async function(req, res)
{   
    try{

        return res.render('user_sign_in', {
            title: "Codeial | Home"
        });

    }catch(err){
        console.log("Error", err);
        return;
    }
    
} 