var schedule = require('node-schedule');
const Matches = require('../controllers/matches.js');

var j = schedule.scheduleJob('*/15 * * * *', function(fireDate){
    // Matches.remove();
    // Matches.new(); 
    console.log("Job stopped");
    // console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
});

