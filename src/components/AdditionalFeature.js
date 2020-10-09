import React from 'react';
//import { addFeature } from '../actions/carActions';

const AdditionalFeature = props => {
  console.log(props,"gi",props.feature)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=> props.addFeature(props.feature)} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
