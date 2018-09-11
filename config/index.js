// Hold methods for fetching cfg values

    const configValues = require('./config.json');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://'+ configValues.uname + ':' + configValues.pword + '@ds151612.mlab.com:51612/nodetodomyiah';

    }


};