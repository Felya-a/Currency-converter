import * as axios from 'axios'

export const getValute = () => {
  return axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
}

export const sendMail = (data) => {
  return axios.post('/sendmail', data)
}