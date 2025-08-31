const mongoose = require('mongoose');

const rendezvousSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  type: { type: String, required: true },
  utilisateurId: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur', required: true },
  statut: { type: String, default: 'actif' }, // actif, annulé, terminé
});

module.exports = mongoose.model('Rendezvous', rendezvousSchema);
