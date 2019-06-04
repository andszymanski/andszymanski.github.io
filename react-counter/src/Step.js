import React from 'react';


const NextPanel = (props) =>

{ console.log(props);
    
    return (<div class="counter">
        <p>Licznik: {props.counterValue}</p>
        <button>Add</button>
        <button>Reinit</button>
        <button onClick={props.clearValue}>Reset</button>
        <p>
            Krok: <input type="number" />
        </p>
    </div>
    );
}
export default NextPanel;



