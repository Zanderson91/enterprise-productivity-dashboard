const { ToDo } = require("../models");

module.exports = {

  async createToDo({ body }, res) {
    const toDo = await ToDo.create(body);

    if (!toDo) {
      return res.status(400).json({ message: 'Unable to create to do' });
    }

    res.status(200).json(toDo);
  },

  async getAllToDos(req, res) {
    const allToDos = await ToDo.find({});

    if (!allToDos) {
      return res.status(400).json({ message: 'Unable to find todos' });
    }

    res.status(200).json(allToDos);
  },
};