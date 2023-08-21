const AnimalModel = require("../models/animal.model");

module.exports.getAnimals = async (req, res) => {
  const animals = await AnimalModel.find();
  res.status(200).json(animals);
};

module.exports.postAnimal = async (req, res) => {
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

module.exports.editAnimal = async (req, res) => {
  const animal = await AnimalModel.findById(req.params.id);

  if (!animal) {
    return res.status(400).json({ message: "This animal doesn't exists" });
  } else {
    const updateAnimal = await AnimalModel.findByIdAndUpdate(animal, req.body, {
      new: true,
    });
    res.status(200).json(updateAnimal);
  }
};

module.exports.addNewAnimalFunFacts = async (req, res) => {
  const { fun_facts } = req.body;
  const existingAnimal = await AnimalModel.findById(req.params.id);

  if (!existingAnimal) {
    return res.status(400).json({ message: "This animal doesn't exists" });
  } else {
    const duplicateFact = existingAnimal.fun_facts.some((fact) =>
      fun_facts.includes(fact)
    );

    if (duplicateFact) {
      return res
        .status(400)
        .json({ message: "This fun fact already exists for this animal" });
    } else {
      const updateAnimal = await AnimalModel.findByIdAndUpdate(
        existingAnimal,
        { $push: { fun_facts: { $each: [req.body.fun_facts] } } },
        { new: true }
      );
      res.status(200).json(updateAnimal);
    }
  }
};

module.exports.deleteAnimal = async (req, res) => {
  const animal = await AnimalModel.findById(req.params.id);

  if (!animal) {
    return res.status(400).json({ message: "This animal doesn't exists" });
  } else {
    await animal.deleteOne();

    res
      .status(200)
      .json({ message: `Animal ${animal.name} deleted successfully` });
  }
};
