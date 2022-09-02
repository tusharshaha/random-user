const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


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
// global error handler
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    });
});