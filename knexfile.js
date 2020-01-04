// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'mysql://root:edison@localhost:5432/wars',
    pool: { min: 0, max: 7 },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds`
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 0,
      max: 5
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds`
    }
  }
};
