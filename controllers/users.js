//LLAMO A MI MODELO USER
const User = require('../models/user');


exports.getAddUser = (req, res, next) => {
    res.render('admin/add-user');
    
}

exports.postAddUser = (req, res, next) => {
    const user = new User(req.body.displayName);
    user.saveNewUser();
    res.redirect('/');
}

exports.getAllUsers = (req, res, next) => {
    User.displayAllUsers((users) => {
        res.render('client/users', {
            users: users
        });
    })

}