import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { CharacterSkillAccordion } from "./SkillAccordion";

const useStyles = makeStyles(() => ({
  iconCell: {
    height: 40,
    width: 40,
  },
}));

export const CharacterSkill = ({ skills, setSkills }) => {
  const classes = useStyles();

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [spacing, setSpacing] = useState("");
  const [cost, setCost] = useState("");
  const [designatedTalent, setDesignatedTalent] = useState("");
  const [page, setPage] = useState("");

  const inputName = useCallback((e) => {
    setName(e.target.value);
  }, [setName]);

  const selectType = useCallback((e) => {
    setType(e.target.value);
  }, [setType]);

  const selectSpacing = useCallback((e) => {
    setSpacing(e.target.value);
  }, [setSpacing]);

  const selectCost = useCallback((e) => {
    setCost(e.target.value);
  }, [setCost]);

  const inputDesignatedTalent = useCallback((e) => {
    setDesignatedTalent(e.target.value);
  }, [setDesignatedTalent]);

  const inputPage = useCallback((e) => {
    setPage(e.target.value);
  }, [setPage]);

  const addSkill = (id, name, type, spacing, cost, designatedTalent, page) => {
    if (name === "") {
      alert("忍法名は必須です。");
      return;
    };

    id = skills.length;
    setId(id);

    if (id === skills.length) {
      for (let i = 0; i < skills.length; i++) {
        if (skills[i].name === name) {
          alert("既に登録済みの忍法です。");
          return;
        }
      };

      setSkills(prevState => [...prevState, {
        name: name,
        type: type,
        spacing: spacing,
        cost: cost,
        designatedTalent: designatedTalent,
        page: page,
      }]);
      setId(id + 1);
    } else {
      for (let i = 0; i < skills.length; i++) {
        if (i === id) continue;
        if (skills[i].name === name) {
          alert("既に登録済みの忍法です。");
          return;
        }
      };

      const newSkills = skills;
      newSkills[id] = {
        name: name,
        type: type,
        spacing: spacing,
        cost: cost,
        designatedTalent: designatedTalent,
        page: page,
      }
      setSkills(newSkills);
      setId(skills.length);
    }
    setName("");
    setType("");
    setSpacing("");
    setCost("");
    setDesignatedTalent("");
    setPage("");
  };

  const editSkill = (id, name, type, spacing, cost, designatedTalent, description, page) => {
    setId(id);
    setName(name);
    setType(type);
    setSpacing(spacing);
    setCost(cost);
    setDesignatedTalent(designatedTalent);
    setPage(page);
  };

  const deleteSkill = (deleteId) => {
    const newSkills = skills.filter((skill, index) => {
      return index !== deleteId;
    });
    setId(id - 1);
    setSkills(newSkills);
  };

  return (
    <div className="skill-data">
      <h2>【忍法】</h2>
      <div className="md-margin"></div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>忍法名</TableCell>
              <TableCell>タイプ</TableCell>
              <TableCell>間合</TableCell>
              <TableCell>コスト</TableCell>
              <TableCell>指定特技</TableCell>
              <TableCell>ページ</TableCell>
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {skills.length > 0 && (
              skills.map((skill, index) => {
                return (
                  <TableRow key={skill.name}>
                    <TableCell>{skill.name}</TableCell>
                    <TableCell>{skill.type}</TableCell>
                    <TableCell>{skill.spacing}</TableCell>
                    <TableCell>{skill.cost}</TableCell>
                    <TableCell>{skill.designatedTalent}</TableCell>
                    <TableCell>{skill.page}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        className={classes.iconCell}
                        onClick={() => editSkill(
                          index, skill.name, skill.type, skill.spacing, skill.cost, skill.designatedTalent, skill.page
                        )}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="secondary"
                        className={classes.iconCell}
                        onClick={() => deleteSkill(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              }))}
          </TableBody>
        </Table>
        <div className="md-margin"></div>
        <CharacterSkillAccordion
          id={id} name={name} type={type} spacing={spacing} cost={cost} designatedTalent={designatedTalent} page={page}
          inputName={inputName} selectType={selectType} selectSpacing={selectSpacing} selectCost={selectCost}
          inputDesignatedTalent={inputDesignatedTalent} inputPage={inputPage} addSkill={addSkill}
        />
      </TableContainer>
    </div>
  );
};