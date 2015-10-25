// [your-sails-app]/config/autoreload.js
module.exports.autoreload = {
  active: true,
  usePolling: false,
  dirs: [
    "api/models",
    "api/controllers",
    "api/services",
    "config"
  ],
  ignored: [
    // Ignore all files with .ts extension
    "**.ts"
  ]
};