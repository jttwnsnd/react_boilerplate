console.log("it works")

import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home";

class App extends React.Component {
  render() {
		return (
			<div>
        <Home/>
			</div>
		);
	}
}
render(<App/>, window.document.getElementById("app"));
