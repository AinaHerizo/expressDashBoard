const express = require("express")
const router = express.Router()
const userModel = require("../models/User") // schema de l'utilisateur


router.get("/user", async (req, res)=>{
    try {
        const users = await userModel.find()
        res.json(users)
    } 
    catch (error) {
        res.status(500).json({error: "Erreur lors de la récupération des utilisateurs"})
    }
})


module.exports = router;