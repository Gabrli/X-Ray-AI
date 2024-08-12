import axios from "axios"

export const MAIN_QUERY = async (img:string) => {
    const prompt = await axios.post('/ai-prompt', {
        img: img
    }).then((res) => {
        return res.data
    })
    return prompt
}