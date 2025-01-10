// Importation du module Axios
const axios = require('axios');

// URL de l'API
const apiUrl = 'http://localhost:3000/login';

// Fonction pour tester l'API avec des données correctes
const testSuccessfulLogin = async () => {
  console.log("Test de connexion réussie...");
  
  try {
    const response = await axios.post(apiUrl, {
      email: 'jean@example.com', // E-mail correct
      password: 'password123'   // Mot de passe correct
    });
    console.log("Réponse reçue :", response.data);
  } catch (error) {
    console.error("Erreur lors du test de connexion réussie :", error.response?.data || error.message);
  }
};

// Fonction pour tester l'API avec des données incorrectes
const testFailedLogin = async () => {
  console.log("Test de connexion échouée...");
  
  try {
    const response = await axios.post(apiUrl, {
      email: 'jean@example.com', // E-mail correct
      password: 'wrongpassword' // Mot de passe incorrect
    });
    console.log("Réponse reçue :", response.data);
  } catch (error) {
    console.error("Erreur lors du test de connexion échouée :", error.response?.data || error.message);
  }
};

// Exécution des tests
const runTests = async () => {
  await testSuccessfulLogin();
  await testFailedLogin();
};

runTests();
