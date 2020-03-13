import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = ({ clickedMovies, clickedShows }) => {
	const style = {
		fontWeight: "bold",
		borderTop: "7px solid rgb(224, 221, 221)"
	};
	return (
		<ul className={styles.NavBar}>
			<li onClick={() => clickedMovies()}>
				<NavLink
					to="/movies"
					activeStyle={style}
					className={styles.NavLink}
				>
					Movies
				</NavLink>
			</li>
			<li onClick={() => clickedShows()}>
				<NavLink
					to="/tv-shows"
					activeStyle={style}
					className={styles.NavLink}
				>
					TV Shows
				</NavLink>
			</li>
		</ul>
	);
};

export default NavBar;
