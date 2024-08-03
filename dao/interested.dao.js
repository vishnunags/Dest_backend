const db = require('../config/db.config');

exports.addInterestedPerson = (interestedPerson, callback) => {
    const { name, phone, email } = interestedPerson;
    db.query('INSERT INTO interested_people (name, phone, email) VALUES (?, ?, ?)', [name, phone, email], (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
