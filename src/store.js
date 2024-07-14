import { searchResultDateReducers } from "./reducers";
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducers=combineReducers({
    searchResult:searchResultDateReducers
})

const persistConfig = {
    key: 'root',
    storage,
  
    // blacklist: ['someReducer']
    // whitelist: ['someReducer']
  };
  const persistedReducer = persistReducer(persistConfig,rootReducers);
  
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  
  export { store, persistor };