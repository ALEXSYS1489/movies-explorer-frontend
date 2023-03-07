import conf from "./utils.js";
// const BASE_URL = conf.mainApiUrl;
const BASE_URL = '//localhost:3002';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {  
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: name,
        email: email,
        password: password
})
  })
  .then(checkResponse)
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: email,
        password: password
})
  })
      .then(checkResponse)
}

export const checkToken = () => {
  const token = localStorage.getItem('token')
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(checkResponse)
}


const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.statusText}`)