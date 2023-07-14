import axios from 'axios'


const ApiKey = import.meta.env.VITE_SECRETKEY
// require('dotenv').config()

const peliculas = `https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US&page=1`


export const bringFilms = async () => {
    const {data} = await axios.get(`${peliculas}`)
    console.log(data.results)

    return data.results
}





// import axios from 'axios'


// const ApiKey = import.meta.env.VITE_SECRETKEY
// // require('dotenv').config()

// const films = `https://api.themoviedb.org/3/movie/upcoming?page=1`

// const options = {
//     method: 'GET',
//     headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer 210d6a5dd3f16419ce349c9f1b200d6d'
//     }
//   }

// export const bringFilms = async () => {
//     const {data} = await axios.get(films,options)
//     console.log(data.results)

//     return data.results
// }