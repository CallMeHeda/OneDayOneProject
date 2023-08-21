const AnimalModel = require("../models/animal.model");

module.exports.getAnimals = async (req, res) => {
  const animals = await AnimalModel.find();
  res.status(200).json(animals);
};

module.exports.setAnimal = async (req, res) => {
  const { name } = req.body;
  const existingAnimal = await AnimalModel.findOne({ name });
  const requiredFields = [
    "name",
    "description",
    "category",
    "habitat",
    "conservation_status",
    "diet",
    "fun_facts",
    "image",
  ];

  if (existingAnimal) {
    return res
      .status(400)
      .json({ message: "An animal with this name already exists" });
  }

  if (!requiredFields.every((field) => req.body.hasOwnProperty(field))) {
    res.status(400).json({
      message: `An animal must be added with these specific fields: ${requiredFields
        .slice(",")
        .join(", ")}`,
    });
  } else {
    const animal = await AnimalModel.create({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      taxonomy: req.body.taxonomy,
      habitat: req.body.habitat,
      diet: req.body.diet,
      characteristic: req.body.characteristic,
      behavior: req.body.behavior,
      conservation_status: req.body.conservation_status,
      fun_facts: req.body.fun_facts,
      image: req.body.image,
    });
    res.status(200).json(animal);
  }
};
