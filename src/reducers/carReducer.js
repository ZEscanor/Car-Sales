//import { act } from "react-dom/test-utils"

const initialState = {
    additionalPrice: 0,
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ],
    
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
          'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
      },
}
/// my state has 3 properties 
//additional price
//car
//additional features
export const carReducer = (state=initialState,action) => {
    switch(action.type){
        case "ADD_MEMBER":
            console.log("this is my reducer state",state)
            console.log("this is my action", action)
            console.log(state.car.features.price)
            console.log(state.additionalPrice, state.features)
            return{
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car:{ ...state.car,
                 features: [...state.car.features, action.payload]
                } //state.car.features.push(action.payload)
            }; 

            case "REMOVE_MEMBER":
            const newFeat = state.car.features.filter((featu)=>featu.id !== action.payload.id);
            return{
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car:{...state.car,
                 features: newFeat,
                }
            }; 
            
     default:
         return state;
    }
}