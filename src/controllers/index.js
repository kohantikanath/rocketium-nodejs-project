const data = require("../data/dummyData.json");

const keys = ["name", "language", "id", "bio", "version"];

const getData = (req, res) => {
  const queries = req.query;
  console.log(queries);

  let arr = [...data];

  for (const key in queries) {
    if (keys.includes(key)) {
      const val = queries[key];
      arr = arr.filter((item) => {
        return (
          item[key].toString().toLowerCase() == val.toString().toLowerCase()
        );
      });
    }
  }

  const sort = queries.sort;

  if(sort) {
    arr.sort((a, b) => {
        if (typeof a[sort] === "string"){
            return a[sort].localeCompare(b[sort]);
        }else if (typeof a[sort] === "number"){
            return a[sort] - b[sort];
        }
        return 0;
    })
  }

  const order = queries.order;
  if(order){
    if(order === "desc"){
        arr.reverse();
    }
  }

  res.json(arr);
};

module.exports = getData;
