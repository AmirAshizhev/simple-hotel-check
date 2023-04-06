import { legacy_createStore as createStore, combineReducers} from 'redux';
import { authReduser } from './authReduser';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReduser = combineReducers({
  auth: authReduser
})

export const store = createStore(rootReduser, composeWithDevTools())
