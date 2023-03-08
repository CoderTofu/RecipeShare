const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    info: {
        required: true,
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create a model and export it
module.exports = mongoose.model("Data", dataSchema);