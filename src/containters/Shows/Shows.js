import React, { Component } from "react";
import { connect } from "react-redux";

import Show from "../../components/Show/Show";

import styles from "./Shows.module.css";

class Shows extends Component {
	render() {
		const shows = this.props.showsArr.map((show, index) => (
			<Show
				key={index}
				index={index}
				title={show.original_name}
				backgroundImg={show.backdrop_path}
			/>
		));
		return <div className={styles.Shows}>{shows}</div>;
	}
}

const mapStateToProps = state => {
	return {
		showsArr: state.shows.showsArr
	};
};

export default connect(mapStateToProps)(Shows);
