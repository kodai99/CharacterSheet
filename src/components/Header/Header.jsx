import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logOut } from "../../reducks/users/operations";
import { getIsSignedIn } from "../../reducks/users/selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "70px"
  },
  toolBar: {
    margin: "0 auto",
    width: "100%",
    maxWidth: "1200px"
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
  button: {
    marginRight: "30px"
  }
}));

export const Header = () => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getIsSignedIn(selector);

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="fixed">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title} onClick={() => dispatch(push("/"))}>
            TRPGステーション
          </Typography>
          {isSignedIn && (
            <Button className={classes.button} color="secondary" onClick={() => dispatch(logOut())} > Logout</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};