const table = require('./model/db');
module.exports = app => {
    app.get('/api/games', (req, res)=>{
        table.find({})
        .then(data => {
            if(data) {console.log(data)}
            else {console.log('no data found')}
            res.send(data);
        } )
        .catch(err => console.log(err.message));
    });
    app.post('/api/games', (req, res)=>{
        const {number,team, gamePlayed, goalDifference, gamePoints} = req.body;
        const newTable = new table({number, team, gamePlayed, goalDifference, gamePoints});
        newTable.save()
        .then((data) => res.send(data))
        .catch(err => res.status(404).send(err.message));
    });
    /*
    app.get('/api/games/:id', (req, res)=>{
        table.findById(req.params.id)
        .then(data => res.send(data))
        .catch(err => console.log(err.message));
    });
    app.delete('/api/games/:id', (req, res)=>{
        table.findByIdAndDelete(req.params.id)
        .then(() => res.send('table deleted'))
        .then(err => res.status(404).json('Error: '+err.message))
    });
    app.post('/api/games/:id', (req, res)=>{
        table.findById(req.params.id)
        .then(data => {
            data.number = req.body.number;
            data.team = req.body.team;
            data.gamePlayed = req.body.gamePlayed;
            data.goalDifference = req.body.goalDifference;
            data.gamePoints = req.body.gamePoints;

            // saved updated data
            data.save()
            .then(data =>  res.send(data))
            .catch(err => res.status(404).json('Error: '+err.message))
        })
        .catch(err => res.status(404).json('Error: '+err.message));
    });
    */
}