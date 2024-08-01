const express = require("express");
const apiRoutes = require("./routes/api");
require("dotenv").config();

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
