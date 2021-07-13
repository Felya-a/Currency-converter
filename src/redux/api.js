import * as axios from 'axios'

const instance = axios.create({
  // baseURL: "https://social-network.samuraijs.com/api/1.1/",
});


export const getValute = () => {
  return axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
}