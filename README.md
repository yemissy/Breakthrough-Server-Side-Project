# Breakthrough-Server-Side-Project

You will be task with building an Express API to be consumed by a Front-end client.

## Scope and Project Requirements

An Express API with 2 or 3 database models (tables).
Your tables must have a relationship with each other.
You should have full CRUD on at least 1 of your models.
Your server should have RESTful routes that execute logic and return JSON data.
And if time permits, a Front-End UI using Express views or React.

- [x] **Step 1. Plan Out Your Project Schema**

- Draft: 
  <img src = https://github.com/ShrutiTamrakarTuladhar/Breakthrough-Server-Side-Project/blob/main/diagrams/idea_diagram.png width="400" >

- ERD:
  <img src = https://github.com/ShrutiTamrakarTuladhar/Breakthrough-Server-Side-Project/blob/main/diagrams/ERD-DIAGRAM.png width="400"> 
  
- [x] **Step 2. Build Out the Back-end**

- Build RESTful API routes that return data in a JSON format
- Only 1 model needs to have full CRUD
- Code must be encapsulated into classes
- Use POSTMAN to test your routes
- Steps Taken: 
  - Create database migratations
    - npm init -y (package.json)
    - npm i express (adding express modeules)
    - npm install --save-dev nodemon (adding nodde mon)
      change json pakage start to nodemon server.js
    - npm install ejs
    - npm install knex --save
    - npm install pg
    - node_modules/.bin/knex init (creates a knexfile.js)
    - update knexfile to connect to database
    - create a db.js file - pg promise is returned
    - node_modules/.bin/knex migrate:make name-here
    - create databese in postgress and edit file to connect
    - node_modules/.bin/knex migrate:latest
    - To see if table inside database run `\dt`
    - Add test data to tables
    - Create seed files and run seed
    - node_modules/.bin/knex seed
  - To setup enviroment:
    - install dot-env
    - create a .env file
    - USER = ''
    - DATABASE = ''
    - PASSWORD = ''

- [ ] **Step 3. Build Out the Front-end (UI of your choice)**

  - Express Views
  - React

- [ ] **Step 4. Stretch features**
  - Registration and Authentication
  - Insurance table; users - insurance (one to many)
