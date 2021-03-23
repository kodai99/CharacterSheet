import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { makeStyles } from "@material-ui/core/styles";
import { CharacterCard } from "../components/Characters/Card";
import { displayCharacters } from "../reducks/characters/operations";
import { getUsername } from "../reducks/users/selectors";
import { getCharacters } from "../reducks/characters/selectors";
import { SubmitButton } from "../components/Anything/SubmitButton";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "20px 16px 50px auto",
  },
}));

export const CharacterList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const username = getUsername(selector);
  let characters = getCharacters(selector);

  useEffect(() => {
    if (characters.length >= 1) {
      characters = [];
    }
    dispatch(displayCharacters())
  }, []);

  return (
    <div className="character-list">
      <h1>{username}のキャラ一覧</h1>
      <SubmitButton
        className={classes.button} label="キャラクターの新規登録" onClick={() => dispatch(push("/character/edit"))}
      />
      <div className="cards">
        {characters !== undefined && (
          characters.map(character => {
            return (
              <CharacterCard key={character.id} id={character.id} path={character.image.path} name={character.personal.name} />
            )
          })
        )}
      </div>
    </div>
  );
};