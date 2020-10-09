import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';

import {connect} from "react-redux"; //a bridgepiece
import {addFeature} from "./actions/carActions.js";
import {remFeature} from "./actions/carActions.js";
import Total from './components/Total';

const App = (props) => {
  console.log(props.addFeature)
  // const state = {
  //   additionalPrice: 0,
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} remFeature = {props.remFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature= {props.addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
    
  );
  
};
const mapStatetoProps = (state)=>{
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
   // addedFeaturez: state.car.features
  };
  
}
export default connect(mapStatetoProps,{addFeature, remFeature})(App);

// returns a function then immediately return it.
// first invocation takes in a function and objects
// when redux calls in function it will pass in entire state from the store.
//return object will be added to the props of the connected component.