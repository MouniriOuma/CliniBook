import axios from 'axios';

const USER_API_BASE_URL = "https://37db-105-66-7-134.ngrok-free.app/api/appointment";

const AppointmentService = (token) => {
    const getAppointments = async () => {
    try {
    const response = await axios.get(`${USER_API_BASE_URL}/`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
    } catch (error) {
    throw new Error('Error fetching appointments:', error);
    }
};

const getAppointment = async (id) => {
    try {
    const response = await axios.get(`${USER_API_BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
    } catch (error) {
    throw new Error('Error fetching appointment:', error);
    }
};

const createAppointment = async (appointmentData) => {
    try {
        // console.log(appointmentData)
    const response = await axios.post(`${USER_API_BASE_URL}/`, appointmentData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
    } catch (error) {
    throw new Error('Error creating appointment:', error);
    }
};

const deleteAppointment = async (id) => {
    try {
    const response = await axios.delete(`${USER_API_BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
    } catch (error) {
    throw new Error('Error deleting appointment:', error);
    }
};

const updateAppointment = async (id, appointmentData) => {
    try {
    const response = await axios.patch(`${USER_API_BASE_URL}/${id}`, appointmentData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
    } catch (error) {
    throw new Error('Error updating appointment:', error);
    }
};

return {
    getAppointments,
    getAppointment,
    createAppointment,
    deleteAppointment,
    updateAppointment
};
};

export default AppointmentService;
