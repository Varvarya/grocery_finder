import { createSlice } from '@reduxjs/toolkit';

import {createExtraReducers, createReducers} from "./auth.reducers";
import {createInitialState} from "./auth.state";
import {createExtraActions} from "./auth.actions";

// create slice

const name = 'auth';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

// exports

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

