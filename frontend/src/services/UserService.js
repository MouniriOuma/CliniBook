import axios from 'axios';

const USER_API_BASE_URL = "https://8d05-105-71-134-248.ngrok-free.app/api/user";


const UserService = (token) => {
  const getUsers = async () => {
    try {
      const response = await axios.get(`${USER_API_BASE_URL}/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching users:', error);
    }
  };

  return {
    getUsers
  };
};

export default UserService;

/* 

  // getUsers(token) {
  //   return axios.get(`${USER_API_BASE_URL}/`, { headers: { Authorization: `Bearer ${this.token}` } });
  // }

  export const getUsers = async (token) => {
    const response = await axios.get(`${USER_API_BASE_URL}/`, { headers: { Authorization: `Bearer ${this.token}` } });
  } 

  // getUser(id) {
  //   return axios.get(`${USER_API_BASE_URL}/${id}`, { headers: { Authorization: `Bearer ${this.token}` } });
  // }

  // loginUser(user) {
  //   return axios.post(`${USER_API_BASE_URL}/login`, user);
  // }

  // signup(user) {
  //   return axios.post(`${USER_API_BASE_URL}/signup`, user);
  // }

  // changeUserRole(id, role) {
  //   return axios.patch(`${USER_API_BASE_URL}/changeUserRole/${id}`, { role }, { headers: { Authorization: `Bearer ${this.token}` } });
  // }

  // deleteUser(id) {
  //   return axios.delete(`${USER_API_BASE_URL}/${id}`, { headers: { Authorization: `Bearer ${this.token}` } });
  // }


 */