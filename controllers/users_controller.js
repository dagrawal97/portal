const User = require('../models/user');
const fs = require('fs');
const path = require('path');


//render the sign up page
module.exports.signUp = function(req, res){
    // if(req.isAuthenticated())
    // {
    //     return res.redirect('/users/profile');
    // }
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })  
}

//render the sign in page
module.exports.signIn = function(req, res){
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

//get the sign up data
module.exports.create = function(req, res){
    //TODO later
    // if(req.body.password != req.body.confirm_password){
    //     return res.redirect('back');
    // }
    // User.create(req.body, function(err, user){
    //     if(err){console.log('error in creating user while signing up'); return}

    //     return res.redirect('/users/sign-in'); ///doubt 
    // });
    User.create({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    }, function(err, newUser){
        if(err)
        {
            console.log('error in signingup', err);
            return;
        }
        console.log('******', newUser);
        return res.redirect('back');
    });

    // User.findOne({email: req.body.email}, function(err, user){
    //     if(err){console.log('error in finding user in signing up'); return}

    //     if(!user){
    //         User.create(req.body, function(err, user){
    //             if(err){console.log('error in creating user while signing up'); return}

    //             return res.redirect('/users/sign-in'); ///doubt 
    //         });
    //     }
    //     else{
    //         return res.redirect('back');
    //     }
    // });
}

// //get the sign in data
// module.exports.createSession = function(req, res){
//     req.flash('success', 'Logged in Successfully');
//     return res.redirect('/');
// }
// //sign-out
// module.exports.destroySession = function(req, res){
//     req.logout();
//     req.flash('success', 'Logged Out!');
//     return res.redirect('/');
// }
