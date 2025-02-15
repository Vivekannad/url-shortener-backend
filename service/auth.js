// const users = {};

// const setUsers = (uid , user) => {
//     users[uid] = user;
// }

// const getUser = (id) => {
//     return users[id];
// }

// module.exports = {
//     setUsers , 
//     getUser
// }

const users = new Map();

const setUsers = (uid, user) => {
    users.set(uid, user);
};

const getUser = (id) => {
    return users.get(id);
};

module.exports = {
    setUsers, 
    getUser
};
