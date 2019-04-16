import { combineReducers, Store } from 'redux';
import initialReducers from './initial-reducers';
import { AsyncReducers, RouteModuleInfo } from '../routes/types';

// @see: https://medium.com/front-end-hacking/code-splitting-redux-reducers-4073db30c72e
// @see: http://nicolasgallagher.com/redux-modules-and-code-splitting/
// @see: https://redux.js.org/recipes/usage-with-typescript

export function appendReducerServer(store: Store, newModuleInfo: RouteModuleInfo) {
  store.replaceReducer(
    combineReducers({
      ...initialReducers,
      [newModuleInfo.routeName]: newModuleInfo.reducer
    })
  );
}

const asyncReducers: Partial<AsyncReducers> = {};
export function appendReducerBrowser(store: Store, newModuleInfo: RouteModuleInfo) {
  asyncReducers[newModuleInfo.routeName] = newModuleInfo.reducer;

  store.replaceReducer(
    combineReducers({
      ...initialReducers,
      ...asyncReducers
    })
  );
}
