module.exports = {
  APP_NAME: process.env.APP_NAME || "App Name",
  PORT: process.env.PORT || "5000",
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_URI:
    process.env.MONGO_URI || "mongodb://localhost/node-socialmedia-app",
  SESSION_SECRET:
    process.env.SESSION_SECRET || "d7d2d36676d6e04a46cfbe2c5b88f700a49708b8",
  JWT_SECRET:
    process.env.JWT_SECRET || "5ae5ae78c5c77ed229e8f236cbededd5d29ace4f",
};
