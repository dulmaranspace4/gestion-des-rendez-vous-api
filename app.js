const express = require('express');
const rendezvousRoutes = require('./routes/rendezvous');
const utilisateurRoutes = require('./routes/utilisateur');

const app = express();

app.use('/api/rendezvous', rendezvousRoutes);
app.use('/api/utilisateurs', utilisateurRoutes);

module.exports = app;
