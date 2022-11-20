const fs = require('fs');
const path = require('path');




class User{
    constructor(name){
        this.displayName = name;
    }

    saveNewUser(){
        let users = [];
        
        const pathToUsers = path.join(path.dirname(require.main.filename), 'data', 'users.js');
        fs.readFile(pathToUsers, (err, fileContent) => {
            if(!err){
                users = JSON.parse(fileContent);
            }
            users.push(this);
            fs.writeFile(pathToUsers, JSON.stringify(users), (err) => {
                console.log(err);
            })
        })
    }

    static displayAllUsers(cb){
        const pathToUsers = path.join(path.dirname(require.main.filename), 'data', 'users.js');
        fs.readFile(pathToUsers, (err, fileContent) => {
            if(err){
                cb([]);
            }else{
                cb(JSON.parse(fileContent));
            }
        })
    }
}

module.exports = User;