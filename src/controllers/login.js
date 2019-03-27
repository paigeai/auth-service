const {
  token: { authToken },
} = require('paige-app-auth');

const login = (req, res) => {
  res.send({
    user: req.user,
    token: authToken(req.user),
  });
};

module.exports = {
  login,
};
