module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1338),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "aa3846a3a1240ba9fbfef763fa54af2c"),
    },
  },
  autoReload: {
    enabled: true,
  },
});
