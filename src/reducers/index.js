import { combineReducers } from "redux";
import { reducer1 } from "./reducer1";
// import { reducer2 } from "./reducer2";

const reducers = combineReducers({
      reducerProducts: reducer1
	//   reducerBasketAd: reducer2
})

export default reducers;