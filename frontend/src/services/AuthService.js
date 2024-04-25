import axios from 'axios';

const USER_API_BASE_URL = "https://8d05-105-71-134-248.ngrok-free.app/api/user";

class AuthService {
    
    loginUser(user) {
      return axios.post(USER_API_BASE_URL+ '/login', user);
    }
  
    signup(user) {
      return axios.post(USER_API_BASE_URL+ '/signup', user);
    }
  
  }
  
  export default new AuthService();

// const AuthService = () => {
//   const loginUser = async (user) => {
//     try {
//       const response = await axios.post(`${USER_API_BASE_URL}/login`, { user });
//       return response.data;
//     } catch (error) {
//       throw new Error('Error logging in:', error);
//     }
//   };

//   const signup = async (user) => {
//     try {
//       const user = { user };
//       const response = await axios.post(`${USER_API_BASE_URL}/signup`, user);
//       return response.data;
//     } catch (error) {
//       throw new Error('Error signing up:', error);
//     }
//   };

//   return {
//     loginUser,
//     signup
//   };
// };



//export default AuthService;
