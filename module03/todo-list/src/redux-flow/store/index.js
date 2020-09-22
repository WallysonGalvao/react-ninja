import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const logger = () =>
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (x) => x;

export default ({ initialState } = {}) => {
  const enhancer = compose(applyMiddleware(thunk), logger());
  return createStore(rootReducer, initialState, enhancer);
};
