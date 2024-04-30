import axios from 'axios';

const USER_API_BASE_URL = "https://37db-105-66-7-134.ngrok-free.app/api/user";



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

  const getUser = async (id) => {
    try {
      const response = await axios.get(`${USER_API_BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching user:', error);
    }
  };
  const getUserByEmail = async (email) => {
    try {
      const response = await axios.get(`${USER_API_BASE_URL}/email/${email}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching user details:', error);
    }
  };

  const changeUserRole = async (id, role) => {
    try {
      const response = await axios.patch(`${USER_API_BASE_URL}/changeUserRole/${id}`, { role }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      throw new Error('Error changing user role:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${USER_API_BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      throw new Error('Error deleting user:', error);
    }
  };


  return {
    getUsers,
    getUser,
    getUserByEmail,
    changeUserRole,
    deleteUser
  };
};

export default UserService;
