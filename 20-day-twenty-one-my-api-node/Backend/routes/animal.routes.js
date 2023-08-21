const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ animal: "Lion" });
});

router.post("/", async (req, res) => {
  res.json({ animal: req.body.animal });
});

router.put("/:id", async (req, res) => {
  res.json({ animalId: req.params.id });
});

router.delete("/:id", async (req, res) => {
  res.json({ animalId: `Animal ${req.params.id} supprimé` });
});

module.exports = router;
