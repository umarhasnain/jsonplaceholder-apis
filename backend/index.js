// Express import
import express from 'express';

// Routes import
import router from './routes/routes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});

//Using Route
app.use('/', router);

// Port setup
// const PORT = process.env.PORT || 8080;
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
