const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, async () => {
  console.log("aplicação iniciada com sucesso");
});
