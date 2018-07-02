const mongoose  = require('mongoose'),
      Matches   = mongoose.model('Matches'),
      csv       = require("fast-csv"),
      path      = require("path"),
      fs        = require("fs");

module.exports = { 

    dashboard: (req, res) => {
        Matches.find({}).sort({ date: 1, time:1 })
            .then(matches => res.json(matches))
            .catch(error => console.log(error));
    },

    new: (req, res) => {
        var   matche = {},
              count = 1;

        csv
        .fromPath("worldcup.csv")
        .on("data", function(data){
            // matche.date = new Date(data[0]);
            matche.date = data[0];
            matche.time = data[1];
            // matche.group = data[1];
            // matche.stadium = data[2];
            // matche.city = data[3];
            matche.teamHome = data[2];
            matche.teamAway = data[3];
 
            matche.teamHomeFlag = data[4];
            matche.teamAwayFlag = data[5];
            
            if (data[6].substr(1,1) === '-') {
                matche.scoreTeamHome = data[6].substr(0,1);
                matche.scoreTeamAway = data[6].substr(2,1);
            } else {
                matche.scoreTeamHome = '';
                matche.scoreTeamAway = '';
            }

            if (matche.date != 'Date') { 
                createMatche(matche);
            } else { 
                console.log('header:', matche); 
            }

        })
        .on("end", function(){
            console.log("done");
        });

        return console.log('Loading....OK');

        function createMatche(matche) {
            // var newMatches = new Matches({group: matche.group,
            var newMatches = new Matches({
                                        stadium: matche.stadium,
                                        city: matche.city,
                                        teamHome: matche.teamHome,
                                        teamAway: matche.teamAway,
                                        teamHomeFlag: matche.teamHomeFlag,
                                        teamAwayFlag: matche.teamAwayFlag,
                                        scoreTeamHome: matche.scoreTeamHome,
                                        scoreTeamAway: matche.scoreTeamAway,
                                        date: matche.date,
                                        time: matche.time
                                        });
            console.log("newMatches:", newMatches);
            
            newMatches.save(function(err, result){
                if(err) {
                    console.log('Something went wrong when saving');
                    res.json(err);
                } else {
                    console.log('successfully saving', count);
                    count++;
                }
            })
            matche = '';
        }
    },

    remove: (req, res) => {
        var count = 1;
        Matches.remove(function(err){
            if(err) {
                console.log('Something went wrong when removing');
                res.json(err);
            } else {
                console.log('successfully removing', count);
                count++;
            }
        })
    },

    load: (req, res) => {
    var   matche = {};
        console.log('entreu aqui');
    }
    
}
