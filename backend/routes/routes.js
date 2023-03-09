const express = require("express");

const cors = require('cors'); //  use CORS to enable cross origin domain requests.

const router = express.Router();

// Get our data schema model
const Model = require("../models/model");

// Post to db
router.post("/post", cors(), async (req, res) => {
    const data = new Model({
        title: req.body.title,
        info: req.body.info
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

// Get all recipes
router.get('/getAll', cors(), async (req, res) => {
    try {
        const data = await Model.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

// Set up product pages by id
router.get("/pages/:id", cors(), async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

// Get by name
router.get("/searchByName", cors(), async (req, res) => {
    try {
        const { title } = req.query;

        // Use Mongoose to search for names that match the query
        const searchResults = await Model.find({ title: { $regex: title, $options: 'i' } });

        res.json(searchResults);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

// Delete feature for future update
router.delete("/delete/:id", cors(), async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.status(200).send({message: `Data with ${data.name} has been deleted.`});
    } catch (error) { 
        res.status(400).send({message: error.message});
    }
})

module.exports = router


// Guide: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/