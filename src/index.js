import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state ={feeling: '', understanding: '', support: '', comments:''}, action) => {
    if(action.type === 'SET_FEELING'){
        console.log(state);
        return {...state, feeling: action.payload};
    
    } 
    else if(action.type === 'SET_UNDERSTANDING') {
        console.log(state);
        return {...state, understanding: action.payload};
    }
    else if(action.type === 'SET_SUPPORT') {
        console.log (state);
        return {...state, support: action.payload};
    }
    else if(action.type === 'SET_COMMENT'){
        return{...state, comments: action.payload}
    }

return state;
}


const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger),
  );

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
