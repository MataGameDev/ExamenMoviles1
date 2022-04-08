import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
    constructor() {
        super()
        this.state = {
            number: "",
            message: "",
            random: generateRandomNumber(100),
            contador: 0,
            item: [
                { num: "Tu lista de Intentos"},
            ]
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
        const random = parseInt(this.state.random);
        let Contador = parseInt(this.state.contador);
        const text = calculateText(number, random,Contador);
        console.log(random);
        Contador++;
        if (number !== random){
            this.setState({
                number: "",
                message: text,
            });
        } 
        else {
            this.setState({
                message: text,
            });
        }
        this.setState({
            contador: Contador,
            item: [
                ...this.state.item,
                {
                    num: number
                }
            ]
        });
    }
    render() {
        return (
            <div className="Game">

                <p>Adivina el número  entre el 1 - 100</p>
                <input
                    type="number"
                    value = {this.state.number}
                    onChange = {this.handleOnChange}
                />
                <button onClick={this.handleOnClick}>Probar</button>
                <h2 className={(this.state.message) && 'flickering'}>{this.state.message}</h2>
  
               <ul>
                {
                   this.state.item.map((items,index )=>
                   <li key={index}>{items.num}</li>
                   )
                }
               </ul>
            </div>
        );
    }
}

export default Game;

function generateRandomNumber(max, min=1) {
    return Math.floor(Math.random()*(max - min) + min);
}

function calculateText(number, random, contador) {
    const soClose = 5;
    const diff = Math.abs(random - number);
    
    if (number === random) {
        return "Felicidades!!! adivinaste el numero despues de " + contador +" intentos. ";
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
    