

const mongoose = require('mongoose');

const connectString = `mongodb://localhost:27017/shopDEV`

mongoose.connect(connectString).then((result) => {
    console.log("success")
}).catch((err) => {
    console.log("error",err)
});

//dev 

if( 1 === 0) {
    mongoose.set('debug', true);
    mongoose.set('debug', {color: true});
}

module.exports = mongoose