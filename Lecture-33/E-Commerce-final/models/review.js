const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    comment: {
        type: String,
        trim: true
    },
    user: {
        type: String,
        trim:true
    }
});



const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;