import axios from 'axios'


const ApiKey = import.meta.env.VITE_SECRETKEY
// require('dotenv').config()

const films = `https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US`
const series = `https://api.themoviedb.org/3/tv/airing_today?api_key=${ApiKey}&language=en&page=1`
const top20Films = `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`
const top20Series = `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`


export const bringFilmsPagination = async (page) => {
    const {data} = await axios.get(`${films}&page=${page}`)
    return data
}

export const bringSeriesPagination = async (page) => {
    const {data} = await axios.get(`${series}&page=${page}`)
    return data
}

export const bringTop20Films = async () => {
    const {data} = await axios.get(`${top20Films}`)
    return data
}

export const bringTop20Series = async () => {
    const {data} = await axios.get(`${top20Series}`)
    return data
}