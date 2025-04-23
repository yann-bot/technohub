
## 1.Analyse des besoins
### 1.1. Contexte du projet
Technohub est une plateforme conçue pour répondre aux besoins d’expertise technique de la population. Au quotidien, il est fréquent de faire appel à un électricien, un frigoriste, un réparateur d’électronique, etc. Cependant, plusieurs difficultés se posent :

- D’abord, celle de trouver rapidement un technicien disponible ;

- Ensuite, des problèmes liés à la compétence, à l’honnêteté et au sérieux des prestataires.

Comment trouver facilement un technicien qualifié et digne de confiance ?
Technohub apporte une solution simple, rapide et fiable à ce problème.

### 1.2. Objectifs de l'application
- Permettre à une personne de trouver le technicien dont il a besoin par une simple recherche en ligne;
- Permettre aux techniciens de poster leur profil profesionnel en ligne afin d'être visible par les clients;

### 1.3. Public cible
Cette application est pour toute personne physique ou morale désireuse de faire affaire avec les meilleures techniciens du pays ou de proposer de meilleure service technique à la population.

## 2.Cahier de charges fonctionnel
## 2.1. Fonctionnalités principales
- Moteur de rechercher avancé: pour filtrer les techniciens selon la spécialité, la localisation, les avis client etc;
- Système de messagerie intégré:pour faciliter les échangeS entre clients et techniciens;
- Profil détaillé: chaque technicien disposera d'un profil complet avec ses compétences,expériences et les avis clients;
- Tableau de bord utilisateur:pour que chaque utilisateur puisse gerer ses technicien, ses messages et notification etc;
- Notification en temps réel:pour informer les utilisateurs des nouveaux messages, avis etc;
- Systeme d'évaluation: pour permettre au client de noter le technicien  après une prestation;
- Historique des prestations.
  
## 2.2. Utilisateur et cas d'utilisation
### 2.2.1. Visiteur
Un visiteur est toute personne non inscrite qui accède à la plateforme. Il n’a pas besoin de se connecter pour effectuer certaines actions de base.
Actions possibles :
- Rechercher un technicien par spécialité, localisation ou disponibilité ;
- Consulter les profils publics des techniciens (informations de base, évaluations, localisation, etc.) ;
- Accéder aux témoignages ou avis laissés par d'autres utilisateurs ;
- Créer un compte en tant que client ou technicien via le formulaire d’inscription.

### 2.2.2. Utilisateur
Un utilisateur est toute personne inscrite sur la plateforme, qu’elle vienne chercher un spécialiste ou proposer ses services. À son inscription, il n’a pas de statut prédéfini de “client” ou “technicien” : il devient ce qu’il veut, quand il veut, via son tableau de bord.
**Actions disponibles (avant création d’annonce):**
- Rechercher un technicien par mots-clés, spécialités, localisation, avis…
- Consulter les profils publiés des techniciens existants (description, tarifs, évaluations).
- Accéder à son Tableau de bord (gestion du profil, notifications, historique).
- Modifier ses informations personnelles (nom, coordonnées, photo).
- Créer une annonce (bouton unique “Devenir Technicien / Publier mon offre”).

### 2.2.3. Administrateur
Un administrateur est un utilisateur disposant de droits étendus pour gérer la plateforme et garantir la qualité des services.
**Actions et responsabilités:** 
- Gestion des utilisateurs :
    - Valider ou refuser les inscriptions et profils techniques (modération) ;
    - Désactiver ou réactiver des comptes utilisateurs (visiteurs, clients, techniciens) ;

- Gestion des annonces :
    - Consulter et modérer les annonces publiées ;
    - Supprimer ou archiver les annonces non conformes ;

- Configuration du site :
    - Paramétrer les catégories et spécialités techniques ;
    - Définir les critères de modération (mots-clés interdits, normes de qualité) ;

- Suivi et reporting :
    - Consulter les statistiques globales (nombre d’utilisateurs, annonces publiées, taux de conversion) ;
    - Générer des rapports d’activité (mensuels, trimestriels) ;
    - 
- Support et assistance :
    - Gérer les tickets de support utilisateurs ;
    - Communiquer des mises à jour ou annonces importantes aux utilisateurs.

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
### 3.3. Schéma de l'architecture


## 4. Modélisation UML

### 4.1. Diagramme de cas d'utilisation













