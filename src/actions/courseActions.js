import * as types from './actionTypes';
// this is an action creator which just creates and return an action
export function createCourse(course) {
  return (
    {type: types.CREATE_COURSE, course}
  );
}
