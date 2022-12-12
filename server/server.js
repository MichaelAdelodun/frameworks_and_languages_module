const express = require('express')
const app = express()
const port = 8000

app.use(express.json());

Attendees = []

app.get('/', (req, res) => {
    res.send('<html><body>Main Server</body></html>')
})
  
app.post('/attendee', (req, res) => {
    Attendees.push(req.body)
    res.status(201).json(req.body)
})

app.get('/attendee', (req, res) => {
    res.json(Attendees)
})

app.delete('/attendee/:id', (req, res) => {
    Attendees = Attendees.filter(o => o.id !== parseFloat(req.body))
    res.status(204).json()
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})

