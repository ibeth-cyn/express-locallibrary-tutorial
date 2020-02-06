var mongoose = require('mongoose')

var Schema = mongoose.Schema

var GenreSchema = new Schema(
    {
        name: {type: String, required: true, min: 3, max: 100}
    }
)

//Virtual for genre model
GenreSchema
.virtual('url')
.get(function(){
    return '/catalog/genre/' + this._id;
});

GenreSchema
.virtual('genre_name')
.get(function () {
    var genre_name = this.name;
    return genre_name;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema)
