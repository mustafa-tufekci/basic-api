const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let data = [
  { id: 1, name: "Example 1" },
  { id: 2, name: "Example 2" },
];

app.get("/api/data", (req, res) => {
  res.status(200).json(data);
});

app.get("/api/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({ message: "No such data was found." });
  }

  res.status(200).json(item);
});

app.post("/api/data", (req, res) => {
  const newItem = {
    id: data.length + 1,
    name: req.body.name,
  };

  data.push(newItem);
  res.status(201).json(newItem);
});

app.listen(port, () => {
    console.log(`port ${port} listening.`)
})