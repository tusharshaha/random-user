const fs = require("fs");

const FILE_PATH = "./public/users.json"

module.exports.getRandomUser = async (req, res) => {
    fs.readFile(FILE_PATH, "utf-8", (err, data) => {
        if(err){
            console.log(err)
            res.status(500).send({
                success: false,
                error: "Internal Server Error"
            })
        }else{
            const users = JSON.parse(data)
        }
    })
}