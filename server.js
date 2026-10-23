
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns=require("dns")

require("dotenv").config();
dns.setServers(["1.1.1.1", "8.8.8.8"]);


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", require("./Routes/Productroutes"));

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(process.env.PORT ||5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });
