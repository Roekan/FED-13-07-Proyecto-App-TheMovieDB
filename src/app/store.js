
import { configureStore } from '@reduxjs/toolkit';
import sliceFavorites from '../reducers/sliceFavorites';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

// Persistencia de superestado en local Storage
const persistConfig = {
    key: 'root',
    storage,
    }

//Combinacion de reducers provenientes de las Slices en un solo objeto
const reducers = combineReducers({
    favorites: sliceFavorites,
});

//Pasamos el reducers a la funcion que nos crea la persistencia de los datos
const persistedReducer = persistReducer(persistConfig, reducers);


//creamos la store con nuestra configuracion ya aplicada y middleware thunk
export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});