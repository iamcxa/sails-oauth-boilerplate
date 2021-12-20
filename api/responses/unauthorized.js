/**
 * 200 (unauthorized) Response
 *
 * @example
 * Usage:
 * return res.unauthorized();
 * return res.unauthorized(data);
 * return res.unauthorized(data, 'auth/login');
 *
 * @param  {String|Object} data
 * @param  {String|Object} options
 *          - pass string to render specified view
 * @return {Object|Any} response
 */
module.exports = async function unauthorized(
  data = 'response.unauthorized.incorrect',
  options,
) {
  return sails.helpers.sendResponse.with({
    data,
    options,
    env: this,
    statusCode: 401,
    callback: (req, res, payload) => {
      // Or log them out (if necessary) and then redirect to the login page.
      if (req.session.userId) {
        delete req.session.userId;
      }
      return payload;
    },
  });
};
