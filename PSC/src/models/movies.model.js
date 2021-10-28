
const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    actors: { type: String, required: true },
    description: { type: String, required: true },
    plot: { type: String, required: false },
    availableFor: { type: String, required: true }
})

module.exports = mongoose.model("Movie", moviesSchema);
