// User相關的 api
const userRequest = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com'
});


// User 相關的 api
export const apiUserLogin = data => userRequest.post('/films', data);
