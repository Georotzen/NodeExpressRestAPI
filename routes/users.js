import express from 'express';
//import { Router } from 'express';

import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = [
  {
    firstName: 'Georotzen',
    lastName: 'Palomares',
    age: 47,
    id: '26a1254d-b39c-4a3b-8583-a8a32285d8f2'
  },
  {
    firstName: 'Aurora',
    lastName: 'Servinezh',
    age: 50,
    id: 'd9f97ae0-176b-455f-9977-cc8d19f89171'
  },
  {
    firstName: 'Michael',
    lastName: 'Sanchez',
    age: 44,
    id: '9df66ed7-7fef-4083-a7e1-0a446ffb8fd0'
  }
]

/** All routes in here are starting with /users */
router.get('/', (req, res) => {
   // console.log(users);
    res.send(users);
    console.log(users);
   console.log('Router from Express.JS works just fine!');

});

router.post('/', (req, res) => {
    console.log(req.body);

    const user = req.body;
    // const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    // const userWithId = { ...user, id: uuidv4()}

    users.push({ ...user, id: uuidv4()});

    console.log('POST Route Reached...');
    res.send(`User with the name ${user.firstName} has been added to the Database!`);


});

router.get('/:id', (req, res) => {
    //console.log(req.params);
    const { id } = req.params;
   const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);

});

router.delete('/:id', (req, res) => {

    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the ${id} has been deleted from Database.`)
});

router.patch('/id:', (req, res) => {
    //const { id } = req.params;

    const { firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id === req.params.id);

        if (firstName) user.firstName = firstName;

        if (lastName) user.lastName = lastName;

        if (age) user.age = age;

        res.send(`User with the ID: ${id} has been successfully updated in MainDB Database`);

});

export default router;
