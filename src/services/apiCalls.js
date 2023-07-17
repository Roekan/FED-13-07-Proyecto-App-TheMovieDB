import axios from 'axios'


const ApiKey = import.meta.env.VITE_SECRETKEY
// require('dotenv').config()

const films = `https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US`
const series = `https://api.themoviedb.org/3/tv/airing_today?api_key=${ApiKey}&language=en&page=1`

// export const bringFilms = async () => {
//     const {data} = await axios.get(`${peliculas}`)
//     // console.log(data.results)

//     return data.results
// }


export const bringFilmsPagination = async (page) => {
    const {data} = await axios.get(`${films}&page=${page}`)
    return data
}

export const bringSeriesPagination = async (page) => {
    const {data} = await axios.get(`${series}&page=${page}`)
    return data
}

