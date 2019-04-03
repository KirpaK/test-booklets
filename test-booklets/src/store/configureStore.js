import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension"; 

export default function configureStore(history, initialState, modules) {
  const middleware = [thunk, routerMiddleware(history)];
  const rootReducer = combineReducers({
    ...modules,
    routing: routerReducer
  }); 
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
}
