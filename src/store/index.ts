import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default () => {
    const store = createStore(
        combineReducers({
            form: formReducer
        })
    );
    return store;
}