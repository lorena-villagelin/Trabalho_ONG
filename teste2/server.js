const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));
app.get('/cadastro', (req, res) => res.sendFile(path.join(__dirname, 'public', 'cadastro.html')));
app.get('/ongs', (req, res) => res.sendFile(path.join(__dirname, 'public', 'listagem-ongs.html')));
app.get('/oportunidades', (req, res) => res.sendFile(path.join(__dirname, 'public', 'oportunidades.html')));
app.get('/perfil', (req, res) => res.sendFile(path.join(__dirname, 'public', 'perfil.html')));

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
