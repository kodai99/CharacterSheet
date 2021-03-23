/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { db } from "../firebase/firebase";
import { SubmitButton } from "../components/Anything/SubmitButton";
import { CharacterPersonal } from "../components/Characters/PersonalData/Personal";
import { CharacterImageArea } from "../components/Characters/ImageData/ImageArea";
import { CharacterTalent } from "../components/Characters/Talent";
import { CharacterSkill } from "../components/Characters/SkillData/Skill";
import { CharacterBackground } from "../components/Characters/BackgroundData/Background";
import { CharacterSpecialmove } from "../components/Characters/SpecialmoveData/Specialmove";
import { CharacterItem } from "../components/Characters/ItemData/Item";
import { CharacterRelation } from "../components/Characters/RelationData/Relation";
import { getUserId } from "../reducks/users/selectors";
import { saveCharacter } from "../reducks/characters/operations";

const useStyles = makeStyles((theme) => ({
  button: {
    // margin: "20px auto 20px auto",
  },
}));

export const CharacterEdit = () => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);

  const [personal, setPersonal] = useState({
    name: "",
    regulation: "",
    school: "",
    rank: "",
    hp: "",
    contribution: "",
  });
  const [image, setImage] = useState("");
  const [talents, setTalents] = useState([
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    ["", "", "", "", "", ""],
  ]);
  const [checkedA, setCheckedA] = useState(false);
  const [checkedB, setCheckedB] = useState(false);
  const [checkedC, setCheckedC] = useState(false);
  const [checkedD, setCheckedD] = useState(false);
  const [checkedE, setCheckedE] = useState(false);
  const [checkedF, setCheckedF] = useState(false);
  const [checkedG, setCheckedG] = useState(false);
  const [skills, setSkills] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);
  const [specialmoves, setSpecialmoves] = useState([]);
  const [items, setItems] = useState([]);
  const [relations, setRelations] = useState([]);

  let characterId = "";
  const path = window.location.pathname;
  if (path.indexOf("/character/edit") !== -1) {
    characterId = path.split("/character/edit")[1];
    if (characterId !== "") {
      characterId = characterId.split("/")[1];
    }
  };

  const objToArray = (obj) => {
    let array = [];
    for (let i = 0; i < 12; i++) {
      array[i] = obj[i];
    }
    return array;
  }

  useEffect(() => {
    if (characterId !== "") {
      db.collection("users").doc(uid).collection("characters").doc(characterId).get()
        .then(snapshot => {
          const data = snapshot.data();
          const arrayTalents = objToArray(data.talents);

          setPersonal(data.personal);
          setImage(data.image);
          setTalents(arrayTalents);
          setCheckedA(data.checkedA);
          setCheckedB(data.checkedB);
          setCheckedC(data.checkedC);
          setCheckedD(data.checkedD);
          setCheckedE(data.checkedE);
          setCheckedF(data.checkedF);
          setCheckedG(data.checkedG);
          setSkills(data.skills);
          setBackgrounds(data.backgrounds);
          setItems(data.items);
          setRelations(data.relations);
        })
    }
  }, []);

  return (
    <div className="character-edit">
      <h1 className="character-edit-title">シノビガミ キャラクターシート</h1>
      <div className="lg-margin"></div>
      <CharacterPersonal personal={personal} setPersonal={setPersonal} />
      <div className="lg-margin"></div>
      <CharacterImageArea image={image} setImage={setImage} />
      <div className="lg-margin"></div>
      <CharacterTalent
        talents={talents} setTalents={setTalents} checkedA={checkedA} setCheckedA={setCheckedA} checkedB={checkedB} setCheckedB={setCheckedB}
        checkedC={checkedC} setCheckedC={setCheckedC} checkedD={checkedD} setCheckedD={setCheckedD} checkedE={checkedE} setCheckedE={setCheckedE}
        checkedF={checkedF} setCheckedF={setCheckedF} checkedG={checkedG} setCheckedG={setCheckedG}
      />
      <div className="lg-margin"></div>
      <CharacterSkill skills={skills} setSkills={setSkills} />
      <div className="lg-margin"></div>
      <CharacterBackground backgrounds={backgrounds} setBackgrounds={setBackgrounds} />
      <div className="lg-margin"></div>
      <CharacterSpecialmove specialmoves={specialmoves} setSpecialmoves={setSpecialmoves} />
      <div className="lg-margin"></div>
      <CharacterItem items={items} setItems={setItems} />
      <div className="lg-margin"></div>
      <CharacterRelation relations={relations} setRelations={setRelations} />
      <div className="lg-margin"></div>
      <div className="save-character-button">
        <SubmitButton
          className={classes.button} label={"キャラクターを登録する"}
          onClick={() => dispatch(saveCharacter(
            characterId, personal, image,
            talents, checkedA, checkedB, checkedC, checkedD, checkedE, checkedF, checkedG,
            skills, backgrounds, specialmoves, items, relations
          ))}
        />
      </div>
      <div className="lg-margin"></div>
    </div>
  );
};