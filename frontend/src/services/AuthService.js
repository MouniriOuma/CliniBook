import axios from 'axios';

const USER_API_BASE_URL = "https://bee4-105-66-134-152.ngrok-free.app/api/user";

class AuthService {
    
    loginUser(user) {
      return axios.post(USER_API_BASE_URL+ '/login', user);
    }
  
    signup(user) {
      return axios.post(USER_API_BASE_URL+ '/signup', user);
    }
  
  }
  
  export default new AuthService();