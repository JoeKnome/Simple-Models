// require mongoose
var mongoose = require('mongoose');

// variable to hold our model
var DogModel;

// define db data structure
var DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    
	breed: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
	
    age: {
        type: Number,
        min: 0,
        required: true
    },
    
    createdData: {
        type: Date,
        default: Date.now
    }

});

// prints name value of object
DogSchema.methods.sayName = function() {
    console.log(this.name);
};

// find dog by name
DogSchema.statics.findByName = function(name, callback) {

    var search = {
        name: name
    };

    return DogModel.findOne(search, callback);
};

// create the dog model based on the schema
DogModel = mongoose.model('Dog', DogSchema);

// export public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;