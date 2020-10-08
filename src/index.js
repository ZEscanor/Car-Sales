import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {carReducer} from "./reducers/carReducer";
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carReducer);
console.log(store.getState());
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
    <App /></Provider>, rootElement);


/* Order of operations 
import createStore from redux
make our store as a const
make our reducer to pass into the store.
make sure our reducer has an initial state passed in
import our reducer and use it in our store
import provider from react-redux to wrap around our app */