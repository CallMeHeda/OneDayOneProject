require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const port = 3000;

const auth = `Bearer ${process.env.AUTHORIZATION}`;
const url = process.env.URL;

app.get("/", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  const options = {
    method: "GET",
    url: `${url}top_rated`,
    headers: {
      accept: "application/json",
      Authorization: auth,
    },
  };

  try {
    const response = await axios(options);
    res.send(response.data.results);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la requête Axios" });
  }
});

app.get("/details/:id", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  let q = req.params.id;
  const options = {
    method: "GET",
    url: `${url}${q}`,
    headers: {
      accept: "application/json",
      Authorization: auth,
    },
  };

  try {
    const response = await axios(options);
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la requête Axios" });
  }
});

app.get("/details/:id/aggregate_credits", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  let q = req.params.id;
  const options = {
    method: "GET",
    url: `${url}${q}/aggregate_credits`,
    headers: {
      accept: "application/json",
      Authorization: auth,
    },
  };

  try {
    const response = await axios(options);
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la requête Axios" });
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
