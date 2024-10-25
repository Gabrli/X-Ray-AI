import axios from "axios";

export const ANALYSIS_POST_QUERY = async () => {
     return await axios.post('http://127.0.0.1:8000/prompt/')
}

export const ANALYSIS_GET_QUERY = axios.get('/api/')