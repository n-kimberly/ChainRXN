import express from 'express';
import mongoose from 'mongoose';

var app = express();

mongoose.connect('mongodb://localhost/tasks');

let taskModel = mongoose.model('task', {
    task: String,
    date: {
        type: Date,
        default: Date.now
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    ID: {
        type: Number,
        default: 2
    }
})

var logError = (error) => {
    if (error)
        throw error;
}

var server = () => {
    app.use(express.static('client/public'))

    app.get('/get/all', (request, response) => {

        taskModel.find((error, tasks) => {
            logError(error);
            response.send(tasks);
        })
        console.log('retrieved');
    })

    app.get('/save/:task/:ID', (request, response) => {
        let {task, ID} = request.params

        new taskModel({task, ID}).save((error, savedTask) => {
            logError(error);
            response.send(savedTask);
        })
    })

    app.get('/update/:date/:isCompleted/:task', (request, response) => {
        let {date, isCompleted, task} = request.params
        taskModel.findOneAndUpdate({date}, {isCompleted, task}, {new: true}, (error, updatedTask) => {
            logError(error);
            response.send(updatedTask);
        })
    })

    app.get('/remove/:date', (request, response)=>{
        let {date} = request.params

        taskModel.remove({date}, (error, deletedTask) => {
            logError(error);
            response.send(deletedTask);
        })
    })

    app.listen(3000, () => {
        console.log('App listening on port 3000!')
    })
}

export default server;