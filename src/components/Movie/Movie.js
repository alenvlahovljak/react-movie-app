import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { imgAPI } from "../../config/apis";

import styles from "./Movie.module.css";

function Movie({ index, title, backgroundImg }) {
	const history = useHistory();
	const [imgURLMovie, setURLMovie] = useState({ baseURL: "", width: "" });

	useEffect(() => {
		let isMounted = true;
		axios.get(imgAPI).then(({ data }) => {
			if (isMounted) {
				const { images } = data;
				setURLMovie({
					baseURL: images.base_url,
					width: images.poster_sizes[4]
				});
			}
		});
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<div
			className={styles.Movie}
			onClick={() => history.push(`/movies/${index}`)}
		>
			<img
				src={imgURLMovie.baseURL + imgURLMovie.width + backgroundImg}
				alt={`${title}'s cover`}
				className={styles.Image}
			/>
			<h3>{title}</h3>
		</div>
	);
}

export default Movie;
