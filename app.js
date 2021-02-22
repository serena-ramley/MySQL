const express = require("express");
const app = express();

const secrets = require("./secrets.js");

app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "REST API is working",
  });
});

app.listen(secrets.APP_PORT, () => {
  console.log(`Server up and running on PORT: ${secrets.APP_PORT}`);
});
