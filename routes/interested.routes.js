const express = require('express');
const router = express.Router();
const interestedService = require('../service/interested.service');

// POST interested form
router.post('/', (req, res) => {
    const formData = req.body;
    interestedService.addInterestedPerson(formData, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error submitting form' });
        }
        res.status(201).json({ message: 'Form submitted successfully', results });
    });
});

module.exports = router;
