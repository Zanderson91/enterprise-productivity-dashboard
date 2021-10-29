const router = require('express').Router();
const {
    createToDo,
    getAllToDos,
    updateToDo,
    removeToDo,
} = require("../../controllers/toDo-controller");

// "api/toDo"
router.route('/').post(createToDo);

// "api/toDo/allToDos"
router.route('/allToDos').get(getAllToDos);

// "api/toDo"
router.route('/').put(updateToDo);

// "api/toDo/:toDoId"
router.route('/:toDoId').delete(removeToDo);

module.exports = router;