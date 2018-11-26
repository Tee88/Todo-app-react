import { tasks, todoTitle } from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todoTitle,
    tasks
});

export default rootReducer;