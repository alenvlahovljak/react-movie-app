export const api = "https://api.themoviedb.org/3";
export const API_KEY = "839530a44a3c70edac784b422bbf60e4";

export const imgAPI = `${api}/configuration?api_key=${API_KEY}`;

export const top10ShowsAPI = `${api}/tv/top_rated?api_key=${API_KEY}&page=1`;
export const top10MoviesAPI = `${api}/movie/top_rated?api_key=${API_KEY}&page=1`;

export const queryAPI = `${api}/search`;
export const movieQueryAPI = `${queryAPI}/movie?api_key=${API_KEY}`;
export const showQueryAPI = `${queryAPI}/tv?api_key=${API_KEY}&page=1`;
