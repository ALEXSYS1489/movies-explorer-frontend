import { conf } from "./utils.js";

export class MainApi {
  constructor(conf){
    // this._url = conf.mainApiUrl
    // this._link = `${this._url}`
    this._link = '//localhost:3002'
  }

  getUser(){
    const token = localStorage.getItem('token')
    return fetch(`${this._link}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then((res)=>{
      return this._onResponce(res)
    })
  }

  editUser(name, email) {
    const token = localStorage.getItem('token')
    return fetch(`${this._link}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then((res)=>{
      return this._onResponce(res)
    });  
  }

  getSavedMovies(){
    const token = localStorage.getItem('token')
    return fetch(`${this._link}/movies`, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then((res)=>{
        return this._onResponce(res)
    })
  }

  saveMovie(movie){
    const token = localStorage.getItem('token')
    
    return fetch(`${this._link}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        movieId: movie.id,
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      })
    })
    .then((res)=>{
      return this._onResponce(res)
    }); 
  }

  deleteMovie(idMovie){
    const token = localStorage.getItem('token')
    return fetch(`${this._link}/movies/${idMovie}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then((res)=>{
      return this._onResponce(res)
    })
  }

  _onResponce(res){
    if(res.ok){
      return res.json()
    }
    return Promise.reject({massage: 'Ошибка на сервере', res})
  }
}



export const mainApi = new MainApi (conf)