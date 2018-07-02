const path    = require('path');
const Matches = require('../controllers/matches.js');

module.exports = function(app){
    app
    .get('/list', (req, res) => {
        Matches.dashboard(req, res)
    })
    .post('/new', (req, res) => {
        Matches.new(req, res)
    })
    .put('/matches', (req, res) => {
        Matches.load(req, res)})
    .all("*", (req, res) => { 
        res.sendFile(path.resolve('../worldcup/public/dist/index.html'))
    })
}
