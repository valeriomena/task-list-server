// app.js
const env = require('dotenv');
const path = require('path');
const envPath = path.resolve(__dirname, '..', '.env');
env.config({ path: envPath });
const expect = require('jest');
const mongoose = require('mongoose');

const connectDB = require('./src/db.js');

//importando el modelo
const UserModel = require("./src/models/userModel.js");
const model = mongoose.model;
//expect(UserModel).toBe(model("users"));


(async () => {
  try {
    // Conecta a la base de datos
    const db = await connectDB();

    // Ejecuta las operaciones CRUD usando el modelo de usuario
    const newUser = {
        id : "69",
        name : "Colaborador1",
        email : "Colaborador1@tasklist.com",
        password : "123456",
        passwordCheck : "123456"
    };
    const createdUser = await CRUD.createUser(newUser);
    console.log('Usuario creado:', createdUser);

    const userToUpdateId = '64bc7bcc3eb8b53776edf040';
    const updatedUser = await CRUD.updateUser(userToUpdateId, { name: 'Updated Name' });
    console.log('Usuario actualizado:', updatedUser);
      
    const allUsers = await CRUD.findUsers();
    console.log('Todos los usuarios:', allUsers);

    const userId = '64a754a53faf7698a1485332';
    const foundUser = await CRUD.findUserById(userId);
    console.log('Usuario encontrado por ID:', foundUser);

    const userToDeleteId = '64bc7de471496a029b31dc6d';
    const deletedUser = await CRUD.deleteUserById(userToDeleteId);
    console.log('Usuario eliminado:', deletedUser);
    // Cierre de la conexión a la base de datos
    db.close();
  } catch (error) {
    console.error('Error al conectar o realizar operaciones en la base de datos:', error);
  }
})();

const createUser = async (user) => {
    try {
        const result = await UserModel.create(user);
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
};

const findUsers = async () => {
    try {
        const result = await UserModel.find();
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
};


const findUserById = async (id) => {
    try {
        const result = await UserModel.findById(id);
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
};

const deleteUserById = async (id) => {
    try {
        const result = await UserModel.findByIdAndDelete(id);
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
};

const updateUser = async (id, user) => {
    try {
        const result = await UserModel.findByIdAndUpdate(id, user, { new: true });
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
};

const CRUD = {
  createUser,
  findUsers,
  findUserById,
  deleteUserById,
  updateUser,
};

module.exports = CRUD;

