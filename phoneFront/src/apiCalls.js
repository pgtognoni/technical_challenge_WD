import axios from 'axios';
const BACK_URL = import.meta.env.VITE_BACK_URL;

export const getphones = async () => {
    const response = await axios.get(`${BACK_URL}/api/phones`)
    return response;
}

export const getOnePhone = async (id) => { 
    console.log(id)
    const response = await axios.get(`${BACK_URL}/api/phones/${id}`)
    return response;
}