import {configureStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import {composeWithDevtools} from "redux-devtools-extension";


const reducer = combineReducers({
    cart: cartReducer,
});

let initialState = {
    cart:{
        cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        :[],
    },
};
const Middleware = [thunk];

const store = configureStore(
    reducer,
    initialState,
    composeWithDevtools(applyMiddleware(...Middleware))
);
export default store;