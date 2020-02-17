
//Initial State Setup
const initialState = {
  products: [],
};

//Action Types Declared
const GET_PRODUCTS = "GET_PRODUCTS";

//Action Creators
//action creators return action objects
export function getProducts() {
  let newProducts = [{test: 1}, {test: 2}, {test: 3}]
  //make an action object
  //action objects have a type, and may have a payload
  let action = {
      type: GET_PRODUCTS,
      payload: newProducts
  }
  return action
}

export default function productsReducer(state = initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return {...state, products: action.payload};
            // return Object.assign({}, state, {user:action.payload})
        default: 
            return state;
    }
}