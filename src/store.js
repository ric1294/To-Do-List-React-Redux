import { createStore , combineReducers ,applyMiddleware} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { todos , isLoading } from './todo/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension'
console.log("store")
const reducers = {
    todos,
    isLoading
};

const persistConfig = {
    key : 'root',
    storage,
    stateReconciler : autoMergeLevel2
}
const rootReducers = combineReducers(reducers)
const persistReducers = persistReducer(persistConfig , rootReducers)

export const configureStore = () => 
    createStore(
        persistReducers,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );