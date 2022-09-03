const fs = require("fs");


const FILE_PATH = "./public/users.json"

module.exports.allUser = async (limit) => {
    let allUser;
    const data = await fs.promises.readFile(FILE_PATH, "utf-8")
    if (!data) {
        return;
    } else {
        const users = JSON.parse(data);
        const suffleUser = users.sort(() => Math.random() - 0.5);
        if (limit >= 0 && limit <= users.length && Number(limit)) {
            allUser = suffleUser.slice(0, limit);
        } else {
            allUser = suffleUser;
        }
    }
    return allUser;
}

module.exports.saveUser = async (user) => {
    const users = await this.allUser();
    await users.push({id: users.length + 1, ...user});
    const stringifyUsers = JSON.stringify(users);
    const data = await fs.promises.writeFile(FILE_PATH, stringifyUsers, "utf-8");
    return data
}