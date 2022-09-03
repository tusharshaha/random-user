const fs = require("fs");
const userHelper = require("../utils/userHelperFunctions");


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
    const { name, gender, contact, address, photoUrl } = req.body;
    await userHelper.saveUser({ name, gender, contact, address, photoUrl })
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

module.exports.updateRandomUser = async (req, res) => {
    const { id } = req.params;
    const { name, gender, contact, address, photoUrl } = req.body;
    const updatedUser = { name, gender, contact, address, photoUrl };
    if (!id || !Number(id)) {
        res.status(500).send({
            success: false,
            error: "Enter valid id"
        })
        return;
    }
    await userHelper.updateUser(id, updatedUser)
        .then(() => {
            res.status(200).send({
                success: true,
                message: "Successfully updated user"
            })
        }).catch((err) => {
            res.status(500).send({
                success: false,
                error: err.message
            })

        })
}

module.exports.deleteRandomUser = async (req, res) => {
    const { id } = req.params;
    if (!id || !Number(id)) {
        res.status(500).send({
            success: false,
            error: "Enter valid id"
        })
        return;
    }
    await userHelper.deleteUser(id)
        .then(() => {
            res.status(200).send({
                success: true,
                message: "Successfully deleted user"
            })
        }).catch(() => {
            res.status(500).send({
                success: false,
                error: "Intarnal server error!"
            })

        })
}