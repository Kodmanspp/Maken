import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import authReducer from "./authorization/reducers";
import dashReducer from "./dashboard/reducers";
import listsReducer from "./lists/reducers";
import registReducer from "./registration/reducers";
import userReducer from "./userData/reducers";


const rootReducer = combineReducers({
    authorization: authReducer, 
    registration: registReducer,
    user: userReducer, 
    dash: dashReducer,
    lists: listsReducer,
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
