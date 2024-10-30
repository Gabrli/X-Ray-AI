import axios from "axios";

export const ANALYSIS_POST_QUERY = async (formData: FormData) => {
  return await axios.post(`https://x-ray-iq-4now.vercel.app/prompt`, formData);
};
