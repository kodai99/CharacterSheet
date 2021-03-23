import * as Actions from "./actions";
import { initialState } from "../store/initialState";

export const charactersReducer = (state = initialState.characters, action) => {
  switch (action.type) {
    case Actions.DISPLAY_CHARACTERS:
      return {
        characterList: [
          ...action.payload
        ]
      }
    case Actions.DELETE_CHARACTERS:
      return {
        characterList: [
          ...action.payload
        ]
      }
    default:
      return state;
  }
};