const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

// Configuration de l'app
const app = express()
const port = 3000

// Recuperation des routes
const createRoute = require("./routes/create")
const readRoute = require("./routes/read")
const updateRoute = require("./routes/update")
const deleteRoute = require("./routes/delete")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// connection au BD
mongoose.connect("mongodb://localhost:27017/login")
.then(()=>{
    console.log("Connexion au BD success");
})
.catch((err)=>{
    console.log(err);
})

app.use("/", createRoute)
app.use("/", readRoute)
app.use("/", updateRoute)
app.use("/", deleteRoute)


// Ecoute le port pour demarrer le serveur
app.listen(port, ()=>{
    console.log("Serveur Start");
})