import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { imgAPI } from "../../config/apis";

import styles from "./ShowMovie.module.css";

function ShowMovie(props) {
	const [imgURLMovie, setURLMovie] = useState({ baseURL: "", width: "" });
	const history = useHistory();

	const { id } = props.match.params;
	const movie = props.movies.filter((movie, i) => {
		if (i == id) return movie;
	});

	useEffect(() => {
		let isMounted = true;
		axios.get(imgAPI).then(({ data }) => {
			if (isMounted) {
				const { images } = data;
				setURLMovie({
					baseURL: images.base_url,
					width: images.logo_sizes[4]
				});
			}
		});
		return () => {
			isMounted = false;
		};
	}, []);

	const { title, backdrop_path, overview } = movie[0];
	return (
		<div className={styles.ShowMovie}>
			<button onClick={() => history.goBack()} className={styles.NavLink}>
				&lt; Back
			</button>
			<div className={styles.Movie}>
				<img
					src={imgURLMovie.baseURL + imgURLMovie.width + backdrop_path}
					alt={`${title}'s cover`}
					className={styles.Image}
				/>
				<h3 className={styles.H3}>{title}</h3>
				<p className={styles.P}>{overview}</p>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		movies: state.movies.moviesArr
	};
};

export default connect(mapStateToProps)(ShowMovie);
