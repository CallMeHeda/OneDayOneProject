const express = require("express");
const {
  getAnimals,
  postAnimal,
  editAnimal,
  addNewAnimalFunFacts,
  deleteAnimal,
} = require("../controllers/animal.controller");
const { upload } = require("../middlewares/upload");
const router = express.Router();

router.get("/", getAnimals);
router.post("/", upload.single("image"), postAnimal);
router.put("/:id", editAnimal);
router.put("/:id/fun_facts", addNewAnimalFunFacts);
router.delete("/:id", deleteAnimal);

module.exports = router;
