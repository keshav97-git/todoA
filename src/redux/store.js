import { createStore } from "redux";
// import rootReducer from "./reducers";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

export default store;
