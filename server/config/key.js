if(process.env.NODE_ENV === 'production') {
    module.epxorts = require('./prod');
} else {
    module.exports = require('./dev');
}