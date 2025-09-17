const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

// utilise le models User pour le schema
const userModel = require("../models/User")


router.post("/signup", async (req, res) => {
    try {
        const {username,password} = req.body

        const existingUser = await userModel.findOne({username})

        if (existingUser) {
            return res.status(400).json({error:"Cette utilisateur existe déjà !"})
        } else {
            // crypter le mot de passe
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds)

            const newUser = new userModel({username,password:hashedPassword})
            await newUser.save()

            res.json({message: "Utilisateur enregistré avec succès !"})
        }
        

    } catch (error) {
        res.status(500).json({error: "Erreur lors de l'enregistrement"})
    }
})

module.exports = router