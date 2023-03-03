import { USER_ACTION_TYPES} from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      // Because everything in React is based of changes in memory we can return the same State. The key takeaway here
      // is that this is how we tell react that this switch action does not effect this reducer and so therfore do not
      // re-render since we do not care for actions not associated.
      return state
  }
}
