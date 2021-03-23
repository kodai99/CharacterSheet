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
import { SchoolSelectBox } from "../../Anything/SchoolSelectBox";

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

export const CharacterPersonalAccordion = ({
  name, regulation, school, rank, hp, contribution,
  inputName, selectRegulation, selectSchool, selectRank, inputHp, inputContribution,
  registerPersonal, onClick
}) => {
  const classes = useStyles();

  const regulations = [
    { id: "退魔編", name: "退魔編" },
    { id: "戦国編", name: "戦国編" },
    { id: "戦国退魔編", name: "戦国退魔編" },
    { id: "その他", name: "その他" },
  ]

  const schoolData1 = [
    { id: "斜歯忍軍", name: "斜歯忍軍" },
    { id: "鍔鑿組", name: "鍔鑿組" },
    { id: "大槌軍", name: "大槌軍" },
    { id: "指矩班", name: "指矩班" },
    { id: "御釘衆", name: "御釘衆" },
  ];

  const schoolData2 = [
    { id: "鞍馬神流", name: "鞍馬神流" },
    { id: "廻鴉", name: "廻鴉" },
    { id: "バヨネット", name: "バヨネット" },
    { id: "魔王流", name: "魔王流" },
    { id: "蓮華王拳", name: "蓮華王拳" },
  ];

  const schoolData3 = [
    { id: "ハグレモノ", name: "ハグレモノ" },
    { id: "夜顔", name: "夜顔" },
    { id: "No.9", name: "No.9" },
    { id: "世界忍者連合", name: "世界忍者連合" },
    { id: "影絵座", name: "影絵座" },
    { id: "不知火", name: "不知火" },
    { id: "咎眼流", name: "咎眼流" },
    { id: "ブレーメン", name: "ブレーメン" },
  ];

  const schoolData4 = [
    { id: "比良坂機関", name: "比良坂機関" },
    { id: "常夜", name: "常夜" },
    { id: "醜女衆", name: "醜女衆" },
    { id: "公安隠密局", name: "公安隠密局" },
    { id: "麝香会総合病院", name: "麝香会総合病院" },
  ];

  const schoolData5 = [
    { id: "私立御斎学園", name: "私立御斎学園" },
    { id: "特命臨時教職員派遣委員会", name: "特命臨時教職員派遣委員会" },
    { id: "御斎学園生徒会", name: "御斎学園生徒会" },
    { id: "私立多羅尾女学院", name: "私立多羅尾女学院" },
    { id: "旧校舎管理委員会", name: "旧校舎管理委員会" },
  ];

  const schoolData6 = [
    { id: "隠忍の血統", name: "隠忍の血統" },
    { id: "土蜘蛛", name: "土蜘蛛" },
    { id: "血社", name: "血社" },
    { id: "凶尾", name: "凶尾" },
    { id: "長耳", name: "長耳" },
  ];

  const schoolData7 = [
    { id: "伊賀者", name: "伊賀者" },
    { id: "甲賀者", name: "甲賀者" },
    { id: "裏柳生", name: "裏柳生" },
    { id: "根来衆", name: "根来衆" },
    { id: "透波", name: "透波" },
    { id: "軒猿", name: "軒猿" },
    { id: "乱波", name: "乱波" },
    { id: "突波", name: "突波" },
    { id: "雑賀衆", name: "雑賀衆" },
    { id: "黒脛巾組", name: "黒脛巾組" },
    { id: "座頭衆", name: "座頭衆" },
    { id: "鉢屋衆", name: "鉢屋衆" },
    { id: "八房", name: "八房" },
    { id: "黒鍬組", name: "黒鍬組" },
    { id: "川並衆", name: "川並衆" },
    { id: "山潜り", name: "山潜り" },
    { id: "花留陀衆", name: "花留陀衆" },
    { id: "金色庵", name: "金色庵" },
    { id: "宿儺衆", name: "宿儺衆" },
    { id: "真言立川流", name: "真言立川流" },
    { id: "土御門家", name: "土御門家" },
    { id: "伴天連", name: "伴天連" },
  ];

  const ranks = [
    { id: "草", name: "草" },
    { id: "下忍", name: "下忍" },
    { id: "下忍頭", name: "下忍頭" },
    { id: "中忍", name: "中忍" },
    { id: "中忍頭", name: "中忍頭" },
    { id: "上忍", name: "上忍" },
    { id: "上忍頭", name: "上忍頭" },
    { id: "頭領", name: "頭領" },
  ];

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          onClick={onClick}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>基本情報</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>基本情報を入力して下さい</Typography>
          </div>
        </AccordionSummary>
        <Divider />
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          <div className="personal-data-accordion">
            <TextInput
              fullWidth={true} label={"キャラクター名"} multiline={false} onChange={(e) => inputName(e)}
              required={false} rows={1} type={"text"} value={name}
            />
            <div className="md-margin"></div>
            <SelectBox
              label={"レギュレーション"} onChange={(e) => selectRegulation(e)} options={regulations} required={true} value={regulation}
            />
            <div className="md-margin"></div>
            <SchoolSelectBox
              fullWidth={true} mainLabel={"流派"} onChange={(e) => selectSchool(e)} value={school}
              schoolData1Label={"斜歯忍軍"} schoolData2Label={"鞍馬神流"} schoolData3Label={"ハグレモノ"}
              schoolData4Label={"比良坂機関"} schoolData5Label={"私立御斎学園"} schoolData6Label={"隠忍の血統"} schoolData7Label={"古流流派"}
              schoolData1Options={schoolData1} schoolData2Options={schoolData2} schoolData3Options={schoolData3}
              schoolData4Options={schoolData4} schoolData5Options={schoolData5} schoolData6Options={schoolData6} schoolData7Options={schoolData7}
            />
            <div className="md-margin"></div>
            <SelectBox
              label={"階級"} onChange={(e) => selectRank(e)} options={ranks} required={true} value={rank}
            />
            <div className="md-margin"></div>
            <TextInput
              fullWidth={true} label={"HP"} multiline={false} onChange={(e) => inputHp(e)}
              required={false} rows={1} type={"number"} value={hp}
            />
            <div className="md-margin"></div>
            <TextInput
              fullWidth={true} label={"累積功績点"} multiline={false} onChange={(e) => inputContribution(e)}
              required={false} rows={1} type={"number"} value={contribution}
            />
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <IconButton
            color="primary"
            onClick={() => registerPersonal(name, regulation, school, rank, hp, contribution)}
          >
            <AddBoxIcon />
          </IconButton>
        </AccordionActions>
      </Accordion>
    </div>
  );
};