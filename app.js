require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const app = express();
const destinationRoutes = require('./routes/destination.routes');
const interestedRoutes = require('./routes/interested.routes');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Use cors middleware

// Routes
app.use('/api/destinations', destinationRoutes);
app.use('/api/interested', interestedRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
