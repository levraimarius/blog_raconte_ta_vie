const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // Utilisation du middleware de proxy pour rediriger les requêtes commençant par "/api" vers un serveur différent
  app.use(
    "/api",
    createProxyMiddleware({
      // L'URL cible vers laquelle rediriger les requêtes
      target: "http://127.0.0.1:5000",
      // Permet de modifier l'en-tête 'host' de la requête pour correspondre à la cible
      changeOrigin: true,
    })
  );
};
