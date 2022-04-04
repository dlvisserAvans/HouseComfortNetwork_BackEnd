module.exports = {
    dbconfig: {
      host: process.env.DB_HOST || 'dlv-lab.nl',
      user: process.env.DB_USER || 'davedev',
      database: process.env.DB_DATABASE || 'homecomfortsystemdb',
      password: process.env.DB_PASSWORD || 'jnzEqXSLoGuq7Ec/',
      multipleStatements: true,
      connectionLimit: 10
    }
}
  