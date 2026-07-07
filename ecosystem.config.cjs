module.exports = {
  apps: [
    {
      name: "express-app",
      script: "./index.js",
      cwd: "/var/www/express-app",
      instances: 1,
      exec_mode: "fork",
      watch: false,
      autorestart: true,
      env: {
        NODE_ENV: "production",
        PORT: 8080,
      },
    },
  ],
};