import { constants } from "../constants.js";
import axios from 'axios';

const { apiUrl, apiKey } = constants;

// https://api.themoviedb.org/3/genre/movie/list?api_key=09032c94c551d095d7178ff7f11b3c16

const getGenres = async () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios.get(`${apiUrl}/genre/movie/list?api_key=${apiKey}`);
        if (response.status === 200) {
            resolve(response.data.genres);
        } else {
            reject(response.statusText);
        }
    } catch (error) {
        debugger;
        console.error(error);
        reject(error);
    }
});

export const genreServices = { getGenres };
