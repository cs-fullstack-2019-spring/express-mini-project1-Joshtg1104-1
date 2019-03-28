const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SuperSchema = new Schema(
    {
            id: Number,
            name: String,
            'powers.intelligence': Number,
            'powers.strength': Number,
            'powers.speed': Number,
            'powers.combat': Number,
            'powers.wealth': Number,
            image: String,
    }
);

module.exports = mongoose.model('superheroes', SuperSchema);
