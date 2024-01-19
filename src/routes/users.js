const express = require('express');
const UserRepo = require('../repos/user-repo');
const TasksRepo = require('../repos/tasks-repo')

const router = express.Router();

// Users

// Fetching all users

router.get('/users', async(req, res)=>{
    const users = await UserRepo.find();
    console.log(users)
    res.send(users);
})

// Inserting a user

router.post('/users', async(req, res)=>{
    const { username, age } = req.body;
    const user = await UserRepo.insert(username, age);
    res.send(user);
})

// Find one user by ID

router.get('/users/:id', async(req, res)=>{
    const { id } = req.params;

    const users = await UserRepo.findById(id);
    if(users){
        res.send(users);
    }
    else{
        res.sendStatus(404);
    }
})


// Updating user

router.put('/users/:id', async(req,res)=>{
    const { id } = req.params;
    const { usename, age } = req.body;

    const user = await UserRepo.update(id, username, age);
    if(user){
        res.send(user);
    }
    else{
        res.sendStatus(404);
    }
})

// Tasks

// Fetching All tasks

router.get('/tasks', async(req, res)=>{
    const tasks =  await TasksRepo.find();
    console.log(tasks);
    res.send(tasks);
})

// Inserting a task

router.post('/tasks', async(req, res)=>{
    const { description, completed } = req.body;
    const task = await TasksRepo.insert(description, completed);
    res.send(task);
})

// Find One by ID

router.get('/tasks/:id', async(req,res)=>{
    const { id } = req.params;
    
    const task = await TasksRepo.findById(id);
    console.log(task);
    if(task){
        res.send(task);
    }
    else{
        res.sendStatus(404);
    }
})

module.exports = router