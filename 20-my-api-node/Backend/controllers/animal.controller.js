const AnimalModel = require("../models/animal.model");
const { getObjectSignedUrl, deleteFile } = require("../middlewares/upload");

module.exports.getAnimals = async (req, res) => {
  const animals = await AnimalModel.find();

  for (let animal of animals) {
    animal.imageUrl = await getObjectSignedUrl(animal.image);
  }

  res.status(200).json(animals);
};

module.exports.getByName = async (req, res) => {
  const animalName = req.params.name.toLowerCase();

  const animal = await AnimalModel.findOne({
    name: { $regex: animalName, $options: "i" },
  });

  animal.imageUrl = await getObjectSignedUrl(animal.image);

  res.status(200).json(animal);
};

module.exports.postAnimal = async (req, res) => {
  const animalName = req.body.name.toLowerCase();
  const imageUrl = req.file.location;
  const imageName = imageUrl
    .split("https://fun-facts-animals.s3.eu-west-3.amazonaws.com/")
    .pop();
  const existingAnimal = await AnimalModel.findOne({
    name: { $regex: new RegExp("^" + animalName + "$", "i") },
  });

  const requiredFields = [
    "name",
    "description",
    "category",
    "habitat",
    "diet",
    "conservation_status",
    "fun_facts",
  ];

  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (existingAnimal) {
    return res
      .status(400)
      .json({ message: "An animal with this name already exists" });
  }

  if (!req.file) {
    missingFields.push("image");
  }

  if (missingFields.length > 0) {
    return res.status(400).json({
      message: `An animal must be added with these specific fields: ${missingFields.join(
        ", "
      )}`,
    });
  }

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
    image: imageName,
  });
  res.status(200).json(animal);
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

  await deleteFile(animal.image);

  if (!animal) {
    return res.status(400).json({ message: "This animal doesn't exists" });
  } else {
    await animal.deleteOne();

    res
      .status(200)
      .json({ message: `Animal ${animal.name} deleted successfully` });
  }
};
