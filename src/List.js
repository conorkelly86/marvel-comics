import React, { Component } from 'react';
//import './list.css';
import ListItem from './ListItem';
class App extends Component {
render() {
    return (
        <div>
            { this.props.result.map((comic,index) => <ListItem comic={comic} key={index} />)}
       </div>
    )
};

}

export default App;