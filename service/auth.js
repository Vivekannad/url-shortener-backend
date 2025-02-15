const users = {};

const setUsers = (uid , user) => {
    users[uid] = user;
}

const getUser = (id) => {
    return users[id];
}

module.exports = {
    setUsers , 
    getUser
}