import axios from 'axios';

const USER_API_BASE_URL = "https://bee4-105-66-134-152.ngrok-free.app/api/center";


const CenterService = (token) => {
  const getCenters = async () => {
    try {
      const response = await axios.get(`${USER_API_BASE_URL}/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching centers:', error);
    }
  };


  const getCenter = async (id) => {
    try {
      const response = await axios.get(`${USER_API_BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching center:', error);
    }
  };

  const createCenter = async (centerData) => {
    try {
      const response = await axios.post(`${USER_API_BASE_URL}/`, centerData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      throw new Error('Error creating center:', error);
    }
  };

  const deleteCenter = async (id) => {
    try {
      const response = await axios.delete(`${USER_API_BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      throw new Error('Error deleting center:', error);
    }
  };

  const updateCenter = async (id, centerData) => {
    try {
      const response = await axios.patch(`${USER_API_BASE_URL}/${id}`, centerData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      throw new Error('Error updating center:', error);
    }
  };

  return {
    getCenters,
    getCenter,
    createCenter,
    deleteCenter,
    updateCenter
  };
};

export default CenterService;