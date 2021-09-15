import apiClient from "../helpers/apiClient";

class UsersService {
	getAllUsers = () => apiClient().get("posts");
}

export default new UsersService();
