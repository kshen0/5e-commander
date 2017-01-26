// combines all the redux reducers into a single store.
// Currently we only have one reducer, but could support more

import { combineReducers } from 'redux';


import combatants from './combatants';

export default combineReducers({
  combatants,
});
