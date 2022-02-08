import { combineReducers } from 'redux';
import users from './users.js';

const rootReducer = combineReducers({
    users: users,
});

export default rootReducer;