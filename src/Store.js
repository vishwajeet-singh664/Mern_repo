import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {productDetailsReducer,productsReducer,
  newProductReducer,productReducer,
} from './reducers/ProductReducer'
import { composeWithDevTools } from '@redux-devtools/extension';

const reducer=combineReducers({
    products: productsReducer,
    productDetails:productDetailsReducer,
    newProduct: newProductReducer,
    product: productReducer


})


let initialState={};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;