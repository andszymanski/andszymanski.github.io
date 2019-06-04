import React, { Component } from 'react';
import ButtonPanel from "./ButtonPanel";
import SetValuePanel from './SetValuePanel';
import Step from "./Step";


class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {

            counterValue: this.props.initValue


        }
    }

    changeValue = () => {
        this.setState((prevValue) => {
            return ({

                counterValue: prevValue.counterValue + 1
            });
        });

    }

    revertValue = () => {
        this.setState(() => {
            return ({
                counterValue: this.props.initValue
            });
        });
    }

    clearValue = () => {
        this.setState({ counterValue: 0 })
    }

    pushMore = () => {
        this.setState({ pushMore: + 5 })
    }

    setValue = (newValue) => {
        this.setState({ counterValue: newValue });
    }

    render() {
        console.log(this);
        {/*return (
        
           } <div className="counter">
                Licznik: {this.state.counterValue}
                <ButtonPanel changeCounterValue={this.changeValue}
                    clearCounter={this.clearValue}
                    revertValue={this.revertValue}
                    pushMore={this.pushMore}
                />
                <SetValuePanel setCounter={this.setValue} />
                <Step />
            </div>
      
        );  */}

        return (
            <Step />
        );
    }
}
export default Counter;
