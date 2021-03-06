/* eslint-disable key-spacing */
/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /': {action: 'view-homepage-or-redirect'},
  'GET /welcome/:unused?': {action: 'dashboard/view/welcome'},

  'GET /faq': {action: 'view-faq'},
  'GET /legal/terms': {action: 'legal/view-terms'},
  'GET /legal/privacy': {action: 'legal/view-privacy'},
  'GET /contact': {action: 'view-contact'},

  'GET /signup': {action: 'entrance/view-signup'},
  'GET /email/confirm': {action: 'entrance/confirm-email'},
  'GET /email/confirmed': {action: 'entrance/view-confirmed-email'},

  'GET /login': {action: 'entrance/view-login'},
  'GET /password/forgot': {action: 'entrance/view-forgot-password'},
  'GET /password/new': {action: 'entrance/view-new-password'},

  'GET /account': {action: 'account/view/account-overview'},
  'GET /account/password': {action: 'account/view/edit-password'},
  'GET /account/profile': {action: 'account/view/edit-profile'},
  'GET /account/set-password': {action: 'account/view/set-password'},

  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  'GET /terms': '/legal/terms',
  'GET /logout': '/api/v1/account/logout',

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  'GET /api/v1/account/logout': {action: 'account/logout'},
  'DELETE   /api/v1/account': {action: 'account/delete-account'},
  'GET   /api/v1/account': {action: 'account/get-account'},
  'PUT   /api/v1/account/update-password': {action: 'account/update-password'},
  'PUT   /api/v1/account/no-password': {action: 'account/no-password'},
  'PUT   /api/v1/account/update-profile': {action: 'account/update-profile'},
  'POST  /api/v1/account/resend-verification-email': {
    action: 'account/resend-verification-email',
  },

  'PUT   /api/v1/entrance/login': {action: 'entrance/login'},
  'POST  /api/v1/entrance/signup': {action: 'entrance/signup'},
  'POST  /api/v1/entrance/send-password-recovery-email': {
    action: 'entrance/send-password-recovery-email',
  },
  'POST  /api/v1/entrance/update-password-and-login': {
    action: 'entrance/update-password-and-login',
  },

  'GET   /api/v1/dashboard/statistics': {action: 'dashboard/get-statistics'},

  'POST  /api/v1/deliver-contact-form-message': {
    action: 'deliver-contact-form-message',
  },
  'POST  /api/v1/observe-my-session': {
    action: 'observe-my-session',
    hasSocketFeatures: true,
  },

  'GET /api/v1/auth/:strategy/callback': {action: 'auth/callback'},

  'GET /api/v1/auth/google': {action: 'auth/google-auth'},
  // 'GET /api/v1/auth/google/callback': {action: 'auth/google-callback'},
  'GET /api/v1/auth/facebook': {action: 'auth/facebook-auth'},
  // 'GET /api/v1/auth/facebook/callback': {action: 'auth/facebook-callback'},
};
