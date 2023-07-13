import axios from 'axios'





const ApiKey = import.meta.env.VITE_SECRETKEY
// require('dotenv').config()

const peliculas = `https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US&page=1`


export const bringFilms = async () => {
    const {data} = await axios.get(`${peliculas}`)
    console.log(data.results)

    return data.results
}