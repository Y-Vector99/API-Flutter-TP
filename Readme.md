# Comment utiliser l'API



## 1 installer les dépendances :

- installez node js : 
https://nodejs.org/fr

- installez express :
commande : npm install express

- installez body-parser :
commande : npm install body-parser

- installez bcrypt :
commande : npm install bcrypt

optionnel (pour le fichier de test) :

- installez axios :
commande : npm install axios



## 2 lancer le serveur :

commande : node index.js



## 3 requêter l'api :

Route : /login

Méthode :  POST

Format Json : 
{
  "email": "jean@example.com",
  "password": "password123"
}