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
import { CharacterItemAccordion } from "./ItemAccordion";

const useStyles = makeStyles({
  iconCell: {
    height: 40,
    width: 40,
  }
})

export const CharacterItem = ({ items, setItems }) => {
  const classes = useStyles();

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const inputName = useCallback((e) => {
    setName(e.target.value);
  }, [setName]);

  const inputQuantity = useCallback((e) => {
    setQuantity(e.target.value);
  }, [setQuantity]);

  const inputDescription = useCallback((e) => {
    setDescription(e.target.value);
  }, [setDescription]);

  const addItem = (id, name, quantity, description) => {
    console.log(id);
    if (name === "") {
      alert("背景名は必須です。");
      return;
    };

    if (id === items.length) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].name === name) {
          alert("既に登録済みの背景です。");
          return;
        }
      };

      setItems(prevState => [...prevState, {
        name: name,
        quantity: quantity,
        description: description,
      }]);
      setId(id + 1);
    } else {
      for (let i = 0; i < items.length; i++) {
        if (i === id) continue;
        if (items[i].name === name) {
          alert("既に登録済みの背景です。");
          return;
        }
      };

      const newBackgrounds = items;
      newBackgrounds[id] = {
        name: name,
        quantity: quantity,
        description: description,
      }
      setItems(newBackgrounds);
      setId(items.length);
    }
    setName("");
    setQuantity("");
    setDescription("");
  };

  const editItem = (id, name, quantity, description) => {
    setId(id);
    setName(name);
    setQuantity(quantity);
    setDescription(description);
  };

  const deleteItem = (deleteId) => {
    const newItems = items.filter((item, index) => {
      return index !== deleteId;
    });
    setId(id - 1);
    setItems(newItems);
  };

  return (
    <div className="item-data">
      <h2>【忍具】</h2>
      <div className="md-margin"></div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>忍具</TableCell>
              <TableCell>個数</TableCell>
              <TableCell>効果</TableCell>
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {items.length > 0 && (
              items.map((item, index) => {
                return (
                  <TableRow key={item.name}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>
                      <IconButton
                        className={classes.iconCell}
                        onClick={() => editItem(
                          index, item.name, item.quantity, item.description
                        )}
                      >
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        className={classes.iconCell}
                        onClick={() => deleteItem(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              }))}
          </TableBody>
        </Table>
        <CharacterItemAccordion
          id={id} name={name} quantity={quantity} description={description}
          inputName={inputName} inputQuantity={inputQuantity} inputDescription={inputDescription} addItem={addItem}
        />
      </TableContainer>
    </div>
  );
};