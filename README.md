# Breakthrough-Server-Side-Project

You will be task with building an Express API to be consumed by a Front-end client.

## Scope and Project Requirements

An Express API with 2 or 3 database models (tables).
Your tables must have a relationship with each other.
You should have full CRUD on at least 1 of your models.
Your server should have RESTful routes that execute logic and return JSON data.
And if time permits, a Front-End UI using Express views or React.
Examples
You can build Instagram (users and photos) where a user has many photos and a photo belongs to a user. You can view all the photos by a particiular user or have a "Discover" page that shows random photos.

You can build Reddit (users, posts, comments) where a user writes posts, a posts has many comments, and a post and a comment belongs to a user.

You can build an Animal Shelter app that matchers adopters with potential pets. An adopter might be matched with many pets and a pet might even be matched to many adopters.

The possibilities are endless, but keep in mind a reasonable scope for this project.

### Step 1. Plan Out Your Project Schema

![Draft](https://github.com/ShrutiTamrakarTuladhar/Breakthrough-Server-Side-Project/blob/main/diagrams/idea_diagram.png | width=100))

- An ERD is required
- Project must have 2 or 3 models/entities
- Tables must be related via foreign key and primary key
- ERD must be approved by an instructor before any coding begins



### Step 2. Build Out the Back-end

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
  - node_modules/.bin/knex seed:run

  - setup for enviroment:
  - install dot-env
  - create a .env file
  - USER = ''
  - DATABASE = ''
  - PASSWORD = ''

- Build RESTful API routes that return data in a JSON format
- Only 1 model needs to have full CRUD
- Code must be encapsulated into classes
- Use POSTMAN to test your routes

### Step 3. Build Out the Front-end (UI of your choice)

- Express Views
- React

- Hours to site - alter table
- users regresation
- insurance for users - table (one to many)

### Step 4. Stretch features

- Auth
- Additional models
- Any other rabit hole
