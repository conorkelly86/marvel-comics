import React, { Component } from 'react';
import './App.css';
import { comics } from './data.js';
import { mcu } from './mcu.js';
import List from './List';

class App extends Component {
  clicked(){
   "hello"
  }
  render() {
    const metaData = comics.data.results[0];
    const {thumbnail, issueNumber, pageCount, dates, prices} = metaData;
    return (
      <div>
        
    {/*<List result={comics.data.results}/>  
     <List result={comics.data.results}/>*/}
      <p onClick={this.clicked}> {mcu.images[0].path}{mcu.images[0].extension}</p>
      <img className="comic-thumbnail" src={`${mcu.images[0].path}.${mcu.images[0].extension}`} />

      </div>
    );
    
  }
}


export default App;
