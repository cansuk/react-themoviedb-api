import { constants } from "../constants.js";
import axios from 'axios';

const { apiUrl, apiKey } = constants;

/**
 * https://developers.themoviedb.org/3/search/search-movies
 * /search/movie
 * https://api.themoviedb.org/3/search/movie?api_key=<apikey>query=fight
 * @param params (criterias)
 * @return promise
 */
const getMoviesByCriteria = async (params) => new Promise(async (resolve, reject) => {
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

export const searchServices = { getMoviesByCriteria };


/**
 * https://developers.themoviedb.org/3/genres/get-movie-list
 * /genre/movie/list
 * https://api.themoviedb.org/3/genre/movie/list?api_key=<apikey> 
 * @return promise
 */
const getGenres = async () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios.get(`${apiUrl}/genre/movie/list?api_key=${apiKey}`);
        if (response.status === 200) {
            window.genres = response.data.genres;
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


/**
 * https://developers.themoviedb.org/3/movies/get-movie-details
 * /movie/{movieId}
 * https://api.themoviedb.org/3/genre/movie/{movieId}?api_key=<apikey>
 * @param params (movie id)
 * @return promise
 */
const getMovieById = async (params) => new Promise(async (resolve, reject) => {
    const { movieId } = params;
    try {
        const response = await axios.get(`${apiUrl}/movie/${movieId}?api_key=${apiKey}`);
        if (response.status === 200) {
            resolve(response.data);
        } else {
            reject(response.statusText);
        }
    } catch (error) {
        debugger;
        console.error(error);
        reject(error);
    }
});

export const movieServices = { getMovieById };