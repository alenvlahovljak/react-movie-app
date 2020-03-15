import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actionCreators from "../../store/actions";
import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";

import styles from "./Header.module.css";

class Header extends Component {
	componentDidMount() {
		const pathname = this.props.location.pathname;
		if (pathname === "/movies") this.props.onMovies();
		if (pathname === "/tv-shows") this.props.onShows();
	}
	render() {
		return (
			<header className={styles.Header}>
				<NavBar
					clickedMovies={this.props.onMovies}
					clickedShows={this.props.onShows}
				/>
				<SearchBar />
			</header>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onMovies: () => dispatch(actionCreators.top10Movies()),
		onShows: () => dispatch(actionCreators.top10Shows())
	};
};

export default connect(null, mapDispatchToProps)(withRouter(Header));
