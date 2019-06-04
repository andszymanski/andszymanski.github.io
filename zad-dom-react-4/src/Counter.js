import React from 'react';

import Step from './Step.js';
import { thisExpression } from '@babel/types';

class Counter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            initCounter: 15,
            currentCounter: 15,
            step: 1,
        }
    }

    addToCounter = () => {
        this.setState({
            currentCounter: this.state.currentCounter + this.state.step,
        })
    }
    
    addReInit = () => {
        this.setState({
            currentCounter: this.state.initCounter,
        })
    }

    addReset = () => {
        this.setState({
            currentCounter: 0,
        })

    }

    changeStep = (event) => {
        this.setState({
            step: parseInt(event.target.value),
        })
    }


    render(){
        return(
            <div>
                Licznik: {this.state.currentCounter}
                <p>
                    <button onClick={this.addToCounter}>Add {this.state.step}</button>
                    <button onClick={this.addReInit}>Re init</button>
                    <button onClick={this.addReset}>Reset</button>
                    <p>
                        Krok: <input type="number" value={this.state.step} onChange={this.changeStep} />
                    </p>
                </p>
            </div>
        );
    }
}

export default Counter;