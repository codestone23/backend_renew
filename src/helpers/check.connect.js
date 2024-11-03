
const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000

// count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(numConnection);
}

// check overload 
const checkOverLoad = () => {
    setInterval(() => {
        const numbConnections = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memory = process.memoryUsage().rss;

        const maxConnections = numCores * 5;

        if(numbConnections > maxConnections) {
            console.log(`Connection overload detected!`);
        }

    }, _SECONDS)
}


module.exports = {
    countConnect,
    checkOverLoad
}