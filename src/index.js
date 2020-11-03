import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore} from './store'


const config = configureStore()
const persistConfig = persistStore(config)
console.log("index")
ReactDom.render(
    <Provider store={config}>
        <PersistGate loading={<div>Loading.......</div>}
            persistor = {persistConfig}>
            <App/> 
        </PersistGate>
    </Provider>,
     
     document.getElementById('root')
     );