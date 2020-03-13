import React, { Component } from "react";
import { connect } from "react-redux";

import Movie from "../../components/Movie/Movie";

import styles from "./Movies.module.css";

class Movies extends Component {
	render() {
		const movies = this.props.moviesArr.map((movie, index) => (
			<Movie
				key={index}
				index={index}
				title={movie.title}
				backgroundImg={movie.backdrop_path}
			/>
		));
		return <div className={styles.Movies}>{movies}</div>;
	}
}

const mapStateToProps = state => {
	return {
		moviesArr: state.movies.moviesArr
	};
};

export default connect(mapStateToProps)(Movies);
