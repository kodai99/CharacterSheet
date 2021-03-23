import React from 'react'
import { Header } from "./components/Header/Header";
import { Router } from "./Router";
import { makeStyles } from '@material-ui/core/styles';
import "./assets/styles/style.css";

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "0 auto",
    width: "100%",
    maxWidth: "1200px",
  },
}));

export const App = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>
        <Router />
      </main>
    </>
  );
};