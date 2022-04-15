import { combineReducers, createStore} from 'redux';
import { listReducer } from '../Reducers';

const rootReducer = combineReducers({
  list: listReducer
})

export const store = createStore(
    rootReducer
);
