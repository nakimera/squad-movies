import axios from 'axios';

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;

function errorHandler(error) {
    const statusCode = error.response.status;
    if(statusCode !== 200){
        alert('Ooops! You do not seem to be authourized to view movies on this app. Double check your API KEY or consult owner');  
    }
    return error;
}

export function fetchMovies(){
    return axios.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
        return res.data;
    })
    .catch(error => {return  errorHandler(error)});
}

export function fetchGenres(){
    return axios.get(`/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
        return res.data.genres;
    })
    .catch(error => {return  errorHandler(error)});
}

export function searchMovies(debouncedSearchTerm, type){
    return axios.get(`${type === 'text' ? `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${debouncedSearchTerm}` : 
        `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&primary_release_year=${debouncedSearchTerm}`}`)
    .then(res => {
        return res.data;
    })
    .catch(error => {return  errorHandler(error)});
}
