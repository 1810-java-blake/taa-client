import { exampleTypes } from "../Actions/Example.actions";

const initialState = {
  clicks: 25
}

export const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case exampleTypes.EXAMPLE:
      return {
        ...state,
        clicks: state.clicks + action.payload.clicks
      }
    default:
      break;
  }

  return state;
}