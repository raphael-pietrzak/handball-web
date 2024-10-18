# mhbc-web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## Backend setup
```
cd backend
npm install
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