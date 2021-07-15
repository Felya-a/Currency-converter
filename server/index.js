const express = require('express')
const mailer = require("./nodemailer")

const app = express()

const PORT = 3001

app.use(express.json())
app.post('/sendmail', (req, res) => {
  const message = {
    to: `IlyaFedoseevspb@yandex.ru, ${req.body.email}`,
    subject: "Заявка",
    html: 
    `
    <p>Sum in RUB: ${req.body.summ}</p>
    <p>Currency: ${req.body.charCode}</p>
    <p>Currency rate: ${req.body.value}</p>
    <p>Result: ${req.body.result}</p>
    <p>Email client: ${req.body.email}</p>
    `
  }
  mailer(message)
})

app.get('/api', (req, res) => {
  res.json({
    message: "Hello from backend express.js"
  })
})

app.listen(PORT, () => console.log('server listening at http://localhost:3001/'))