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
    ["", "?????????", "", "?????????", "", "?????????", "", "??????", "", "?????????", "", "?????????", "2"],
    ["", "??????", "", "??????", "", "?????????", "", "??????", "", "?????????", "", "?????????", "3"],
    ["", "??????", "", "????????????", "", "?????????", "", "??????", "", "?????????", "", "?????????", "4"],
    ["", "??????", "", "??????", "", "?????????", "", "?????????", "", "?????????", "", "?????????", "5"],
    ["", "?????????", "", "????????????", "", "?????????", "", "??????", "", "??????", "", "??????", "6"],
    ["", "?????????", "", "??????", "", "?????????", "", "?????????", "", "?????????", "", "?????????", "7"],
    ["", "??????", "", "??????", "", "?????????", "", "??????", "", "?????????", "", "??????", "8"],
    ["", "??????", "", "??????", "", "??????", "", "???????????????", "", "?????????", "", "??????", "9"],
    ["", "?????????", "", "?????????", "", "????????????", "", "????????????", "", "?????????", "", "???????????????", "10"],
    ["", "?????????", "", "??????", "", "?????????", "", "????????????", "", "?????????", "", "?????????", "11"],
    ["", "?????????", "", "??????", "", "?????????", "", "?????????", "", "??????", "", "??????", "12"],
    ["", "", "", "", "", "", "", "", "", "", "", "", ""],
  ];

  return (
    <div>
      <h2>????????????</h2>
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
              <TableCell>??????</TableCell>
              <TableCell size="small">
                <CheckBox
                  label="B" onChange={() => clickCheckedB()} checked={checkedB}
                />
              </TableCell>
              <TableCell>??????</TableCell>
              <TableCell size="small">
                <CheckBox
                  label="C" onChange={() => clickCheckedC()} checked={checkedC}
                />
              </TableCell>
              <TableCell>??????</TableCell>
              <TableCell size="small">
                <CheckBox
                  label="D" onChange={() => clickCheckedD()} checked={checkedD}
                />
              </TableCell>
              <TableCell>??????</TableCell>
              <TableCell size="small">
                <CheckBox
                  label="E" onChange={() => clickCheckedE()} checked={checkedE}
                />
              </TableCell>
              <TableCell>??????</TableCell>
              <TableCell size="small">
                <CheckBox
                  label="F" onChange={() => clickCheckedF()} checked={checkedF}
                />
              </TableCell>
              <TableCell>??????</TableCell>
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