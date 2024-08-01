const axios = require("axios");
const fs = require("fs");
const path = require("path");

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json"
    );
    const data = response.data;
    const filePath = path.join(__dirname, "dummyData.json");
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log("Dummy data fetched and saved.");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
