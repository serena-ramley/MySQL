const { verify } = require("jsonwebtoken");
const secrets = require("../secrets");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove "Bearer: " from string
      token = token.slice(7);
      verify(token, secrets.JWT_KEY, (err, decoded) => {
        if (err) {
          res.json({
            success: 0,
            message: "Invalid token",
          });
        } else {
          next();
        }
      });
    } else {
      res.json({
        success: 0,
        message: "Access denied",
      });
    }
  },
};
