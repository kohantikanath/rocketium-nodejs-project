const express = require("express");
const apiRoutes = require("./routes/api");
require("dotenv").config();

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/api", apiRoutes);

app.use((req, res, next) => {
  console.log(`404 NOT Found: ${req.method} ${req.url}`);
  res.status(404).send("404 NOT Found");
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
