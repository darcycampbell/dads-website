const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api", (req, res) => {
  res.json({ message: `${req.body.message} from server!` });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
