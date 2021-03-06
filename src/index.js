/* Entry file for rendering React App */
/* Dependences related to Index */
import 'core-js/fn/map';
import 'core-js/fn/set';

import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/app/App.js";

/* Index styles file import "Global Styles" */
import './index.scss';

ReactDOM.render(<App />, document.getElementById("hp-app"));