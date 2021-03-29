// Update with your config settings.

// DATABASE_URL =
module.exports = {

  development: {
    client: 'postgresql',
    // connection: process.env.DATABASE_URL || { user: 'me', database: 'my_app' }
    connection: {
      database: 'covid-db',
      user: 'missy',
      password: ''
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
