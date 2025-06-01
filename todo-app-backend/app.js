const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", taskRoutes);


app.listen(3000, () => {
    console.log("Server is running on port no. 3000");
})


