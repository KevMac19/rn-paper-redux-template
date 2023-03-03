import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';

import {AuthReducer} from './AuthReducer';
import {LanguageReducer} from './AppLanguageReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  authReducer: AuthReducer,
  languageReducer: LanguageReducer,
});

const rootReducer = (state, action) => {
  // INFO: clear all data in redux store to initial.
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

let persistedReducer = persistReducer(persistConfig, rootReducer);
let store = configureStore({
  reducer: persistedReducer,
  devTools: true, // NOTE: only for development environment
  middleware: [thunk],
});

let persistor = persistStore(store);

export {store, persistor};
