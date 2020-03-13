import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actionCreators from "../../store/actions";

import styles from "./SearchBar.module.css";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ""
		};
	}

	onChangeInputHandler = event => {
		this.setState({ query: event.target.value });
	};

	onSubmitHandler = event => {
		event.preventDefault();
		const pathname = this.props.location.pathname;
		if (pathname === "/movies") this.props.onMoviesSearch(this.state.query);
		if (pathname === "/tv-shows") this.props.onShowsSearch(this.state.query);
	};

	render() {
		return (
			<form onSubmit={this.onSubmitHandler}>
				<input
					className={styles.input}
					type="text"
					placeholder="search"
					onChange={this.onChangeInputHandler}
					value={this.state.query}
				></input>
			</form>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onMoviesSearch: query => dispatch(actionCreators.searchMovies(query)),
		onShowsSearch: query => dispatch(actionCreators.searchShows(query))
	};
};

export default connect(null, mapDispatchToProps)(withRouter(SearchBar));
