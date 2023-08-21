const AnimalModel = require("../models/animal.model");
const { GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { s3Client } = require("../middlewares/upload");

const bucketName = process.env.BUCKET_NAME;

module.exports.getAnimals = async (req, res) => {
  const animals = await AnimalModel.find();

  for (const animal of animals) {
    const getObjectParams = {
      Bucket: bucketName,
      Key: animal.image,
    };
    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3Client, command, {
      expiresIn: 3600,
    });
    animal.imageUrl = url;
  }

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
    "diet",
    "conservation_status",
    "fun_facts",
  ];

  const missingFields = requiredFields.filter((field) => !req.body[field]);
  console.log(missingFields);

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
    image: req.file.location,
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

  if (!animal) {
    return res.status(400).json({ message: "This animal doesn't exists" });
  } else {
    await animal.deleteOne();

    res
      .status(200)
      .json({ message: `Animal ${animal.name} deleted successfully` });
  }
};
