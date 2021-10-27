const router = require('express').Router();
const {
    createToDo,
    getAllToDos,
    removeToDo,
} = require("../../controllers/toDo-controller");

// "api/toDo"
router.route('/').post(createToDo);

// "api/toDo/allToDos"
router.route('/allToDos').get(getAllToDos);

// "api/toDo/:toDoId"
router.route('/:toDoId').delete(removeToDo);

module.exports = router;