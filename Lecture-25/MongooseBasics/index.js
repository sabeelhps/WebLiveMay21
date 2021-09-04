const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => console.log("CONNECTION OPEN!!"))
    .catch((err) => {
        console.log("DB Not Connected");
        console.log(err);
    });


// Defining a schema

const movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    score: Number,
    isWatched: Boolean
});



const Movie = mongoose.model('Movie', movieSchema);

// const ironman = new Movie({ name: "Ironman", year: 2010, score: 7, isWatched: true });
// const superman = new Movie({ name: "Superman", year: 2015, score: 8, isWatched: false });
const sholay = new Movie({ name: "Sholay", year: 1970, score: 9, isWatched: true });


// Saving a movie(sholay into a database i.e into a collection called movies (represented by 'Movie' model that we have created))
sholay.save()
    .then((m) => {
        console.log(m);
    })
    .catch((err) => {
        console.log(err);
    });



