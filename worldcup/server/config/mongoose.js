const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const db = require('../config/db');

mongoose.connect(db.url, {});
// mongoose.connect('mongodb://localhost/worldcup', {
    // useMongoClient: true, 
    // autoIndex: false
//   });

mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;

const models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    };
});