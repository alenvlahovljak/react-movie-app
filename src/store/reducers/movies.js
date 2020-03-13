import * as actionTypes from "../actions/actionTypes";

const initalState = {
	moviesArr: ["Loading"]
};

const moviesReducer = (state = initalState, action) => {
	if (action.type === actionTypes.TOP_10_MOVIES) {
		return {
			moviesArr: action.payload
		};
	}
	if (action.type === actionTypes.SEARCH_MOVIE) {
		return {
			moviesArr: action.payload
		};
	}
	return state;
};

export default moviesReducer;
