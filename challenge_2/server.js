const express = require('express')
const app = express()
const port = 3000

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/', (req, res) => {
  res.send('POST request success')
})

app.listen(port, () => {
  console.log(`Hello World listening at http://localhost:${port}`)
})