import * as actionTypes from "../actions/actionTypes";

const initalState = {
	showsArr: ["Loading"]
};

const showsReducer = (state = initalState, action) => {
	if (action.type === actionTypes.TOP_10_SHOWS) {
		return {
			showsArr: action.payload
		};
	}
	if (action.type === actionTypes.SEARCH_SHOWS) {
		return {
			showsArr: action.payload
		};
	}
	return state;
};

export default showsReducer;
