const express = require('express');
const app_server = express();
const port = 3000;
const connectDB = require('./src/db.js');
const CRUD = require('./app');
const CRUDtaks = require('./task.js');

// Connect to the database
connectDB().then(() => {
  app_server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});

app_server.get('/', async (req, res) => {
  try {
    // Ejecuta las operaciones CRUD usando el modelo de usuario
    //const db = await connectDB();
    const newUser = {
      name: 'John Doe',
      email: 'john@example.com',
      age: 30,
    };
    const createdUser = await CRUD.createUser(newUser);
    console.log('SERVIDOR Usuario creado:', createdUser);

    const allUsers = await CRUD.findUsers();
    console.log('SERVIDOR Todos los usuarios:', allUsers);

    const userId = '64bc7c430dd82ccab24ab4a9';
    const foundUser = await CRUD.findUserById(userId);
    console.log('SERVIDOR Usuario encontrado por ID:', foundUser);

    const userToDeleteId = '64bc7d88079e5234ff730dec';
    const deletedUser = await CRUD.deleteUserById(userToDeleteId);
    console.log('SERVIDOR Usuario eliminado:', deletedUser);

    const userToUpdateId = '64bc7d949982d344ae389327';
    const updatedUser = await CRUD.updateUser(userToUpdateId, { name: 'Updated Name' });
    console.log('SERVIDOR Usuario actualizado:', updatedUser);

    res.send('CRUD operations executed successfully. Check the server console for logs.');
    //db.close();
  } catch (error) {
    console.error('Error al conectar o realizar operaciones en la base de datos:', error);
    res.status(500).send('Internal server error');
  }
});
