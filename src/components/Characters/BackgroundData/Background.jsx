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
import { CharacterBackgroundAccordion } from "./BackgroundAccordion";

const useStyles = makeStyles({
  iconCell: {
    height: 40,
    width: 40,
  }
})

export const CharacterBackground = ({ backgrounds, setBackgrounds }) => {
  const classes = useStyles();

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [contribution, setContribution] = useState("");
  const [description, setDescription] = useState("");

  const inputName = useCallback((e) => {
    setName(e.target.value);
  }, [setName]);

  const selectType = useCallback((e) => {
    setType(e.target.value);
  }, [setType]);

  const inputContribution = useCallback((e) => {
    setContribution(e.target.value);
  }, [setContribution]);

  const inputDescription = useCallback((e) => {
    setDescription(e.target.value);
  }, [setDescription]);

  const addBackground = (id, name, type, contribution, description) => {
    console.log(id);
    if (name === "") {
      alert("背景名は必須です。");
      return;
    };

    if (id === backgrounds.length) {
      for (let i = 0; i < backgrounds.length; i++) {
        if (backgrounds[i].name === name) {
          alert("既に登録済みの背景です。");
          return;
        }
      };

      setBackgrounds(prevState => [...prevState, {
        name: name,
        type: type,
        contribution: contribution,
        description: description,
      }]);
      setId(id + 1);
    } else {
      for (let i = 0; i < backgrounds.length; i++) {
        if (i === id) continue;
        if (backgrounds[i].name === name) {
          alert("既に登録済みの背景です。");
          return;
        }
      };

      const newBackgrounds = backgrounds;
      newBackgrounds[id] = {
        name: name,
        type: type,
        contribution: contribution,
        description: description,
      }
      setBackgrounds(newBackgrounds);
      setId(backgrounds.length);
    }
    setName("");
    setType("");
    setContribution("");
    setDescription("");
  };

  const editBackground = (id, name, type, contribution, description) => {
    setId(id);
    setName(name);
    setType(type);
    setContribution(contribution);
    setDescription(description);
  };

  const deleteBackground = (deleteId) => {
    const newBackgrounds = backgrounds.filter((bakground, index) => {
      return index !== deleteId;
    });
    setId(id - 1);
    setBackgrounds(newBackgrounds);
  };

  return (
    <div className="background-data">
      <h2>【背景】</h2>
      <div className="md-margin"></div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>背景名</TableCell>
              <TableCell>長所/弱点</TableCell>
              <TableCell>功績点</TableCell>
              <TableCell>効果</TableCell>
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {backgrounds.length > 0 && (
              backgrounds.map((background, index) => {
                return (
                  <TableRow key={background.name}>
                    <TableCell>{background.name}</TableCell>
                    <TableCell>{background.type}</TableCell>
                    <TableCell>{background.contribution}</TableCell>
                    <TableCell>{background.description}</TableCell>
                    <TableCell>
                      <IconButton
                        className={classes.iconCell}
                        onClick={() => editBackground(
                          index, background.name, background.type, background.contribution, background.description
                        )}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        className={classes.iconCell}
                        onClick={() => deleteBackground(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              }))}
          </TableBody>
        </Table>
        <CharacterBackgroundAccordion
          id={id} name={name} type={type} contribution={contribution} description={description}
          inputName={inputName} selectType={selectType} inputContribution={inputContribution}
          inputDescription={inputDescription} addBackground={addBackground}
        />
      </TableContainer>
    </div>
  );
};