const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 4000; // Use the provided port or default to 5000

// Middleware to parse JSON requests
app.use(express.json());

// API endpoint
app.get('/execute', async (req, res) => {
    try {
        // Redirect to the specified API URL
        const response = await axios.get('http://sso.services:3000/health-check');
        res.json(response.data);
    } catch (error) {
        // If there's an error in redirection or the health-check API is unavailable
        res.status(500).json({ error: 'Failed to execute request' });
    }
});

app.get('/health-check', async (req, res) => {
    res.status(200).json({ msg: 'success to execute request' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
