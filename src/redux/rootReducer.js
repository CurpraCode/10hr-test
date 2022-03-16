import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import {fetchProfileReducer} from "redux/reducers/reducer"
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
    key: "root",
    storage: storageSession,
    // whitelist: ["auth", "verify"],
    // timeout: null,
};

const rootReducer = combineReducers({
    fetchProfile: fetchProfileReducer
})

export default persistReducer(persistConfig, rootReducer);