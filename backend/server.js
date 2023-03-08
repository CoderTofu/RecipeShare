require("dotenv").config();

// Call our dependencies
const express = require("express");
const mongoose = require("mongoose");

// Initiate routes
const routes = require("./routes/routes");

// Initiate app and some dependencies
const app = express();
app.use(express.json());
app.use("/api", routes);

// Connect to mongoDB
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

// Check if databse connection is established
database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})

// Start up server
app.listen(process.env.PORT, () => {
    console.log(`Server was started on port ${process.env.PORT}`);
});

