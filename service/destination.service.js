const destinationDao = require('../dao/destination.dao');

exports.getAllDestinations = (callback) => {
    destinationDao.getAllDestinations((err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

exports.addDestination = (destination, callback) => {
    destinationDao.addDestination(destination, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
