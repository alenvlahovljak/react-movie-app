import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Header from "./containters/Header/Header";
import Movies from "./containters/Movies/Movies";
import Shows from "./containters/Shows/Shows";
import ShowMovie from "./components/ShowMovie/ShowMovie";
import ShowShow from "./components/ShowShow/ShowShow";

import "./App.css";

class App extends Component {
	handleRedner = () => {
		const pathname = this.props.location.pathname;
		if (pathname === "/movies" || pathname === "/tv-shows") return <Header />;
	};
	render() {
		return (
			<div className="App">
				<Route exact path="/">
					<Redirect to="/tv-shows" />
				</Route>
				{this.handleRedner()}
				<Switch>
					<Route exact path="/movies" component={Movies} />
					<Route exact path="/tv-shows" component={Shows} />
					<Route exact path="/movies/:id" component={ShowMovie} />
					<Route exact path="/tv-shows/:id" component={ShowShow} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
