const express = require("express")

const app = express();
app.use(express.static("./public"))

console.log(app)

app. listen(3000, () => console.log("listen http://localhost:3000"))