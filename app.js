const secrets = require("./secrets.js");
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");

// app.get("/api", (req, res) => {
//   res.json({
//     success: 1,
//     message: "REST API is working",
//   });
// });

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(secrets.APP_PORT, () => {
  console.log(`Server up and running on PORT: ${secrets.APP_PORT}`);
});
