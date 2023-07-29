import axios from "axios"

export async function getData(url) {
    try {
        return await axios.get(url);
    } catch (error) {
        console.error('Error', error);
    }
}