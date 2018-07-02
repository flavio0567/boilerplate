var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
    
var MatchesSchema = new Schema({
    // group: String,
    // stadium: String,
    // city: String,
    teamHome: String,
    teamAway: String,
    scoreTeamHome: Number,
    scoreTeamAway: Number,
    teamHomeFlag: String,
    teamAwayFlag: String,
    date: String,
    time: String
}, { timestamps: true }, 
    { autoIndex: false }
);

// set model by passing his Schema
mongoose.model('Matches', MatchesSchema);

// stored model in variable
const Matches = mongoose.model('Matches');



