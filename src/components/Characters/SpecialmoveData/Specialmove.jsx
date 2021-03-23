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
import { CharacterSpecialmoveAccordion } from "./SpecialmoveAccordion";

const useStyles = makeStyles({
  iconCell: {
    height: 40,
    width: 40,
  }
})

export const CharacterSpecialmove = ({ specialmoves, setSpecialmoves }) => {
  const classes = useStyles();

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [designatedTalent, setDesignatedTalent] = useState("");
  const [strong, setStrong] = useState("");
  const [week, setWeek] = useState("");
  const [description, setDescription] = useState("");

  const inputName = useCallback((e) => {
    setName(e.target.value);
  }, [setName]);

  const inputDesignatedTalent = useCallback((e) => {
    setDesignatedTalent(e.target.value);
  }, [setDesignatedTalent]);

  const selectStrong = useCallback((e) => {
    setStrong(e.target.value);
  }, [setStrong]);

  const selectWeek = useCallback((e) => {
    setWeek(e.target.value);
  }, [setWeek]);

  const inputDescription = useCallback((e) => {
    setDescription(e.target.value);
  }, [setDescription]);

  const addSpecialmove = (id, name, designatedTalent, strong, week, description) => {
    console.log(id);
    if (name === "") {
      alert("奥義名は必須です。");
      return;
    };

    if (id === specialmoves.length) {
      for (let i = 0; i < specialmoves.length; i++) {
        if (specialmoves[i].name === name) {
          alert("既に登録済みの奥義です。");
          return;
        }
      };

      setSpecialmoves(prevState => [...prevState, {
        name: name,
        designatedTalent: designatedTalent,
        strong: strong,
        week: week,
        description: description,
      }]);
      setId(id + 1);
    } else {
      for (let i = 0; i < specialmoves.length; i++) {
        if (i === id) continue;
        if (specialmoves[i].name === name) {
          alert("既に登録済みの奥義です。");
          return;
        }
      };

      const newBackgrounds = specialmoves;
      newBackgrounds[id] = {
        name: name,
        designatedTalent: designatedTalent,
        strong: strong,
        week: week,
        description: description,
      }
      setSpecialmoves(newBackgrounds);
      setId(specialmoves.length);
    }
    setName("");
    setDesignatedTalent("");
    setStrong("");
    setWeek("");
    setDescription("");
  };

  const editSpecialmove = (id, name, designatedTalent, strong, week, description) => {
    setId(id);
    setName(name);
    setDesignatedTalent(designatedTalent);
    setStrong(strong);
    setWeek(week);
    setDescription(description);
  };

  const deleteSpecialmove = (deleteId) => {
    const newSpecialmoves = specialmoves.filter((specialmove, index) => {
      return index !== deleteId;
    });
    setId(id - 1);
    setSpecialmoves(newSpecialmoves);
  };

  return (
    <div className="specialmove-data">
      <h2>【奥義】</h2>
      <div className="md-margin"></div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>奥義名</TableCell>
              <TableCell>指定特技</TableCell>
              <TableCell>強み</TableCell>
              <TableCell>弱み</TableCell>
              <TableCell>効果</TableCell>
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {specialmoves.length > 0 && (
              specialmoves.map((specialmove, index) => {
                return (
                  <TableRow key={specialmove.name}>
                    <TableCell>{specialmove.name}</TableCell>
                    <TableCell>{specialmove.designatedTalent}</TableCell>
                    <TableCell>{specialmove.strong}</TableCell>
                    <TableCell>{specialmove.week}</TableCell>
                    <TableCell>{specialmove.description}</TableCell>
                    <TableCell>
                      <IconButton
                        className={classes.iconCell}
                        onClick={() => editSpecialmove(
                          index, specialmove.name, specialmove.designatedTalent, specialmove.strong, specialmove.week, specialmove.description
                        )}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        className={classes.iconCell}
                        onClick={() => deleteSpecialmove(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              }))}
          </TableBody>
        </Table>
        <CharacterSpecialmoveAccordion
          id={id} name={name} designatedTalent={designatedTalent} strong={strong} week={week} description={description}
          inputName={inputName} inputDesignatedTalent={inputDesignatedTalent} selectStrong={selectStrong}
          selectWeek={selectWeek} inputDescription={inputDescription} addSpecialmove={addSpecialmove}
        />
      </TableContainer>
    </div>
  );
};