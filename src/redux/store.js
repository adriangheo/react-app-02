import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cart";
import { userReducer } from "./reducers/user";

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
})

const store = createStore(rootReducer);

console.log(store);

export default store;