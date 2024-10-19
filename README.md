# mhbc-web


## Objectives

- Club de handball créé en 1901
- 180 licenciés
- 11 catégories évoluant du niveau départemental à régional


Objectif : 

- Créer un site internet en répondant au besoin du club
- Pour les licenciés :
- Calendrier des matchs par catégorie 
- Calendrier des évènements
- Inscription aux évènements / au club
- Achat / réservation de goodies sur la boutique du club
- Résultat des matchs, à minima du week-end passé

Pour l’association

- Créer la date, l’heure et le lieu des matchs
- Créer la date, l’heure et le lieu des évènements
- Suivi des paiements
- Disposer d’un récapitulatif des inscrits



## Project setup
```
npm install
npm run serve
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## Backend setup
```
cd backend
npm install
npm run serve
```

### Install PostgreSQL
macOS package manager [Homebrew](https://brew.sh/)

```bash
brew install postgresql
brew services start postgresql
```

### Create role and database
```bash
psql postgres
```

```sql
CREATE ROLE mhbc WITH LOGIN PASSWORD 'mhbc';
CREATE DATABASE handball_db OWNER mhbc;
exit
```

### Start backend x2
```bash
npm start
```

## Preview

Home page
![alt text](<src/assets/readme/Capture d’écran 2024-10-18 à 19.41.55.png>)

Matchs page
![alt text](<src/assets/readme/Capture d’écran 2024-10-18 à 19.42.00.png>)

Login page
![alt text](<src/assets/readme/Capture d’écran 2024-10-18 à 19.42.09.png>)