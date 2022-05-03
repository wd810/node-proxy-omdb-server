const express = require('express');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.set('trust proxy', 1);

// enable cors
app.use(cors());

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});