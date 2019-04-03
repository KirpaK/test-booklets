import { createBrowserHistory } from "history";
import configureStore from "./configureStore";

export const history = createBrowserHistory({ basename: "/" });

const modules = {
  
};

const initialState = window.initialReduxState;
export const store = configureStore(history, initialState, modules);
