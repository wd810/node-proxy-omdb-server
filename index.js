const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

// rate limit
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mimutes
    max: 5
});
app.use(limiter);

app.set('trust proxy', 1);

// routes
app.use('/api', require('./routes'))

// enable cors
app.use(cors());

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
