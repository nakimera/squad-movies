import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import { fetchMovies } from "./fetcher";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('throws error for unauthourized users', () => {
  // expect(() => fetchMovies()))
})

it('returns movies data', () => {

});
