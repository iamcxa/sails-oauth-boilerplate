module.exports.autoreload = {
  active: false, // process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev',
  overrideMigrateSetting: false,
  usePolling: false,
  dirs: [
    'api/models',
    'api/controllers',
    'api/services',
    'api/helpers',
    'api/requests',
    'api/response',
    'api/policies',
    'config/locales',
  ],
  ignored: [
    // Ignore all files with .ts extension
    '**.ts',
  ],
};
