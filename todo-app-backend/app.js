const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');

const app = express();
mongoose.connect('mongodb://localhost:27017/todoDB');

// const express = require('express');
// const cors = require('cors');
// const app = express();

// Enable CORS
// app.use(cors());

// Your existing backend routes and logic

app.use(cors());
app.use(bodyParser.json());
app.use('/api', taskRoutes);

module.exports = app;
// Compare this snippet from routes/tasks.js:
// const express = require('express');