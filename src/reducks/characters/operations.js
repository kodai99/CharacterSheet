/* eslint-disable no-template-curly-in-string */
import { db, FirebaseTimestamp } from "../../firebase/firebase";
import { push } from "connected-react-router";
import { displayCharactersAction } from "./actions";
import { deleteCharacterAction } from "./actions";

export const saveCharacter = (
  characterId, personal, image,
  talents, checkedA, checkedB, checkedC, checkedD, checkedE, checkedF, checkedG,
  skills, backgrounds, specialmoves, items, relations
) => {
  return async (dispatch, getState) => {
    if (personal.name === "") {
      alert("基本情報の欄は必須項目です。");
      return;
    }

    const timestamp = FirebaseTimestamp.now();

    const formatNestedArray = (array) => {
      let obj = {};
      for (let i = 0; i < array.length; i++) {
        obj[i] = array[i];
      }
      return obj;
    }
    const objTalents = formatNestedArray(talents);

    const characterData = {
      personal: personal,
      image: image,
      talents: objTalents,
      checkedA: checkedA,
      checkedB: checkedB,
      checkedC: checkedC,
      checkedD: checkedD,
      checkedE: checkedE,
      checkedF: checkedF,
      checkedG: checkedG,
      skills: skills,
      backgrounds: backgrounds,
      specialmoves: specialmoves,
      items: items,
      relations: relations,
      updated_at: timestamp,
    };

    const state = getState();
    const uid = state.users.uid;

    try {
      if (characterId === "") {
        const characterRef = await db.collection("users").doc(uid).collection("characters").doc();
        characterId = characterRef.id;
        characterData.id = characterId;
        characterData.created_at = timestamp;
      }

      await db.collection("users").doc(uid).collection("characters").doc(characterId).set(characterData, { merge: true });
      dispatch(push("/"));

    } catch (err) {
      alert("キャラクターの登録に失敗しました。");
      console.log(err);
    }
  };
};

export const displayCharacters = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const uid = state.users.uid;
    let characterList = [];

    try {
      const characters = await db.collection("users").doc(uid).collection("characters").orderBy("created_at", "desc").get();
      await characters.forEach(async (character) => {
        const characterData = await character.data();
        characterList.push(characterData);
      });
      dispatch(displayCharactersAction(characterList));
    } catch (err) {
      alert("キャラクター情報の取得に失敗しました。");
      console.log(err);
    }
  };
};

export const deleteCharacter = (characterId, characterName) => {
  return async (dispatch, getState) => {
    const result = window.confirm(`${characterName}を削除します。本当によろしいですか？`);
    if (!result) {
      return;
    }

    const state = getState();
    const uid = state.users.uid;
    const characterList = state.characters.characterList;

    try {
      await db.collection("users").doc(uid).collection("characters").doc(characterId).delete();
      const newCharacterList = characterList.filter((character) => {
        return character.id !== characterId;
      });
      dispatch(deleteCharacterAction(newCharacterList));

    } catch (err) {
      alert("キャラクターの削除に失敗しました。");
      console.log(err);
    }
  }
}