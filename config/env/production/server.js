module.exports = ({ env }) => ({
  //url: env("MY_HEROKU_URL"),
  host: "0.0.0.0",
  url: env("RENDER_EXTERNAL_URL"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "0r2Pkk6gQtPOVxXeRLl9gICVtEyQBql6"),
    },
  },
});
