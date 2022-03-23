### Squad Movies Page

Squad Movies 

The page enables users to search for movies as keywords are typed into the search bar.
It is built with:
- `axios`
- `sass`
- `react-router-dom`
- `styled-components`

It consumes the [theMovieDB](https://developers.themoviedb.org/3/) api

### Demo

![demo (2)](https://user-images.githubusercontent.com/31965597/159656732-0a136732-0a15-431d-ad42-c478d04f3d33.gif)


### Installation and Setup Instructions

Clone this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

Add environments
- Rename `.env.example` file to `.env`
- Generate and add [MovieBD api_key](https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id)
- Update .env file with your `api_key`

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/discover`  

Search movies by keyword and year in the searchbars provided
