import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import authReducer from "./authorization/reducers";
import registReducer from "./registration/reducers";


const rootReducer = combineReducers({
    authorization: authReducer, 
    registration: registReducer, 
    
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
