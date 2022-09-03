const fs = require("fs");


const FILE_PATH = "./public/users.json";

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
    await users.push({ id: users.length + 1, ...user });
    const stringifyUsers = JSON.stringify(users);
    const data = await fs.promises.writeFile(FILE_PATH, stringifyUsers, "utf-8");
    return data;
}

module.exports.updateUser = async (id, user) => {
    const allUser = await this.allUser();
    const index = allUser.findIndex(ele => ele.id === Number(id));
    if (index >= 0) {
        allUser[index].name = user.name || allUser[index].name;
        allUser[index].gender = user.gender || allUser[index].gender;
        allUser[index].contact = user.contact || allUser[index].contact;
        allUser[index].address = user.address || allUser[index].address;
        allUser[index].photoUrl = user.photoUrl || allUser[index].photoUrl;
    }else{
        throw new Error("User id not found!");
    }
    const stringifyUsers = JSON.stringify(allUser);
    const data = await fs.promises.writeFile(FILE_PATH, stringifyUsers, "utf-8");
    return data;
}

module.exports.deleteUser = async (id) => {
    const users = await this.allUser();
    const dUser = users.filter(user => user.id !== Number(id))
    const stringifyUser = JSON.stringify(dUser);
    const data = await fs.promises.writeFile(FILE_PATH, stringifyUser, "utf-8");
    return data;
}