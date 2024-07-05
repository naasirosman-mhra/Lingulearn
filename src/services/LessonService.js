
import axios from 'axios';

const API_URL = 'https://api.example.com/lessons';

export const fetchLessons = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching lessons:', error);
    throw error;
  }
};
