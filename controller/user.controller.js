const fs = require("fs");

const FILE_PATH = "./public/users.json"

module.exports.getRandomUser = (req, res) => {
    fs.readFile(FILE_PATH, "utf-8", (err, data) => {
        if (err) {
            res.status(500).send({
                success: false,
                error: "Internal Server Error"
            })
        } else {
            const users = JSON.parse(data)
            const randomUser = users[Math.floor(Math.random() * users.length)]
            res.status(200).send({
                success: true,
                message: "success",
                data: randomUser
            })
        }
    })
}

module.exports.getAllUsers = (req, res) => {
    const { limit } = req.query;
    let allUser;
    fs.readFile(FILE_PATH, "utf-8", (err, data) => {
        if (err) {
            res.status(500).send({
                success: false,
                error: "Internal Server Error"
            })
        } else {
            const users = JSON.parse(data);
            if (limit >= 0 && limit <= users.length && Number(limit)) {
                allUser = users.slice(0, limit);
            } else {
                allUser = users
            }
            res.status(200).send({
                success: true,
                message: "success",
                data: allUser
            })
        }
    })
}

module.exports.saveRandomUser = (req, res) => {
    const newUser = JSON.stringify(reqBody)
    fs.appendFile(FILE_PATH, newUser, (err) => {
        err ?
            res.status(500).send({
                success: false,
                error: "Required property are missing"
            })
            :
            res.status(200).send({
                success: true,
                message: "Successfully saved user"
            })
    })
}