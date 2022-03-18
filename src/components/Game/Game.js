
import React, { Component } from 'react';

class Game extends Component 
{
    constructor()
    {
        super()
        this.state =
        {
            number: 0,
            message: "",
            random: 0
        }
    }



    render() {
        return (
            <div className ="Game">
                <input
                    type="Number"
                />
                <button>Probar</button>
                <p>Texto</p>
            </div>
        );
    }
}


export default Game;

function generateRandomNumber(max,min=1)
{
    return Math.floor(Math.random()*(max-min) + min);
}