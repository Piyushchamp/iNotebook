require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

// app.use(cors())
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));


app.use(express.json());


app.get("/", (req, res) => {
  res.send("hii");
});


//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

