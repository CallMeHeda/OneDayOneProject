const express = require("express");
const {
  setAnimal,
  getAnimals,
  editAnimal,
  addNewAnimalFunFacts,
} = require("../controllers/animal.controller");
const router = express.Router();

router.get("/", getAnimals);
router.post("/", setAnimal);
router.put("/:id", editAnimal);
router.put("/:id/fun_facts", addNewAnimalFunFacts);

// router.delete("/:id", async (req, res) => {
//   res.json({ animalId: `Animal ${req.params.id} supprimé` });
// });

module.exports = router;
