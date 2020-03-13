import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { imgAPI } from "../../config/apis";

import styles from "./ShowShow.module.css";

function ShowShow(props) {
	const [imgURLShow, setURLShow] = useState({ baseURL: "", width: "" });
	const history = useHistory();

	const { id } = props.match.params;
	const show = props.shows.filter((show, i) => {
		if (i == id) return show;
	});

	useEffect(() => {
		let isMounted = true;
		axios.get(imgAPI).then(({ data }) => {
			if (isMounted) {
				const { images } = data;
				setURLShow({
					baseURL: images.base_url,
					width: images.poster_sizes[4]
				});
			}
		});
		return () => {
			isMounted = false;
		};
	}, []);

	const { title, backdrop_path, overview } = show[0];

	return (
		<div className={styles.ShowShow}>
			<button onClick={() => history.goBack()} className={styles.NavLink}>
				&lt; Back
			</button>
			<div className={styles.Movie}>
				<img
					src={imgURLShow.baseURL + imgURLShow.width + backdrop_path}
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
		show: state.show.showsArr
	};
};

export default connect(mapStateToProps)(ShowShow);
