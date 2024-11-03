

const mongoose = require('mongoose');
const { countConnect } = require("../helpers/check.connect");

const connectString = `mongodb://localhost:27017/shopDEV`

//dev 

class Database {
    constructor() {
        this.connect();
    }

    connect(type = 'mongodb') {
        if( 1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', {color: true});
        }
        mongoose.connect(connectString, {
            maxPoolSize: 100
        }).then((result) => {
            console.log("success", countConnect)
        }).catch((err) => {
            console.log("error",err)
        });

    }
    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
        
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb