const { ToDo } = require("../models");

module.exports = {

  async createToDo({ body }, res) {
    try
    {
      const toDo = await ToDo.create(body);
  
      if (!toDo) {
        return res.status(400).json({ message: 'Unable to create to do' });
      }
  
      res.status(200).json(toDo);

    }
    catch (err)
    {
      console.log(err);
    }
  },

  async getAllToDos(req, res) {
    const allToDos = await ToDo.find({});

    if (!allToDos) {
      return res.status(400).json({ message: 'Unable to find todos' });
    }

    res.status(200).json(allToDos);
  },

  async updateToDo(req, res) {
    const item = {
      id: req.body.id,
      text: req.body.text,
      eagerness: req.body.eagerness,
      isComplete: req.body.isComplete,
    }
    await ToDo.findOneAndUpdate(
      { id: req.body.id },
      { $set: item },
      { new: true }
    );
    
    res.status(200).json({message: "Successfully updated to do"});
  },

  async removeToDo(req, res) {
    const { toDoId } = req.params;
    const toDo = await ToDo.findOneAndDelete({id: toDoId});

    if (!toDo) {
      return res.status(400).json({ message: 'Unable to find todos with this id' });
    }

    res.status(200).json(toDo);
  }
};