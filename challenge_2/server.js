const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(express.static('dist'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Hello World listening at http://localhost:${port}`)
})