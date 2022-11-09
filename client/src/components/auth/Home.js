import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {

    constructor() {
      super();
      this.state = {
        games:[] 
      }
      };
    
      render() {
        console.log(this.state.games);
        return (
          <div>
            <h1>Welcome to
            </h1>
            <section>
                {this.state.games.map(game => {
                    return <div>
                        <p>{game.title}</p>
                        <img src={game.thumbnail}/>
                        
                    </div>
                }) }
            </section>
          </div>
        );
      }
      componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '43499835a3msh1d6a8bea1f405cbp135786jsn74eb29afc64c',
                'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
            }
        };
        
        fetch('https://gamerpower.p.rapidapi.com/api/filter?platform=epic-games-store.steam.android&type=game.loot', options)
            .then(response => response.json())
            .then(response => this.setState({games:response}))
            .catch(err => console.error(err));
      }
    }

export default Home;