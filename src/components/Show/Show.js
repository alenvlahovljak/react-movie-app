import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { imgAPI } from "../../config/apis";

import styles from "./Show.module.css";

function Movie({ index, title, backgroundImg }) {
	const history = useHistory();
	const [imgURLShow, setURLShow] = useState({ baseURL: "", width: "" });

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

	return (
		<div
			className={styles.Show}
			onClick={() => history.push(`/movies/${index}`)}
		>
			<img
				src={imgURLShow.baseURL + imgURLShow.width + backgroundImg}
				alt={`${title}'s cover`}
				className={styles.Image}
			/>
			<h3>{title}</h3>
		</div>
	);
}

export default Movie;
