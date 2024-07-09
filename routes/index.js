const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('index');
});

// Arena route
router.get('/arena', (req, res) => {
  const player1 = { name: 'Player A', health: 50, strength: 5, attack: 10 };
  const player2 = { name: 'Player B', health: 100, strength: 10, attack: 5 };
  res.render('arena', { player1, player2 });
});

module.exports = router;
