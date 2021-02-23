const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT into registration(first_name, last_name, email, password, number)
                values(?,?,?,?,?)`,
      [data.first_name, data.last_name, data.email, data.password, data.number],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
