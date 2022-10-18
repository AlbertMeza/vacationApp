const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { DestinationRoutes } = require("./routes")
const db = require('./db')

app.use('/api', DestinationRoutes);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));


