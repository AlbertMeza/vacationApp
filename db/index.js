const mongoose = require('mongoose');
require('dotenv').config(); //configures environment variables to this JS file

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connected"))
    .catch(e => console.error("Database not connected ", e));

const db = mongoose.connection;
module.exports = db;