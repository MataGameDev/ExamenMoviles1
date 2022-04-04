import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    constructor() {
        super()
        this.state = {
            number: "",
            message: "",
            random: generateRandomNumber(100)
        }
    }
    handleOnChange = e => {
        const {target: {value}} = e;
        console.log(value);
        if(e.keyCode === 13) {
            e.preventDefault();
        }
        if(value.trim() > 0) {
            this.setState({
                number: value
            });
        }
         this.setState({
            message: "",
        });
    }
    handleOnClick = () => {
        const number = parseInt(this.state.number);
        console.log(number);
        const random = parseInt(this.state.random);
        const text = calculateText(number, random);
        console.log(random);
        if (number !== random){
            this.setState({
                number: "",
                message: text,
            });
        } else {
            this.setState({
                message: text,
            });
        }  
    }
    render() {
        return (
            <div className="Game">
                <p>Adivina el número que estoy pensando entre el 1 - 100</p>
                <input
                    type="number"
                    value = {this.state.number}
                    onChange = {this.handleOnChange}
                />
                <button onClick={this.handleOnClick}>Intentar Suerte</button>
                <h2 className={(this.state.message)&& 'flickering'}>{this.state.message}</h2>
            </div>
        );
    }
}
export default Game;
function generateRandomNumber(max, min=1) {
    return Math.floor(Math.random()*(max - min) + min);
}
function calculateText(number, random) {
    const soClose = 5;
    const diff = Math.abs(random - number);
    
    if (number === random) {
        return "Felicidades, lo has adivinado!!";
    }
    
    if (diff < soClose) {
        
        if (number < random) {
            return "Estás muy cerca!! tu número es un poco bajo."
        } else {
            return "Estás muy cerca!! tu número es un poco alto."
        }
    } else {
        if (number < random) {
            return "Tu número es muy bajo!"
        } else {
            return "Tu número es muy alto!"
        }
    }
}
