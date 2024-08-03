const db = require('../config/db.config');

exports.getAllDestinations = (callback) => {
    db.query('SELECT * FROM destinations', (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};

exports.addDestination = (destination, callback) => {
    const { name, image } = destination;
    db.query('INSERT INTO destinations (name, image) VALUES (?, ?)', [name, image], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
