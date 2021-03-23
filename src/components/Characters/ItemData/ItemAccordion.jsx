import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { TextInput } from "../../Anything/TextInput";
import { SelectBox } from "../../Anything/SelectBox";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    [theme.breakpoints.down("sm")]: {
      flexBasis: '50%',
    },
    flexBasis: '33.33%',
  },
}));

export const CharacterItemAccordion = ({
  id, name, quantity, description,
  inputName, inputQuantity, inputDescription, addItem
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>忍具を追加</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>忍具の情報を入力して下さい</Typography>
          </div>
        </AccordionSummary>
        <Divider />
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          <div>
            <TextInput
              fullWidth={true} label={"忍具名"} multiline={false} onChange={(e) => inputName(e)}
              required={true} rows={1} type={"text"} value={name}
            />
            <TextInput
              fullWidth={true} label={"個数"} multiline={false} onChange={(e) => inputQuantity(e)}
              required={true} rows={1} type={"number"} value={quantity}
            />
            <TextInput
              fullWidth={true} label={"効果"} multiline={false} onChange={(e) => inputDescription(e)}
              required={true} rows={1} type={"text"} value={description}
            />
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <IconButton
            onClick={() => addItem(id, name, quantity, description)}
          >
            <AddBoxIcon />
          </IconButton>
        </AccordionActions>
      </Accordion>
    </div>
  );
};