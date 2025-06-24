import express from 'express'
import 'dotenv/config'

const app = express()
const port = process.env.PORT
app.use(express.json())

let booking = []
let id = 1

app.get('/', (req, res) => {
  res.send("Hellow first app")
})
app.get('/book-list', (req, res) => {
  res.status(200).send(booking)
})

app.post('/book-now', (req, res) => {
  const { name, cost } = req.body
  const newBooking = { id: id++, name, cost }
  booking.push(newBooking)
  res.status(200).send(newBooking)

})
app.get('/book-list/:id', (req, res) => {

  const book = booking.find(b => b.id === parseInt(req.params.id))

  if (!book) {
    res.status(404).send("Booking not found")

  }
  else {
    res.status(200).send(book)
  }
})
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is listing to port: ${port}`);

})