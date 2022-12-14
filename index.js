const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require("./routes/v1/user.route");

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.send("server working")
})
// catch undefined route
app.all("*", (req, res) => {
    res.send("No route found.");
});

app.listen(port, () => {
    console.log(`listening from port ${port}`)
})
