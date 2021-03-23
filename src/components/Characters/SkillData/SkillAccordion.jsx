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

export const CharacterSkillAccordion = ({
  id, name, type, spacing, cost, designatedTalent, page,
  inputName, selectType, selectSpacing, selectCost,
  inputDesignatedTalent, inputDescription, inputPage, addSkill
}) => {
  const classes = useStyles();

  const skillTypeData = [
    { id: "攻撃", name: "攻撃" },
    { id: "サポート", name: "サポート" },
    { id: "装備", name: "装備" },
  ];

  const skillSpactingData = [
    { id: "なし", name: "なし" },
    { id: 0, name: "0" },
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
  ];

  const skillCostData = [
    { id: "なし", name: "なし" },
    { id: 0, name: "0" },
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: "variable", name: "可変" },
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
            <Typography className={classes.heading}>忍法</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>忍法を入力して下さい</Typography>
          </div>
        </AccordionSummary>
        <Divider />
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          <div>
            <TextInput
              fullWidth={true} label={"忍法"} multiline={false} onChange={(e) => inputName(e)}
              required={false} rows={1} type={"text"} value={name}
            />
            <SelectBox
              label={"タイプ"} onChange={(e) => selectType(e)}
              options={skillTypeData} required={false} value={type}
            />
            <SelectBox
              label={"間合"} onChange={(e) => selectSpacing(e)}
              options={skillSpactingData} required={false} value={spacing}
            />
            <SelectBox
              label={"コスト"} onChange={(e) => selectCost(e)}
              options={skillCostData} required={false} value={cost}
            />
            <TextInput
              fullWidth={true} label={"指定特技"} multiline={false} onChange={(e) => inputDesignatedTalent(e)}
              required={false} rows={1} type={"text"} value={designatedTalent}
            />
            <TextInput
              fullWidth={true} label={"ページ"} multiline={false} onChange={(e) => inputPage(e)}
              required={false} rows={1} type={"number"} value={page}
            />
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <IconButton
            color="primary"
            onClick={() => addSkill(id, name, type, spacing, cost, designatedTalent, page)}
          >
            <AddBoxIcon />
          </IconButton>
        </AccordionActions>
      </Accordion>
    </div>
  );
};