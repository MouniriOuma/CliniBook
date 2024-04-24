import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:4000/api/user";

class UserService {
  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }

  getUser(id) {
    return axios.get(USER_API_BASE_URL+ '/' + id);
  }

  loginUser(user) {
    return axios.post(USER_API_BASE_URL+ '/login', user);
  }

  signup(user) {
    return axios.post(USER_API_BASE_URL+ '/signup', user);
  }

  changeUserRole(id, role) {
    return axios.patch(USER_API_BASE_URL+ '/changeUserRole/' + id, {role});
  }
  
  deleteUser(id) {
    return axios.delete(USER_API_BASE_URL + '/' + id);
  }
}

export default new UserService();