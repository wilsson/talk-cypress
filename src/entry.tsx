import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { routes } from './config/route';
import configureStore from './store';

const store = configureStore();

ReactDOM.render( 
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    </Provider>, document.getElementById('root'));