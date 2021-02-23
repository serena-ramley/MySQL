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
  getUsers: (callBack) => {
    pool.query(
      `SELECT id, first_name, last_name, email, password, number from registration`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserById: (id, callBack) => {
    pool.query(
      `SELECT id, first_name, last_name, email, password, number from registration where id = ?`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUsers: (data, callBack) => {
    pool.query(
      `UPDATE registration set first_name=?, last_name=?, email=?, password=?, number=? where id = ?`,
      [
        data.first_name,
        data.last_name,
        data.email,
        data.password,
        data.number,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `DELETE from registration where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
