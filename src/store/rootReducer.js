//tüm stateleri topladığın yer
import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer=combineReducers({
    cart:cartReducer
    //user:userReducer< tüm reducerlar eklenebilir.
})

export default rootReducer;
