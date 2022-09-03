const fs = require("fs");
const userHelper = require("../utils/userHelperFunctions");

const FILE_PATH = "./public/users.json"

module.exports.getRandomUser = async (req, res) => {
    const users = await userHelper.allUser();
    if (!users) {
        res.status(500).send({
            success: false,
            error: "Internal Server Error"
        })
    } else {
        const randomUser = users[Math.floor(Math.random() * users.length)]
        res.status(200).send({
            success: true,
            message: "success",
            data: randomUser
        })
    }
}

module.exports.getAllUsers = async (req, res) => {
    const { limit } = req.query;
    const allUser = await userHelper.allUser(limit);
    if (!allUser) {
        res.status(500).send({
            success: false,
            message: "Internal server error!",
        })
    } else {
        res.status(200).send({
            success: true,
            message: "success",
            data: allUser
        })
    }
}

module.exports.saveRandomUser = async (req, res) => {
    const newUser = req.body;
    await userHelper.saveUser(newUser)
        .then(() => {
            res.status(200).send({
                success: true,
                message: "Successfully saved user"
            })
        }).catch(() => {
            res.status(500).send({
                success: false,
                error: "Required property are missing"
            })

        })

}