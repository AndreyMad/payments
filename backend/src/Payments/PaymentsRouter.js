const { Router } = require("express");
const {
  getNotes,
  getUsers,
  createUser,
  deleteUser,
  authorization
} = require("./paymentsController");

const router = Router();

router.get("/api/getnotes", getNotes);
router.get("/api/getusers", getUsers);
router.post("/api/createuser", createUser);
router.post("/api/deleteuser", deleteUser);
router.post("/api/auth", authorization)

module.exports = router;
