import { createSelector } from "reselect";

const charactersSelector = (state) => state.characters;

export const getCharacters = createSelector(
  [charactersSelector],
  state => state.characterList,
);