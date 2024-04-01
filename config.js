module.exports = {
  db: {
    connectionString: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:27017/wine-list`
  },
  corsOptions: {
    origin: [`${process.env.CORS_HOST}` || "http://localhost:3000"]
  },
  bodyParserEnabled: true,
}