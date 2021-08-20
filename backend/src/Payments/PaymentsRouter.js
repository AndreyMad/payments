const { Router } = require("express");
const {
getNotes
} = require("./paymentsController");
const router = Router();

router.get("/api/getnotes", getNotes)

module.exports = router;