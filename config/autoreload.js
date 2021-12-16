module.exports.autoreload = {
  active: true,
  usePolling: false,
  dirs: [
    'api/models',
    'api/controllers',
    'api/services',
    // "api/helpers",
    // "api/policies",
    'config/locales'
  ],
  ignored: [
    // Ignore all files with .ts extension
    '**.ts'
  ]
};
