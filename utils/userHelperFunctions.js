const fs = require("fs");


const FILE_PATH = "./public/users.json"

module.exports.allUser = async (limit) => {
    let allUser;
    const data = await fs.promises.readFile(FILE_PATH, "utf-8")
    if (!data) {
        return;
    } else {
        const users = JSON.parse(data);
        if (limit >= 0 && limit <= users.length && Number(limit)) {
            allUser = users.slice(0, limit);
        } else {
            allUser = users
        }
    }
    return allUser;
}
