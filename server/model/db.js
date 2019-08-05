const mongoose = require('mongoose');

// database connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/premierGames',{useNewUrlParser: true});
mongoose.connection.on('connected', ()=> console.log('Connected to Database... '));
mongoose.connection.on('error', (err)=>console.log('Database connections Error: '+err));
mongoose.connection.on('disconnected',()=>console.log('Connection to Database Disconnected!'));
process.on('SIGINT', ()=> mongoose.connection.close(()=>{
    console.log('Mongoose disconnected through App Termination');
    process.exit(0);
}));

const tableSchema = new mongoose.Schema({
    number: {type: Number, max: 16},
    team: {type: String},
    gamePlayed: {type: Number, max: 30},
    goalDifference: {type: String},
    gamePoints: {type:Number },
    date: {type: Date, default: Date()}

});
const table = mongoose.model('table', tableSchema);
module.exports = table;