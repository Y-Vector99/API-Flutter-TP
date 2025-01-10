// imports
const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');

// Données  
const mockUser = {
    id: 1,
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean@example.com",
    password: hashPassword("password123"), // "password123" haché
    role: 2
  };

// Création de l'application Express
const app = express();
const port = 3000;

// Middleware pour analyser les requêtes JSON
app.use(bodyParser.json());

// Route pour gérer la connexion
app.post('/login', async (req, res) => {
  const { email, password } = req.body;




  // Vérification des informations d'identification
  if (email === mockUser.email) {
    // Comparer le mot de passe fourni avec le mot de passe haché stocké
    const isPasswordValid = await bcrypt.compare(password, mockUser.password);

    if (isPasswordValid) {
      res.status(200).json({
        status: 200,
        message: "Success",
        id: mockUser.id,
        firstName: mockUser.firstName,
        lastName: mockUser.lastName,
        email: mockUser.email,
        role: mockUser.role
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "Error"
      });
    }
  } else {
    res.status(400).json({
      status: 400,
      message: "Error"
    });
  }
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

// Fonction pour hash le mot de passe 
async function hashPassword(password) {
    try {
      // Générez un "salt" (sel) pour rendre le hachage plus sécurisé
      const saltRounds = 10; // Plus le nombre est élevé, plus le hachage est sécurisé, mais plus lent
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      console.log('Mot de passe crypté:', hashedPassword);
      return hashedPassword;
    } catch (err) {
      console.error('Erreur lors du hachage du mot de passe:', err);
    }
  }