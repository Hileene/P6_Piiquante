# Construisez une API sécurisée pour une application d'avis gastronomiques

<p align="center">
  <img src="/backend/readme-images/piiquante-banner.png" alt="Bannière Piiquante">
</p>

*Projet #6 : Formation Développeur Web [OpenClassrooms](https://openclassrooms.com/fr/paths/717-developpeur-web)*

[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)
<img src="/backend/readme-images/powered-by-candy.svg" alt="For The Badge Candy image" />

[Screenshots](#screenshots) - <a href="#version-française">README FR</a> - <a href="#english-version">README EN</a>


---
## VERSION FRANÇAISE

## Sommaire

- [Description du projet](#description-du-projet)
- [Scénario fictif](#scénario-fictif)
- [Compétences évaluées](#compétences-évaluées)
- [Technologies](#technologies)
- [Spécifications de l'API](#spécifications-de-lapi)
- [Exigences de sécurité](#exigences-de-sécurité)
- [Installation](#installation)
- [Développé avec](#développé-avec)
- [Auteur](#auteur)

## Description du Projet

Pour ce projet, ma mission en tant que développeuse back-end était de construire une API sécurisée pour une application web de critique de sauces piquantes appelée "*Hot Takes*".

## Scénario Fictif

Je suis développeuse back-end indépendante et j'ai reçu offre de mission sur ma plateforme de freelance de la part d'un nouveau client.

La marque de condiments à base de piment Piiquante, veut développer une application web de critique des sauces piquantes appelée "*Hot Takes*". Le responsable produit de la marque souhaite que la première version soit une « galerie de sauces » permettant aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent. Le front-end de l'application a été développé à l'aide d'Angular et a été précompilé après des tests internes, mais Piiquante a besoin d'un développeur back-end pour construire l'API.

## Compétences Évaluées

- 🗄️ Implémenter un modèle logique de données conformément à la réglementation
- 🔒 Mettre en œuvre des opérations CRUD de manière sécurisée
- 🛡️ Stocker des données de manière sécurisée

## Technologies

- HTML
- Sass
- Angular
- TypeScript
- JavaScript
- Node JS
- Express
- Mongoose

## Spécifications de l'API

- **API Errors:**
Les erreurs éventuelles doivent être renvoyées telles qu'elles sont produites, sans
modification ni ajout. Si nécessaire, utilisez une nouvelle Error().

- **API Routes:**
 - Pour les sauces,toutes les routes sauce doivent disposer d’une autorisation (le token est envoyé par le front-end avec l'en-tête d’autorisation : « Bearer <token> »)
 - Avant que l'utilisateur puisse apporter des modifications à la route sauce, le code doit vérifier si l'userId actuel correspond à l'userId de la sauce. 
 - Si l'userId ne correspond pas, renvoyer « 403: unauthorized request. » Cela permet de s'assurer que seul le propriétaire de la sauce peut apporter des modifications à celle-ci.

## Exigences de sécurité

- Le mot de passe de l'utilisateur doit être haché.
- L'authentification doit être renforcée sur toutes les routes sauce requises.
- Les adresses électroniques dans la base de données sont uniques et un plugin Mongoose approprié est utilisé pour garantir leur unicité et signaler les erreurs.
- La sécurité de la base de données MongoDB (à partir d'un service tel que MongoDB Atlas) ne doit pas empêcher l'application de se lancer sur la machine d'un utilisateur.
- Un plugin Mongoose doit assurer la remontée des erreurs issues de la base de données.
- Les versions les plus récentes des logiciels sont utilisées avec des correctifs de sécurité actualisés.
- Le contenu du dossier images ne doit pas être téléchargé sur GitHub.

## Installation

Retirez le code de l'application front-end du repository du projet et suivez les
étapes suivantes :
1. Clonez le repository
2. Ouvrez un terminal (Linux/Mac) ou une invite de commande/PowerShell (Windows)
3. Exécutez npm install à partir du répertoire du projet
4. Exécutez npm start
5. Exécutez le back-end sur http://localhost:3000 seulement


## Développé Avec

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node JS](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/) 
- [Postman](https://www.postman.com/) 
- [GitHub](https://github.com/) 


## Auteur
- [@hileene](https://www.github.com/Hileene) 
- [**Portfolio**](https://portfolio-test.com)

---

## ENGLISH VERSION