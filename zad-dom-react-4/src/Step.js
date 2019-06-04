import React from 'react';

class Step extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stepValue: this.props.startValue,
        }
    }

    render(){
        return(
            <div>
                Krok: <input type="number" value={this.state.stepValue} />
            </div>
        );
    }
}

export default Step;