import actionTypes from "./users.actionTypes";
import initialState from "./users.initialState";

const usersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.USERS_LOAD_START:
			return {
				...state,
				isLoading: true,
				posts: null,
				errorMessage: null,
			};

		case actionTypes.USERS_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				posts: payload,
			};

		case actionTypes.USERS_LOAD_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: payload,
			};

		default:
			return state;
	}
};

export default usersReducer;
