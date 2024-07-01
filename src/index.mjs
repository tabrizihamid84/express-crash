import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

const mockUsers = [
  { id: 1, username: "anson", displayName: "Anson" },
  { id: 2, username: "anson2", displayName: "Anson2" },
  { id: 3, username: "anson3", displayName: "Anson3" },
  { id: 4, username: "anson4", displayName: "Anson4" },
];

app.get("/", (req, res) => {
  res.send("lllll");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
