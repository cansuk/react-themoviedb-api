import { constants } from "../constants.js";
import axios from 'axios';

const { apiUrl, apiKey } = constants;

// https://api.themoviedb.org/3/search/movie?api_key=09032c94c551d095d7178ff7f11b3c16&query=fight

const getMovies = async (params) => new Promise(async (resolve, reject) => {
    const { query } = params;
    try {
        const response = await axios.get(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`);
        if (response.status === 200) {
            resolve(response.data.results);
        } else {
            reject(response.statusText);
        }
    } catch (error) {
        debugger;
        console.error(error);
        reject(error);
    }
});

export const movieServices = { getMovies };
