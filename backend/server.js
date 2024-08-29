const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const teamsData = {
  RedBull: [
    { name: 'Max Verstappen', disabled: false },
    { name: 'Sergio Pérez', disabled: false }
  ],
  Mercedes: [
    { name: 'Lewis Hamilton', disabled: false },
    { name: 'George Russell', disabled: false }
  ],
  Ferrari: [
    { name: 'Charles Leclerc', disabled: false },
    { name: 'Carlos Sainz', disabled: false }
  ],
  Mclaren: [
    { name: 'Lando Norris', disabled: false },
    { name: 'Oscar Piastri', disabled: false },
  ],
  Alpine: [
    { name: 'Esteban Ocon', disabled: false },
    { name: 'Pierre Gasly', disabled: false },
  ],
  AstonMartin: [
    { name: 'Fernando Alonso', disabled: false },
    { name: 'Lance Stroll', disabled: false },
  ],
  KickSauber: [
    { name: 'Valtteri Bottas', disabled: false },
    { name: 'Zhou Guanyu', disabled: false },
  ],
  Haas: [
    { name: 'Kevin Magnussen', disabled: false },
    { name: 'Nico Hülkenberg', disabled: false },
  ],
  Williams: [
    { name: 'Alexander Albon', disabled: false },
    { name: 'Logan Sargeant', disabled: false },
  ],
  RB: [
    { name: 'Yuki Tsunoda', disabled: false },
    { name: 'Daniel Ricciardo', disabled: false }
  ]

};

app.get('/api/teams', (req, res) => {
  res.json(teamsData);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});