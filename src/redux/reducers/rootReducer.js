import { combineReducers } from "redux";
import usersReducer from "./users/users.reducer";

const rootReducer = () =>
	combineReducers({
		posts: usersReducer,
	});

export default rootReducer;
