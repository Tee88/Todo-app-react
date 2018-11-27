import { tasks, newTodoTitle } from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    newTodoTitle,
    tasks
});

export default rootReducer;