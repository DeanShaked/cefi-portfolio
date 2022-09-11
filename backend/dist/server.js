"use strict";
const express = require('express');
const cors = require('cors');
const ratesRoutes = require('./routes/ratesRoutes');
// Network
const PORT = process.env.PORT || 5000;
// Dotenv
const dotenv = require("dotenv");
dotenv.config();
// Express
const app = express();
app.use(express.json());
app.use(cors);
app.use('/rates', ratesRoutes);
app.use((err) => {
    throw new Error(`Error ${500}: ${err.message || 'An unknown error occurred'}`);
});
// Mongo
// const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.u7odt.mongodb.net/${process.env.DB_NAME}`;
// connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});
