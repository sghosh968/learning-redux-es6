import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;

/*


Learnings:
- combineReducers is called initially on page reload to initialize all reducers
here above courses is invoked which calls courseReducer function with state as undefined and action passed in as {type: "@@redux/INIT"}
as a result state in initially assigned as [] (empty array).


*/
