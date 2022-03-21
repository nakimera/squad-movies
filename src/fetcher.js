import axios from 'axios';

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;

export function fetchMovies() {
    return axios.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
        return res.data;
    })
    .catch(function (error) {
        const statusCode = error.response.status;
        if(statusCode !== 200){
            alert('Ooops! You do not seem to be authourized to view movies on this app. Double check your API KEY or consult owner');
        }
        return error;
    });
}
