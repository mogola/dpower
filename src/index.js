import React from "react";
import ReactDOM from "react-dom";
import(/* webpackPreload: true */ 'react-bulma-components/dist/react-bulma-components.min.css');
import (/* webpackPreload: true */ "./scss/home.scss");
import App from "./App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.register();