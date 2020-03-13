import axios from "axios";

import { top10ShowsAPI, showQueryAPI } from "../../config/apis";
import * as actionTypes from "./actionTypes";

const handleResult = res => {
	return {
		type: actionTypes.TOP_10_SHOWS,
		payload: res.slice(0, 10)
	};
};

const handleQuery = res => {
	return {
		type: actionTypes.SEARCH_SHOWS,
		payload: res
	};
};

export const top10Shows = () => {
	return dispatch => {
		axios
			.get(top10ShowsAPI)
			.then(res => {
				dispatch(handleResult(res.data.results));
			})
			.catch(err => {
				dispatch(handleResult(err));
			});
	};
};

export const searchShows = query => {
	return dispatch => {
		axios
			.get(`${showQueryAPI}&query=${query}`)
			.then(res => {
				dispatch(handleQuery(res.data.results));
			})
			.catch(err => {
				dispatch(handleResult(err));
			});
	};
};
