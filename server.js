const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.send("EAGLE AI STUDIO Backend is running!");
});

app.post("/generate-video", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({
      error: "Please enter a valid scene prompt."
    });
  }

  res.json({
    status: "received",
    message: "Prompt received. AI video provider is not connected yet.",
    prompt: prompt
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`EAGLE AI STUDIO running on port ${PORT}`);
});
