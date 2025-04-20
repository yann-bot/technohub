![archi](https://github.com/user-attachments/assets/dfcb6d37-4b63-41ca-abac-a11068c5fce0)# Technohub 
## 1.Analyse des besoins
### 1.1. Contexte du projet
Technohub est une plateforme à répondre aux besoins d'expertise  technique de la population. Au quotidien, il fréquent de faire appel à un électricien, frigoriste, réparateur d'électronique etc.Cependant, la difficulté à laquelle on se heurte est premièrement celle de vite trouver un technicien. Ensuite vient le problème de la compétence , de l'honnêteté et du sérieux. Comment trouver  facilement un technicien qualifié  et de bonne moralité ? Technohub est la  solution.

### 1.2. Objectifs de l'application
- Permettre à une personne de trouver le technicien dont il a besoin par une simple recherche en ligne;
- Permettre aux techniciens de poster leur profil profesionnel en ligne;

### 1.3. Public cible
Cette application est pour toute personne physique ou morale désireuse de faire affaire avec les meilleures techniciens du pays ou de proposer de meilleure service technique à la population.

## 2.Cahier de charges fonctionnel
## 2.1. Fonctionnalités principales
- Moteur de rechercher avancé;
- Système de messagerie intégré;
- Profil détaillé;
- Tableau de bord utilisateur;
- Notification en temps réel;
- Systeme d'évaluation;
- Historique des prestations.
  
## 2.2. Utilisateur et cas d'utilisation
### 2.2.1. Visiteur
Un visiteur est toute personne qui  peut se rendre sur la plateforme.
Voici la liste de tout ce qu'il peut faire:
- Rechercher un technicien;
- Voir le profil du techncien;
- S'inscrire.

### 2.2.2. Client
Un client est  un visteur qui a déja un compte sur la plateforme.
Voici la liste de tout ce qu'il peut faire:
- Se connecter;
- Rechercher un technicien;
- Noter un technicien;
- Laisser un avis;
- Voir tableau de bord;
- Publier son profil professionnel;
- Editer son profil profesionnel;
- Communiquer via la messagerie intégrée;

### 2.2.3. Administrateur
- Surveille les profils des techniciens;
- Verifie les plaintes;

## 3. Cahier de charges technique

### 3.1. Langages et Technologies Envisagés

- **Backend** : Go (Gin ou Fiber)
- **API** : REST
- **Frontend** : React.js (SPA)
- **Base de données** : PostgreSQL
- **Notifications** : Firebase Cloud Messaging (FCM) ou OneSignal
- **Envoi d’e-mails** : SendGrid ou SMTP

### 3.2. Composants Principaux de l'architecture 

#### 1 Frontend (React.js)
- Application SPA (Single Page Application)
- Authentification par token (JWT)
- Appels à l’API REST
- UI avec Tailwind CSS ou Material UI

#### 2 Backend (Go)
- API REST avec Gin ou Fiber
- Middleware : logs, erreurs, sécurité
- Authentification JWT / OAuth2
- Gestion des rôles : client / technicien / admin

#### 3 Base de Données (PostgreSQL)
- Tables principales :
  - `users`
  - `profile_pro`
  - `messages`
  - `services`
  - `Avis`
  - `Note`
  - `notifications`

#### 3. Services Externes
- **Emails** : SendGrid / Mailgun / SMTP
- **Notifications push** : Firebase Cloud Messaging (FCM), OneSignal
- **Stockage de fichiers** : Cloudinary ou AWS S3













