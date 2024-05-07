// reducers.js

// Import any necessary action types
import { ActionTypes } from "./actionTypes";

// Define an initial state for the reducer
const initialState = {
  // Define initial state properties here
  cars: [],
  loggedIn: false,
  // Add more initial state properties as needed
};

// Define your reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    case ActionTypes.REMOVE_CAR:
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    case ActionTypes.LOGIN:
      return {
        ...state,
        loggedIn: true,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
