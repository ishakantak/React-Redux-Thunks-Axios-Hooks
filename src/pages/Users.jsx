import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersAsync } from "../redux/reducers/users/users.thunks";

const UserListing = () => {
	const dispatch = useDispatch();
	const { isLoading, posts, errorMessage } = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(loadUsersAsync());
	}, []);

	return (
		<div>
			<h1>User Listing</h1>
			{isLoading && <h3>Loading...</h3>}
			{errorMessage && <h3>{errorMessage}</h3>}
			{posts && posts.map((user) => <h5 key={user.id}>{user.title}</h5>)}
		</div>
	);
};

export default UserListing;
