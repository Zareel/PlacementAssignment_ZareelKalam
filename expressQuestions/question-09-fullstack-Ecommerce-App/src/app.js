import express from "express";

const app = express();

// starting a server
app.get("/", (req, res) => {
  res.send(`<h1>This is homepage</h1>`);
});

export default app;
