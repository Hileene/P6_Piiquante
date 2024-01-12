# Build a Secure REST API for a Hot Sauce Review Application

<p align="center">
  <img src="/backend/readme-images/piiquante-banner.png" alt="Bannière Piiquante">
</p>

*Project #6: Web Developer Training [OpenClassrooms](https://openclassrooms.com/en/paths/717-web-developer)*

[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)
<img src="/backend/readme-images/powered-by-candy.svg" alt="For The Badge Candy image" />

[README FR](#version-française)

---

## Table of Contents

- [Project Description](#project-description)
- [Technologies](#technologies)
- [Fictional Scenario](#fictional-scenario)
- [Assessed Skills](#assessed-skills)
- [API Specifications](#api-specifications)
- [Security Requirements](#security-requirements)
- [Installation](#installation)
- [Built With](#built-with)
- [Author](#author)

## Project Description

For this project, my mission as a back-end developer was to build a secure API for a web application that reviews hot sauces called "*Hot Takes*".

## Technologies

- JavaScript
- Node JS
- Express
- Mongoose

## Fictional Scenario

I am an independent back-end developer and have received a freelance job offer from a new client through my freelance platform.

The spicy condiment brand Piiquante wants to develop a web application for reviewing hot sauces called "*Hot Takes*". The product manager of the brand wants the first version to be a "sauce gallery" that allows users to upload their favorite hot sauces and like or dislike the sauces shared by others. 

The front-end of the application has been developed using Angular and has been precompiled after internal testing, but Piiquante needs a back-end developer to build the API.

## Assessed Skills

- 🗄️ Implement a logical data model in compliance with regulations
- 🔒 Implement CRUD operations securely
- 🛡️ Store data securely


## API Specifications

- **API Errors:**
  Any possible errors must be returned as they are produced, without modification or addition. If necessary, use a new Error().

- **API Routes:**
  - For sauces, all sauce routes must have authorization (the token is sent by the front-end with the authorization header: "Bearer <token>").
  - Before the user can make changes to the sauce route, the code must check if the current userId matches the userId of the sauce.
  - If the userId does not match, return "403: unauthorized request." This ensures that only the owner of the sauce can make changes to it.

## Security Requirements

- The user's password must be hashed.
- Authentication must be reinforced on all required sauce routes.
- Email addresses in the database are unique, and an appropriate Mongoose plugin is used to ensure their uniqueness and report errors.
- The security of the MongoDB database must not prevent the application from launching on a user's machine.
- A Mongoose plugin must handle errors from the database.
- The latest versions of software are used with updated security patches.
- The content of the images folder must not be uploaded to GitHub.

## Installation

Remove the front-end application code from the project repository and follow the
following steps:
1. Clone the repository
2. Open a terminal (Linux/Mac) or command prompt/PowerShell (Windows)
3. Run `npm install` from the project directory
4. Run `npm start`
5. Run the back-end on http://localhost:3000 only

## Built With

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node JS](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/) 
- [Postman](https://www.postman.com/) 
- [GitHub](https://github.com/) 

## Author
- [@hileene](https://www.github.com/Hileene) 
- [**Portfolio**](https://portfolio-test.com)

---

## VERSION FRANÇAISE

## Construisez une API sécurisée pour une application d'avis gastronomiques

*Projet #6 : Formation Développeur Web [OpenClassrooms](https://openclassrooms.com/fr/paths/717-developpeur-web)*

## Sommaire

- [Description du Projet](#description-du-projet)
- [Scénario Fictif](#scénario-fictif)
- [Compétences Évaluées](#compétences-évaluées)
- [Technologies](#technologies)
- [Spécifications de l'API](#spécifications-de-lapi)
- [Exigences de Sécurité](#exigences-de-sécurité)
- [Installation](#installation)
- [Développé Avec](#développé-avec)
- [Auteur](#auteur)

## Description du Projet

Pour ce projet, ma mission en tant que développeuse back-end était de construire une API sécurisée pour une application web de critique de sauces piquantes appelée "*Hot Takes*".

## Scénario Fictif

Je suis développeuse back-end indépendante et j'ai reçu offre de mission sur ma plateforme de freelance de la part d'un nouveau client.

La marque de condiments à base de piment Piiquante, veut développer une application web de critique des sauces piquantes appelée "*Hot Takes*". Le responsable produit de la marque souhaite que la première version soit une « galerie de sauces » permettant aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent. 

Le front-end de l'application a été développé à l'aide d'Angular et a été précompilé après des tests internes, mais Piiquante a besoin d'un développeur back-end pour construire l'API.

## Compétences Évaluées

- 🗄️ Implémenter un modèle logique de données conformément à la réglementation
- 🔒 Mettre en œuvre des opérations CRUD de manière sécurisée
- 🛡️ Stocker des données de manière sécurisée

## Technologies

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

## Exigences de Sécurité

- Le mot de passe de l'utilisateur doit être haché.
- L'authentification doit être renforcée sur toutes les routes sauce requises.
- Les adresses électroniques dans la base de données sont uniques et un plugin Mongoose approprié est utilisé pour garantir leur unicité et signaler les erreurs.
- La sécurité de la base de données MongoDB ne doit pas empêcher l'application de se lancer sur la machine d'un utilisateur.
- Un plugin Mongoose doit assurer la remontée des erreurs issues de la base de données.
- Les versions les plus récentes des logiciels sont utilisées avec des correctifs de sécurité actualisés.
- Le contenu du dossier images ne doit pas être téléchargé sur GitHub.

## Installation

Retirez le code de l'application front-end du repository du projet et suivez les
étapes suivantes :
1. Clonez le repository
2. Ouvrez un terminal (Linux/Mac) ou une invite de commande/PowerShell (Windows)
3. Exécutez `npm install` à partir du répertoire du projet
4. Exécutez `npm start`
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







