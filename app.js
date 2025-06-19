const express = require('express');
const cors = require('cors');

// ✅ Fix DB connection path
require('./config/db'); 

const userRouter = require('./routes/user.route');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/users', userRouter);

// ✅ Route setup
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// ✅ 404 Not Found
app.use((req, res, next) => {
    res.status(404).json({
        message: 'route not found'
    });
});

// ✅ Server Error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'something broke'
    });
});

// ✅ Fix export
module.exports = app;
