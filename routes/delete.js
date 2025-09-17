const express = require ("express")
const router = express.Router()
const userModel = require("../models/User")


router.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        
        await userModel.findByIdAndDelete(id)
        
        res.json({ message: "Utilisateur supprimé avec succès !" });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de la suppression" });
    }
})



module.exports = router