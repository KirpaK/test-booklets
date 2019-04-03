import { createBrowserHistory } from "history";
import configureStore from "./configureStore";
import animals from "./modules/animals";

export const history = createBrowserHistory({ basename: "/" });

const modules = {
  animals
};

const initialState = window.initialReduxState;
export const store = configureStore(history, initialState, modules);
