const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    brandId : {
        type: String
    },
    brandTitle: {
        type: String
    },
    brandURL: {
        type: String
    },
    brandType: {
        type: Array,
        default: []
    },
    brandImage: {
        type: Array,
        default: []
    }

}, { timestamps: true })


const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }