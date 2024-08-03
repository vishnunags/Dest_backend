const interestedDao = require('../dao/interested.dao');

exports.addInterestedPerson = (interestedPerson, callback) => {
    interestedDao.addInterestedPerson(interestedPerson, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
};
