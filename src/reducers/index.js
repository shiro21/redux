import { combineReducers } from "redux";
import { counter } from "./counter";
import { auth } from "./auth";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: "root",
    storage: storage
}

const rootReducer = combineReducers({
    auth,
    counter,
})

export default persistReducer(persistConfig, rootReducer);