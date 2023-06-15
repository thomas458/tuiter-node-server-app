// import users from "../users/users.js"
//
//
// export const findAllUsers = () => users;
import usersModel from "../users/user-model.js";

export const findAllUsers = () =>
    usersModel.find();

export const findUserById = (uid) => {
    // const index = users.findIndex((u) => u._id === uid);
    // if (index !== -1) return users[index];
    // return null;
    usersModel.findById(id);

};


export const findUserByUsername = (username) => {
    // const index = users.findIndex((u) => u.username === username);
    // if (index !== -1) return users[index];
    // return null;
    usersModel.findOne({ username });
};


export const findUserByCredentials = (username, password) => {
    // const index = users.findIndex((u) => u.username === username && u.password === password);
    // if (index !== -1) return users[index];
    // return null;
    usersModel.findOne({ username, password });
};


export const createUser = (user) => {
    // return user;
    usersModel.create(user);
};


export const updateUser = (uid, user) => {
    // const index = users.findIndex((u) => u._id === uid);
    // users[index] = { ...users[index], ...user };
    // return {status: 'ok'}
    usersModel.updateOne({ _id: id }, { $set: user });

};


export const deleteUser = (uid) => {
    // const index = users.findIndex((u) => u._id === uid);
    // users.splice(index, 1);
    // return {status: 'ok'}
    usersModel.deleteOne({ _id: id });
};
