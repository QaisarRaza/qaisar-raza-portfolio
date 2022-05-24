const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');
const router = require('./Routes/route')

const database_link = process.env.DATABASE_LINK
mongoose.connect(database_link, () => {
    console.log(`Database of qaisar is connected successfuly`);
})
app.use(cors());
app.use(express.json())
app.use('/', router)


app.listen(port, () => {
    console.log(`The server is running at ${port}`);
})