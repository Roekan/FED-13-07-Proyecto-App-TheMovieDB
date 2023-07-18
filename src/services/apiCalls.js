import axios from 'axios'


const ApiKey = import.meta.env.VITE_SECRETKEY


const films = `https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US`
const series = `https://api.themoviedb.org/3/tv/airing_today?api_key=${ApiKey}&language=en&page=1`
const top20Films = `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`
const top20Series = `https://api.themoviedb.org/3/tv/top_rated?api_key=${ApiKey}`
const filmById = `https://api.themoviedb.org/3/movie/`
const serieById = `https://api.themoviedb.org/3/tv/`


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
    console.log(data)
    return data
}

export const bringTop20Series = async () => {
    const {data} = await axios.get(`${top20Series}`)
    return data
}

export const bringOneFilm = async(id)=>{
    const {data} = await axios.get(`${filmById}${id}?api_key=${ApiKey}`)
    return data
}

export const bringOneSerie = async(id)=>{
    const {data} = await axios.get(`${serieById}${id}?api_key=${ApiKey}`)
    return data
}