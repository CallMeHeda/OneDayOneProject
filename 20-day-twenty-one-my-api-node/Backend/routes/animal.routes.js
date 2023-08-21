const express = require("express");
const { setAnimal, getAnimals } = require("../controllers/animal.controller");
const router = express.Router();

router.get("/", getAnimals);
router.post("/", setAnimal);

router.put("/:id", async (req, res) => {
  res.json({ animalId: req.params.id });
});

router.delete("/:id", async (req, res) => {
  res.json({ animalId: `Animal ${req.params.id} supprimé` });
});

module.exports = router;
