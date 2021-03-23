import React from 'react'
import { Switch, Route } from "react-router";
import { Auth } from "./Auth";
import { SignUp } from "./templates/SignUp";
import { Reset } from "./templates/Reset";
import { LogIn } from "./templates/Login";
import { CharacterList } from "./templates/CharacterList";
import { Home } from "./templates/Home";
import { CharacterEdit } from "./templates/CharacterEdit";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/reset" component={Reset} />
      <Route exact path="/login" component={LogIn} />
      <Auth>
        <Route exact path="(/)?" component={CharacterList} />
        <Route path="/character/edit(/:id)?" component={CharacterEdit} />
      </Auth>
    </Switch>
  );
};