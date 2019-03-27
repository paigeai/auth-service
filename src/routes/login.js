const {
  middleware: { requireLogin },
} = require('paige-app-auth');
const { login } = require('../controllers');

module.exports = router => {
  router.post('/api/login', requireLogin, login);
};
