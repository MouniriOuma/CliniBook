import axios from 'axios';

const USER_API_BASE_URL = "https://bee4-105-66-134-152.ngrok-free.app/api/timeSlot";

const TimeSlotService = (token) => {
    const getTimeSlots = async () => {
    try {
    const response = await axios.get(`${USER_API_BASE_URL}/`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
    } catch (error) {
    throw new Error('Error fetching timeslots:', error);
    }
};

const getTimeSlot = async (id) => {
    try {
    const response = await axios.get(`${USER_API_BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
    } catch (error) {
    throw new Error('Error fetching timeslot:', error);
    }
};

const createTimeSlot = async (timeSlotData) => {
    try {
    const response = await axios.post(`${USER_API_BASE_URL}/`, timeSlotData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
    } catch (error) {
    throw new Error('Error creating timeslot:', error);
    }
};

const deleteTimeSlot = async (id) => {
    try {
    const response = await axios.delete(`${USER_API_BASE_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
    } catch (error) {
    throw new Error('Error deleting timeslot:', error);
    }
};

const updateTimeSlot = async (id, timeSlotData) => {
    try {
    const response = await axios.patch(`${USER_API_BASE_URL}/${id}`, timeSlotData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
    } catch (error) {
    throw new Error('Error updating timeslot:', error);
    }
};

return {
    getTimeSlots,
    getTimeSlot,
    createTimeSlot,
    deleteTimeSlot,
    updateTimeSlot
};
};

export default TimeSlotService;
