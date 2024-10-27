import axios from "axios";

export const ANALYSIS_POST_QUERY = async (formData: FormData) => {
  return await axios.post(`http://127.0.0.1:8000/prompt`, formData);
};
