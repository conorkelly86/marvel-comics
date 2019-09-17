import React, { Component } from 'react'
import { mcu } from './mcu';

export default class Toggle extends Component {
    state = {
        on: false,
    }
    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render() {
        return (
            <div>
                <img onClick={this.toggle} className="comic-thumbnail" src={`${mcu.images[0].path}.${mcu.images[0].extension}`} />
                {this.state.on && <h1>{mcu.film}</h1>}
            </div>
        );
    }
}
