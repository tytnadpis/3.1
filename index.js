const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Здесь точно абсолютно на 100% всё работает как надо</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})