### Squad Movies Page

Squad Movies 

The page enables users to search for movies as keywords are typed into the search bar.
It is built with:
- `axios`
- `sass`
- `react-router-dom`
- `styled-components`

It consumes the [theMovieDB](https://developers.themoviedb.org/3/) api

### Project ScreenShot(s)

![Screenshot 2022-03-22 at 21 39 45](https://user-images.githubusercontent.com/31965597/159552599-f9117fb0-8c80-4f47-962f-f32a0cb8a331.png)

![Screenshot 2022-03-22 at 21 40 09](https://user-images.githubusercontent.com/31965597/159552669-5d4388de-f9fe-4c18-8663-d49218555430.png)


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
