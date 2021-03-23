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
import { CharacterRelationAccordion } from "./RelationAccordion";

const useStyles = makeStyles({
  iconCell: {
    height: 40,
    width: 40,
  }
})

export const CharacterRelation = ({ relations, setRelations }) => {
  const classes = useStyles();

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [whereabouts, setWhereabouts] = useState(false);
  const [secret, setSecret] = useState(false);
  const [specialmove, setSpecialmove] = useState(false);
  const [emotion, setEmotion] = useState("");

  const inputName = useCallback((e) => {
    setName(e.target.value);
  }, [setName]);

  const checkWhereabouts = useCallback((e) => {
    setWhereabouts(!whereabouts);
  }, [whereabouts]);

  const checkSecret = useCallback((e) => {
    setSecret(!secret);
  }, [secret]);

  const checkSpecialmove = useCallback((e) => {
    setSpecialmove(!specialmove);
  }, [specialmove]);

  const selectEmotion = useCallback((e) => {
    setEmotion(e.target.value);
  }, [setEmotion]);

  const addRelation = (id, name, whereabouts, secret, specialmove, emotion) => {
    console.log(id);
    if (name === "") {
      alert("背景名は必須です。");
      return;
    };

    if (id === relations.length) {
      for (let i = 0; i < relations.length; i++) {
        if (relations[i].name === name) {
          alert("既に登録済みの人物です。");
          return;
        }
      };

      setRelations(prevState => [...prevState, {
        name: name,
        whereabouts: whereabouts,
        secret: secret,
        specialmove: specialmove,
        emotion: emotion,
      }]);
      setId(id + 1);
    } else {
      for (let i = 0; i < relations.length; i++) {
        if (i === id) continue;
        if (relations[i].name === name) {
          alert("既に登録済みの人物です。");
          return;
        }
      };

      const newRelations = relations;
      newRelations[id] = {
        name: name,
        whereabouts: whereabouts,
        secret: secret,
        specialmove: specialmove,
        emotion: emotion,
      }
      setRelations(newRelations);
      setId(relations.length);
    }
    setName("");
    setWhereabouts("");
    setSecret("");
    setSpecialmove("");
    setEmotion("");
  };

  const editRelation = (id, name, whereabouts, secret, specialmove, emotion) => {
    setId(id);
    setName(name);
    setWhereabouts(whereabouts);
    setSecret(secret);
    setSpecialmove(specialmove);
    setEmotion(emotion);
  };

  const deleteRelation = (deleteId) => {
    const newRelations = relations.filter((relation, index) => {
      return index !== deleteId;
    });
    setId(id - 1);
    setRelations(newRelations);
  };

  return (
    <div className="relation-data">
      <h2>【人物】</h2>
      <div className="md-margin"></div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>人物名</TableCell>
              <TableCell>居所</TableCell>
              <TableCell>秘密</TableCell>
              <TableCell>奥義</TableCell>
              <TableCell>感情</TableCell>
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {relations.length > 0 && (
              relations.map((relation, index) => {
                return (
                  <TableRow key={relation.name}>
                    <TableCell>{relation.name}</TableCell>
                    <TableCell>
                      {relation.whereabouts ? "所持" : "未所持"}
                    </TableCell>
                    <TableCell>
                      {relation.secret ? "所持" : "未所持"}
                    </TableCell>
                    <TableCell>
                      {relation.specialmove ? "所持" : "未所持"}
                    </TableCell>
                    <TableCell>{relation.emotion}</TableCell>
                    <TableCell>
                      <IconButton
                        className={classes.iconCell}
                        onClick={() => editRelation(
                          index, relation.name, relation.whereabouts, relation.secret,
                          relation.specialmove, relation.emotion
                        )}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        className={classes.iconCell}
                        onClick={() => deleteRelation(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              }))}
          </TableBody>
        </Table>
        <CharacterRelationAccordion
          id={id} name={name} whereabouts={whereabouts} secret={secret}
          specialmove={specialmove} emotion={emotion}
          inputName={inputName} checkWhereabouts={checkWhereabouts} checkSecret={checkSecret} checkSpecialmove={checkSpecialmove}
          selectEmotion={selectEmotion} addRelation={addRelation}
        />
      </TableContainer>
    </div>
  );
};