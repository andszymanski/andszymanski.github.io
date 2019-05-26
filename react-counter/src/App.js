import React , {Component} from 'react';

import './App.css';

import Counter from  "./Counter";
import Heading from "./Heading";
import SetValuePanel from "./SetValuePanel";


class App extends Component {
render(){
  return (
  <div className ="App">



      <Heading headingText="Aplikacja counter"/>
      
      <Counter initValue={55}/>

      <Heading headingText="Aplikacja counter2"/>
      <Counter initValue={457}/>
      
    
    </div>
  );
}
}
export default App;
