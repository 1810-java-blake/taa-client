import { schinookTypes } from "../Actions/Schinook.actions";

const initialState = {
  taaList: [{trackName:'Calvin', albumName:'Malcin', artistName:'Calvin and the Salmon'}]
}

export const schinookReducer = (state = initialState, action) => {
  switch (action.type) {
    case schinookTypes.EXAMPLE:
      return {
        ...state,
        taaList: action.payload.taaList
      }
    default:
      break;
  }

  return state;
}