module.exports = {
  // MongoDB configuration
  mongoURI: "mongodb://localhost/social-media-db",

  // Secret key for JWT (JSON Web Tokens)
  jwtSecret: "your-secret-key",

  // Port for the server to listen on
  port: process.env.PORT || 3000,
};
