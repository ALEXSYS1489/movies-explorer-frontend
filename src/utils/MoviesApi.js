import { conf } from "./utils.js";

export class MoviesApi {
  constructor(conf){
    this._url = conf.moviesApiUrl
    this._link = `${this._url}`
  }

  getMovies() {
    return fetch(`${this._link}`, {})
    .then((res)=>{
        if(res.ok){
            return res.json()
          }
          return Promise.reject({massage: 'Ошибка на сервере', res})
    })
  }

}

export const moviesApi = new MoviesApi (conf)