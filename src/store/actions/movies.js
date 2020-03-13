import axios from "axios";

import { top10MoviesAPI, movieQueryAPI } from "../../config/apis";
import * as actionTypes from "./actionTypes";

const handleResult = res => {
	return {
		type: actionTypes.TOP_10_MOVIES,
		payload: res.slice(0, 10)
	};
};

const handleQuery = res => {
	return {
		type: actionTypes.SEARCH_MOVIE,
		payload: res
	};
};

export const top10Movies = () => {
	return dispatch => {
		axios
			.get(top10MoviesAPI)
			.then(res => {
				dispatch(handleResult(res.data.results));
			})
			.catch(err => {
				dispatch(handleResult(err));
			});
	};
};

export const searchMovies = query => {
	return dispatch => {
		axios
			.get(`${movieQueryAPI}&query=${query}`)
			.then(res => {
				dispatch(handleQuery(res.data.results));
			})
			.catch(err => {
				dispatch(handleResult(err));
			});
	};
};
