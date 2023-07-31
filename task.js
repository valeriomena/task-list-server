// app.js
const env = require('dotenv');
const path = require('path');
const envPath = path.resolve(__dirname, '..', '.env');
env.config({ path: envPath });
const expect = require('jest');
const mongoose = require('mongoose');

const connectDB = require('./src/db.js');

//importando el modelo
const taskModel = require("./src/models/taskModel.js");
const model = mongoose.model;
//expect(UserModel).toBe(model("users"));


(async () => {
  try {
    // Conecta a la base de datos
    const db = await connectDB();

    // Ejecuta las operaciones CRUD usando el modelo de usuario
    const newTask = {
        _id: new mongoose.Types.ObjectId(),
        id: "345",
        doneTask : true,
        name : "Montar serivdores",
        descript : "curso de react",
        date : new Date("2023-07-24"),
        hour : new Date("18:30:00"),
        email: "valeriomen@gmail.com",
        responsible : "Andres"
    };
     const createTask = await CRUDtaks.createTask(newTask);
    console.log('Tarea creado:', createTask);

    const taskToUpdateId = '64bc7bcc3eb8b53776edf040';
    const updateTask = await CRUDtaks.updateTask(taskToUpdateId, { name: 'Updated Name' });
    console.log('Tarea actualizada:', updatedTask);
      
    const alltaks = await CRUDtaks.findTaks();
    console.log('Todas las Tarea:', alltask);

    const taskId = '64a754a53faf7698a1485332';
    const foundTask = await CRUDtaks.findTaksById(taskId);
    console.log('Tarea encontrada por ID:', foundTask);

    const taskToDeleteId = '64bc7de471496a029b31dc6d';
    const deletedTask = await CRUDtaks.deleteTaksById(taskToDeleteId);
    console.log('Tarea eliminada:', deletedTask);
    // Cierre de la conexión a la base de datos
    db.close();
  } catch (error) {
    console.error('Error al conectar o realizar operaciones en la base de datos:', error);
  }
})();

const createTask = async (task) => {
    try {
        const result = await taskModel.create(task,{ wtimeout: 5000 });
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
};

const findTaks = async () => {
    try {
        const result = await taskModel.find();
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
};


const findTaksById = async (id) => {
    try {
        const result = await taskModel.findById(id);
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
};

const deleteTaksById = async (id) => {
    try {
        const result = await taskModel.findByIdAndDelete(id);
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
};

const updateTask = async (id, task) => {
    try {
        const result = await taskModel.findByIdAndUpdate(id, task, { new: true });
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
};

const CRUDtaks = {
  createTask,
  findTaks,
  findTaksById,
  deleteTaksById,
  updateTask,
};

module.exports = CRUDtaks;
