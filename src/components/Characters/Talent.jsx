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
import { CheckBox } from "../Anything/CheckBox";
import { ClickButton } from "../Anything/ClickButton";

const useStyles = makeStyles(() => ({
  iconCell: {
    height: 40,
    width: 40,
  },
  tableCell: {
    height: "40px"
  },
  button: {
    height: "100%"
  },
  line: {
    height: "40px",
    width: "20%"
  }
}));

export const CharacterTalent = ({
  talents, setTalents, checkedA, setCheckedA, checkedB, setCheckedB, checkedC, setCheckedC,
  checkedD, setCheckedD, checkedE, setCheckedE, checkedF, setCheckedF, checkedG, setCheckedG,
}) => {
  const classes = useStyles();

  const clickTalent = useCallback((index, number) => {
    const newTalents = [...talents];
    newTalents[index][number] = !newTalents[index][number];
    setTalents(newTalents);
  }, [talents]);

  const clickCheckedA = useCallback(() => {
    setCheckedA(!checkedA);
  }, [checkedA]);

  const clickCheckedB = useCallback(() => {
    setCheckedB(!checkedB);
  }, [checkedB]);

  const clickCheckedC = useCallback(() => {
    setCheckedC(!checkedC);
  }, [checkedC]);

  const clickCheckedD = useCallback(() => {
    setCheckedD(!checkedD);
  }, [checkedD]);

  const clickCheckedE = useCallback(() => {
    setCheckedE(!checkedE);
  }, [checkedE]);

  const clickCheckedF = useCallback(() => {
    setCheckedF(!checkedF);
  }, [checkedF]);

  const clickCheckedG = useCallback(() => {
    setCheckedG(!checkedG);
  }, [checkedG]);


  const talentsData = [
    ["", "絡繰術", "", "騎乗術", "", "生存術", "", "医術", "", "兵糧術", "", "異形化", "2"],
    ["", "火術", "", "砲術", "", "潜伏術", "", "毒術", "", "鳥獣術", "", "召喚術", "3"],
    ["", "水術", "", "手裏剣術", "", "遁走術", "", "罠術", "", "野戦術", "", "死霊術", "4"],
    ["", "針術", "", "手練", "", "盗聴術", "", "調査術", "", "地の利", "", "結界術", "5"],
    ["", "仕込み", "", "身体操術", "", "腹話術", "", "詐術", "", "意気", "", "封術", "6"],
    ["", "衣装術", "", "歩法", "", "隠形術", "", "対人術", "", "用兵術", "", "言霊術", "7"],
    ["", "縄術", "", "走法", "", "変装術", "", "遊芸", "", "記憶術", "", "幻術", "8"],
    ["", "登術", "", "飛術", "", "香術", "", "九ノ一の術", "", "見敵術", "", "瞳術", "9"],
    ["", "拷問術", "", "骨法術", "", "分身の術", "", "傀儡の術", "", "暗号術", "", "千里眼の術", "10"],
    ["", "壊器術", "", "刀術", "", "隠蔽術", "", "流言の術", "", "伝達術", "", "憑依術", "11"],
    ["", "掘削術", "", "怪力", "", "第六感", "", "経済力", "", "人脈", "", "呪術", "12"],
    ["", "", "", "", "", "", "", "", "", "", "", "", ""],
  ];

  return (
    <div>
      <h2>【特技】</h2>
      <div className="md-margin"></div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell size="small">
                <CheckBox
                  label="A" onChange={() => clickCheckedA()} checked={checkedA}
                />
              </TableCell>
              <TableCell>器術</TableCell>
              <TableCell size="small">
                <CheckBox
                  label="B" onChange={() => clickCheckedB()} checked={checkedB}
                />
              </TableCell>
              <TableCell>体術</TableCell>
              <TableCell size="small">
                <CheckBox
                  label="C" onChange={() => clickCheckedC()} checked={checkedC}
                />
              </TableCell>
              <TableCell>忍術</TableCell>
              <TableCell size="small">
                <CheckBox
                  label="D" onChange={() => clickCheckedD()} checked={checkedD}
                />
              </TableCell>
              <TableCell>謀術</TableCell>
              <TableCell size="small">
                <CheckBox
                  label="E" onChange={() => clickCheckedE()} checked={checkedE}
                />
              </TableCell>
              <TableCell>戦術</TableCell>
              <TableCell size="small">
                <CheckBox
                  label="F" onChange={() => clickCheckedF()} checked={checkedF}
                />
              </TableCell>
              <TableCell>妖術</TableCell>
              <TableCell size="small"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {talentsData.length > 0 && (
              talentsData.map((talentData, index) => {
                return (
                  <TableRow key={index}>
                    {(index === 11) ? (
                      <>
                        <TableCell padding="none" className={classes.tableCell}>
                          <ClickButton className={classes.button} color={checkedG ? "primary" : "default"} fullWidth={false} label={""} />
                        </TableCell>
                        <TableCell padding="none" className={classes.tableCell}>
                          <ClickButton className={classes.button} color={checkedG ? "primary" : "default"} fullWidth={false} label={""} />
                        </TableCell>
                        <TableCell padding="none" className={classes.tableCell}>
                          <ClickButton className={classes.button} color={checkedG ? "primary" : "default"} fullWidth={false} label={""} />
                        </TableCell>
                        <TableCell padding="none" className={classes.tableCell}>
                          <ClickButton className={classes.button} color={checkedG ? "primary" : "default"} fullWidth={false} label={""} />
                        </TableCell>
                        <TableCell padding="none" className={classes.tableCell}>
                          <ClickButton className={classes.button} color={checkedG ? "primary" : "default"} fullWidth={false} label={""} />
                        </TableCell>
                        <TableCell padding="none" className={classes.tableCell}>
                          <ClickButton className={classes.button} color={checkedG ? "primary" : "default"} fullWidth={false} label={""} />
                        </TableCell>
                        <TableCell padding="none" className={classes.tableCell}>
                          <ClickButton className={classes.button} color={checkedG ? "primary" : "default"} fullWidth={false} label={""} />
                        </TableCell>
                        <TableCell padding="none" className={classes.tableCell}>
                          <ClickButton className={classes.button} color={checkedG ? "primary" : "default"} fullWidth={false} label={""} />
                        </TableCell>
                        <TableCell padding="none" className={classes.tableCell}>
                          <ClickButton className={classes.button} color={checkedG ? "primary" : "default"} fullWidth={false} label={""} />
                        </TableCell>
                        <TableCell padding="none" className={classes.tableCell}>
                          <ClickButton className={classes.button} color={checkedG ? "primary" : "default"} fullWidth={false} label={""} />
                        </TableCell>
                        <TableCell padding="none" className={classes.tableCell}>
                          <ClickButton className={classes.button} color={checkedG ? "primary" : "default"} fullWidth={false} label={""} />
                        </TableCell>
                        <TableCell padding="none" className={classes.tableCell}>
                          <ClickButton className={classes.button} color={checkedG ? "primary" : "default"} fullWidth={false} label={""} />
                        </TableCell>
                        <TableCell padding="none" className={classes.tableCell}>
                          <CheckBox
                            label="G" onChange={() => clickCheckedG()} checked={checkedG}
                          />
                        </TableCell>
                      </>
                    ) : (
                        <>
                          <TableCell padding="none" className={classes.tableCell}>
                            <ClickButton
                              className={classes.button} color={checkedA ? "primary" : "default"} fullWidth={false} label={""}
                            />
                          </TableCell>
                          <TableCell padding="none" className={classes.tableCell}>
                            <ClickButton
                              className={classes.button} color={talents[index][0] ? "primary" : "default"}
                              fullWidth={true} label={talentData[1]} onClick={() => clickTalent(index, 0)}
                            />
                          </TableCell>
                          <TableCell padding="none" className={classes.tableCell}>
                            <ClickButton
                              className={classes.button} color={checkedB ? "primary" : "default"} fullWidth={false} label={""}
                            />
                          </TableCell>
                          <TableCell padding="none" className={classes.tableCell}>
                            <ClickButton
                              className={classes.button} color={talents[index][1] ? "primary" : "default"}
                              fullWidth={true} label={talentData[3]} onClick={() => clickTalent(index, 1)}
                            />
                          </TableCell>
                          <TableCell padding="none" className={classes.tableCell}>
                            <ClickButton
                              className={classes.button} color={checkedC ? "primary" : "default"} fullWidth={false} label={""}
                            />
                          </TableCell>
                          <TableCell padding="none" className={classes.tableCell}>
                            <ClickButton
                              className={classes.button} color={talents[index][2] ? "primary" : "default"}
                              fullWidth={true} label={talentData[5]} onClick={() => clickTalent(index, 2)}
                            />
                          </TableCell>
                          <TableCell padding="none" className={classes.tableCell}>
                            <ClickButton
                              className={classes.button} color={checkedD ? "primary" : "default"} fullWidth={false} label={""}
                            />
                          </TableCell>
                          <TableCell padding="none" className={classes.tableCell}>
                            <ClickButton
                              className={classes.button} color={talents[index][3] ? "primary" : "default"}
                              fullWidth={true} label={talentData[7]} onClick={() => clickTalent(index, 3)}
                            />
                          </TableCell>
                          <TableCell padding="none" className={classes.tableCell}>
                            <ClickButton
                              className={classes.button} color={checkedE ? "primary" : "default"} fullWidth={false} label={""}
                            />
                          </TableCell>
                          <TableCell padding="none" className={classes.tableCell}>
                            <ClickButton
                              className={classes.button} color={talents[index][4] ? "primary" : "default"}
                              fullWidth={true} label={talentData[9]} onClick={() => clickTalent(index, 4)}
                            />
                          </TableCell>
                          <TableCell padding="none" className={classes.tableCell}>
                            <ClickButton
                              className={classes.button} color={checkedF ? "primary" : "default"} fullWidth={false} label={""}
                            />
                          </TableCell>
                          <TableCell padding="none" className={classes.tableCell}>
                            <ClickButton
                              className={classes.button} color={talents[index][5] ? "primary" : "default"}
                              fullWidth={true} label={talentData[11]} onClick={() => clickTalent(index, 5)}
                            />
                          </TableCell>
                          <TableCell padding="none" className={classes.tableCell}>
                            <ClickButton
                              className={classes.button} color={"default"} fullWidth={true} label={talentData[12]}
                            />
                          </TableCell>
                        </>
                      )}
                  </TableRow>
                )
              }))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};