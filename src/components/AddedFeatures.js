import React from 'react';
//import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';
//import AdditionalFeature from './AdditionalFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} remFeature = {props.remFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};


export default AddedFeatures;
//connect(mapStatetoProps,{addFeature})(App)