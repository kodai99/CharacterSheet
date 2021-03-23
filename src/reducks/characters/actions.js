export const DISPLAY_CHARACTERS = "DISPLAY_CHARACTERS";
export const displayCharactersAction = (characterList) => {
  return {
    type: "DISPLAY_CHARACTERS",
    payload: characterList,
  }
};

export const DELETE_CHARACTERS = "DELETE_CHARACTERS";
export const deleteCharacterAction = (characterList) => {
  return {
    type: "DELETE_CHARACTERS",
    payload: characterList,
  }
};