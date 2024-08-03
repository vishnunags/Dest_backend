const express = require('express');
const router = express.Router();
const destinationService = require('../service/destination.service');

// GET all destinations
router.get('/', (req, res) => {
    destinationService.getAllDestinations((err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching destinations' });
        }
        res.json(results);
    });
});

// POST a new destination
router.post('/', (req, res) => {
    const newDestination = req.body;
    destinationService.addDestination(newDestination, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error adding destination' });
        }
        res.status(201).json({ message: 'Destination added successfully', results });
    });
});

module.exports = router;
