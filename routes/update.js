const express = require("express");
const router = express.Router();
const userModel = require("../models/User"); // modèle mongoose
const bcrypt = require("bcrypt")

// Route Update
router.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { username, password } = req.body;

        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        const updatedUser = await userModel.findByIdAndUpdate(
            id,
            { username, password:hashedPassword },
            { new: true } // retourne le document mis à jour
        );

        res.json({ message: "Utilisateur mis à jour !", user: updatedUser });
    }
    catch (err) {
        res.status(500).json({ error: "Erreur lors de la mise à jour" });
    }
});

module.exports = router;
