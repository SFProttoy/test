const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const categoryRoute = require("./routes/categoryRoute");


const app = express();
dotenv.config();

app.use(cors());

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2r10p.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
// app.use("/category", categoryRoute);

app.get('/', async(res, req)=>{
  console.log('hello9');
})

// routes
app.use("/", categoryRoute);


app.post('/cat', (req, res) => {
  res.send('POST request to the homepage')
  console.log(req.body);
})

app.listen(8000, () => {
  console.log(`app listening to port 8000`);
});