const express = require('express');
const Utilisateur = require('../models/Utilisateur');
const router = express.Router();

// Création d'un utilisateur
router.post('/', async (req, res) => {
  const { nom, email, motDePasse } = req.body;
  const nouvelUtilisateur = new Utilisateur({ nom, email, motDePasse });
  try {
    const savedUtilisateur = await nouvelUtilisateur.save();
    res.status(201).json(savedUtilisateur);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Autres routes (Auth, Consultation historique, etc.)

module.exports = router;
