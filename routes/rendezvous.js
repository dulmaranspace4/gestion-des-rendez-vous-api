const express = require('express');
const Rendezvous = require('../models/Rendezvous');
const router = express.Router();

// Création de rendez-vous
router.post('/', async (req, res) => {
  const { date, type, utilisateurId } = req.body;
  const nouveauRendezvous = new Rendezvous({ date, type, utilisateurId });
  try {
    const savedRendezvous = await nouveauRendezvous.save();
    res.status(201).json(savedRendezvous);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Autres routes (Mise à jour, Suppression, etc.)

module.exports = router;
