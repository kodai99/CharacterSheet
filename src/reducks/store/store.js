import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { usersReducer } from "../users/reducers";
import { charactersReducer } from "../characters/reducers";

export const createStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: usersReducer,
      characters: charactersReducer,
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
  )
};