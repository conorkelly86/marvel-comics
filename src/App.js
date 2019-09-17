import React from 'react';
import './App.css';
//import { comics } from './data.js';
//import { mcu } from './mcu.js';
//import List from './List';
//import Toggle from './Toggle';
import Heroes from './Heroes'
import herolist from './herolist'

/*class App extends Component {
  clicked(){
   
  }
  render() {
    const metaData = comics.data.results[0];
    const {thumbnail, issueNumber, pageCount, dates, prices} = metaData;
    return (
      <div>
        
    {/*<List result={comics.data.results}/>  
     <List result={comics.data.results}/>}
      <p onClick={this.clicked}> {mcu.images[0].path}{mcu.images[0].extension}</p>
      <img className="comic-thumbnail" src={`${mcu.images[0].path}.${mcu.images[0].extension}`} />
      <Toggle />
      </div>
      
    );
    
  }
}*/
function App() {
  const HeroComponents = herolist.map(herolist => <Heroes key = {herolist.id} name={herolist.name} films = {herolist.films} description={herolist.description}/>)
return (
  <div>
     <h1>{HeroComponents} </h1>
  </div>
)
}


export default App;
