const { queryHandler } = require("./index");

const getNotesFromDb = () => {
  return queryHandler(`SELECT * FROM autonompayments `)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      return { error: err };
    });
};

const checkSession = (token) => {
  return queryHandler(
    `SELECT * FROM paymentsusers where sessiontoken='${token}'`
  ).then((res) => {
    if (!res.rows[0]) {
      return null;
    } else return res.rows[0].login;
  });
};

const getUsersFromDb = () => {
  return queryHandler(`SELECT * FROM paymentsusers `)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      return { error: err };
    });
};

const createUser = (user) => {
  return queryHandler(
    `insert into paymentsusers (id, firstname, lastname, login, password, isadmin)
     VALUES ('${user.id}', '${user.firstName}', '${user.lastName}', '${user.login}', '${user.password}', '${user.isAdmin}') returning *`
  )
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      return { error: err };
    });
};

const deleteUser = (id) => {
  return queryHandler(`
  delete from paymentsusers where id = '${id}' returning id
  `)
    .then((res) => {
      if (!res.rows[0]) {
        return { error: "user not deleted" };
      }
      return res.rows[0];
    })
    .catch((err) => {
      return { error: err };
    });
};

const findUserFromDb = (userLogin) => {
  return queryHandler(
    `SELECT * FROM paymentsusers where login='${userLogin}'`
  ).then((res) => {
    return res.rows[0];
  });
};

module.exports = {
  getNotesFromDb,
  getUsersFromDb,
  checkSession,
  createUser,
  deleteUser,
  findUserFromDb
};
