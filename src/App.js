import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {games: [],newDate:'', number:'',team:'',gamePlayed:'',goalDifference:'', gamePoints:''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:4000/api/games')
    .then(data => data.json())
    .then(games => this.setState({games}))
    .catch(err => console.log(err));  
  }  


  handleSubmit(event){
    event.preventDefault();
    const {number,team,gamePlayed,goalDifference, gamePoints} = this.state;
    axios.post('http://localhost:4000/api/games',{number,team,gamePlayed,goalDifference, gamePoints})
    .then(res => console.log(res.data))
    .catch(err => console.log(err.message))
    window.location ='/';
  }
    onChange(e){
      this.setState({[e.target.name]:e.target.value});
    }
    
    
    render(){
      const {number,team,gamePlayed,goalDifference, gamePoints} = this.state;
    return(
      <div className="container">
        <div style={{ background: "darkblue", width: "100%", color:'white', textAlign:'center'}}>Premier Soccer League 2019/20  </div>
        <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Team</th>
            <th scope="col">PL</th>
            <th scope="col">GD</th>
            <th scope="col">Pt</th>
          </tr>
        </thead>
        {this.state.games.map(game =>
          <tbody key={game._id}>
          <tr>
            <th scope="row">{game.number}</th>
            <td>{game.team}</td>
            <td>{game.gamePlayed}</td>
            <td>{game.goalDifference}</td>
            <td>{game.gamePoints}</td>
          </tr>
        </tbody>
          )}
        </table> 
        LastUpdate {Date()}
        <p></p>
          <form onSubmit={this.handleSubmit}>
            <label>#: <input type="number" name="number" value={number} onChange={this.onChange} placeholder="#"/></label>
            <label>Team: <input type="text" name="team" value={team} onChange={this.onChange} placeholder="Team"/></label>
            <label>PL: <input type="number" name="gamePlayed" value={gamePlayed} onChange={this.onChange} placeholder="PL"/></label>
            <label>GD: <input type="text" name="goalDifference" value={goalDifference} onChange={this.onChange} placeholder="GD"/></label>
            <label>Pt: <input type="number"name="gamePoints" value={gamePoints} onChange={this.onChange} placeholder="Pt"/></label>
            <input type="submit" value="Add" />
          </form>
      </div>
    );
  }
}
export default App;