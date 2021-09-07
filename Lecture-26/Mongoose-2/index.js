const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log("Connection Open");
    })
    .catch((err) => {
        console.log("Connection Failed");
        console.log(err);
    });



const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'Anonymous',
        unique: true,
        trim:true
    },
    year: {
        type: Number,
        min: 2000,
    },
    score: {
        type: Number,
        required:true
    },
    isWatched: {
        type: Boolean,
        required:true
    }
});

const Movie = mongoose.model('Movie', movieSchema);


const starwar = new Movie({ name: 'Starwar', year: 1990, score: 7, isWatched: false });

starwar.save()
    .then((m) => {
        console.log(m);
    })
    .catch((err) => {
        console.log('something went wrong');
        console.log(err.message);
    })



// const movies = [
//     { name: 'Starwar', year: 2012, score: 7, isWatched: false },
//     { name: 'Spiderman', year: 2008, score: 9, isWatched: true },
//     { name: 'Ironman', year: 2010, score: 6, isWatched: false },
//     { name: 'Martian', year: 2015, score: 8, isWatched: true },
//     { name: 'Fast and Furious', year: 2005, score: 8.5, isWatched: true },
// ];

// Movie.insertMany(movies)
//     .then((m) => {
//         console.log(m);
//     });

