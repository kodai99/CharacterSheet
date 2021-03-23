import React, { useState } from 'react';
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
import { EmotionSelectBox } from "../../Anything/EmotionSelectBox";
import { CheckBox } from "../../Anything/CheckBox";

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
  hidden: {
    display: "none",
  }
}));

export const CharacterRelationAccordion = ({
  id, name, whereabouts, secret, specialmove, emotion,
  inputName, checkWhereabouts, checkSecret, checkSpecialmove, selectEmotion, addRelation
}) => {
  const classes = useStyles();

  const plusEmotionData = [
    { id: "1：共感", name: "1：共感" },
    { id: "2：友情", name: "2：友情" },
    { id: "3：愛情", name: "3：愛情" },
    { id: "4：忠誠", name: "4：忠誠" },
    { id: "5：憧憬", name: "5：憧憬" },
    { id: "6：狂信", name: "6：狂信" },
  ];

  const minusEmotionData = [
    { id: "1：不信", name: "1：不信" },
    { id: "2：怒り", name: "2：怒り" },
    { id: "3：妬み", name: "3：妬み" },
    { id: "4：侮蔑", name: "4：侮蔑" },
    { id: "5：劣等感", name: "5：劣等感" },
    { id: "6：殺意", name: "6：殺意" },
  ];

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>人物を追加</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>人物の情報を入力して下さい</Typography>
          </div>
        </AccordionSummary>
        <Divider />
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          <div>
            <TextInput
              fullWidth={true} label={"人物名"} multiline={false} onChange={(e) => inputName(e)}
              required={true} rows={1} type={"text"} value={name}
            />
            <CheckBox
              label="居所" onChange={(e) => checkWhereabouts(e)} checked={whereabouts}
            />
            <CheckBox
              label="秘密" onChange={(e) => checkSecret(e)} checked={secret}
            />
            <CheckBox
              label="奥義" onChange={(e) => checkSpecialmove(e)} checked={specialmove}
            />
            <EmotionSelectBox
              fullWidth={true} mainLabel={"感情"} plusLabel={"プラス（+）"} minusLabel={"マイナス（-）"} onChange={(e) => selectEmotion(e)}
              plusOptions={plusEmotionData} minusOptions={minusEmotionData} required={true} value={emotion}
            />
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <IconButton
            onClick={() => addRelation(id, name, whereabouts, secret, specialmove, emotion)}
          >
            <AddBoxIcon />
          </IconButton>
        </AccordionActions>
      </Accordion>
    </div>
  );
};