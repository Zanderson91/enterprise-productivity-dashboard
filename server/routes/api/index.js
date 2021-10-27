const router = require("express").Router();
const userRoutes = require("./user-routes");
const toDoRoutes = require('./toDo-routes');

router.use("/users", userRoutes);
router.use("/toDo", toDoRoutes);

module.exports = router;
