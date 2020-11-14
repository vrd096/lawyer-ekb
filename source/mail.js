const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/registration", (req, res) => {
  console.log(req.body);
});
app.get("/registration", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}/registration`)
);
