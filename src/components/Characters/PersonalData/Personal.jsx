import React, { useState, useCallback } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { CharacterPersonalAccordion } from "./PersonalAccordion";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  personalData: {
    padding: "5px 0 5px 10px",
    borderBottom: "1px solid #5e5e5e",
  },
  data: {
    padding: "5px 0 5px 20px"
  }
}));

export const CharacterPersonal = ({
  personal, setPersonal
}) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [regulation, setRegulation] = useState("");
  const [school, setSchool] = useState("");
  const [rank, setRank] = useState("");
  const [hp, setHp] = useState("");
  const [contribution, setContribution] = useState("");

  const inputName = useCallback((e) => {
    setName(e.target.value);
  }, [setName]);

  const selectRegulation = useCallback((e) => {
    setRegulation(e.target.value);
  }, [setRegulation]);

  const selectSchool = useCallback((e) => {
    setSchool(e.target.value);
  }, [setSchool]);

  const selectRank = useCallback((e) => {
    setRank(e.target.value);
  }, [setRank]);

  const inputHp = useCallback((e) => {
    setHp(e.target.value);
  }, [setHp])

  const inputContribution = useCallback((e) => {
    setContribution(e.target.value);
  }, [setContribution]);

  const registerPersonal = (name, regulation, school, rank, hp, contribution) => {
    if (name === "" || regulation === "" || school === "" || rank === "" || hp === "" || contribution === "") {
      alert("全て必須項目です。");
      return;
    };

    const newPersonalData = {
      name: name,
      regulation: regulation,
      school: school,
      rank: rank,
      hp: hp,
      contribution: contribution,
    }
    setPersonal(newPersonalData);
  };

  const setPersonalData = () => {
    setName(personal.name)
    setRegulation(personal.regulation)
    setSchool(personal.school)
    setRank(personal.rank)
    setHp(personal.hp)
    setContribution(personal.contribution)
  }

  return (
    <div className={classes.root} >
      <h2>【基本情報】</h2>
      <div className="md-margin"></div>
      <div className="background">
        {personal.name !== "" && (
          <div className={classes.personalData}>
            <h4>《名前》</h4>
            <p className={classes.data}>{personal.name}</p>
          </div>
        )}
        {personal.name !== "" && (
          <div className={classes.personalData}>
            <h4>《レギュレーション》</h4>
            <p className={classes.data}>{personal.regulation}</p>
          </div>
        )}
        {personal.name !== "" && (
          <div className={classes.personalData}>
            <h4>《流派》</h4>
            <p className={classes.data}>{personal.school}</p>
          </div>
        )}
        {personal.name !== "" && (
          <div className={classes.personalData}>
            <h4>《階級》</h4>
            <p className={classes.data}>{personal.rank}</p>
          </div>
        )}
        {personal.name !== "" && (
          <div className={classes.personalData}>
            <h4>《HP》</h4>
            <p className={classes.data}>{personal.hp}</p>
          </div>
        )}
        {personal.name !== "" && (
          <div className={classes.personalData}>
            <h4>《累積功績点》</h4>
            <p className={classes.data}>{personal.contribution}</p>
          </div>
        )}
      </div>
      <CharacterPersonalAccordion
        name={name} regulation={regulation} school={school} rank={rank} hp={hp} contribution={contribution}
        inputName={inputName} selectRegulation={selectRegulation} selectSchool={selectSchool}
        selectRank={selectRank} inputHp={inputHp} inputContribution={inputContribution}
        registerPersonal={registerPersonal} onClick={() => setPersonalData()}
      />
    </div>
  );
};