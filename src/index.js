import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './todoApp';
import registerServiceWorker from './registerServiceWorker';
// import sampleData from './initialState'
import storeFactory from './store'
import { Provider } from 'react-redux'

const store = storeFactory()

ReactDOM.render(
    <Provider store = {store}>
        <TodoApp />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
