'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

_mongoose2.default.connect('mongodb://localhost/tasks');

var taskModel = _mongoose2.default.model('task', {
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
});

var logError = function logError(error) {
    if (error) throw error;
};

var server = function server() {
    app.use(_express2.default.static('client/public'));

    app.get('/get/all', function (request, response) {

        taskModel.find(function (error, tasks) {
            logError(error);
            response.send(tasks);
        });
        console.log('retrieved');
    });

    app.get('/save/:task/:ID', function (request, response) {
        var _request$params = request.params,
            task = _request$params.task,
            ID = _request$params.ID;


        new taskModel({ task: task, ID: ID }).save(function (error, savedTask) {
            logError(error);
            response.send(savedTask);
        });
    });

    app.get('/update/:date/:isCompleted/:task', function (request, response) {
        var _request$params2 = request.params,
            date = _request$params2.date,
            isCompleted = _request$params2.isCompleted,
            task = _request$params2.task;

        taskModel.findOneAndUpdate({ date: date }, { isCompleted: isCompleted, task: task }, { new: true }, function (error, updatedTask) {
            logError(error);
            response.send(updatedTask);
        });
    });

    app.get('/remove/:date', function (request, response) {
        var date = request.params.date;


        taskModel.remove({ date: date }, function (error, deletedTask) {
            logError(error);
            response.send(deletedTask);
        });
    });

    app.listen(3000, function () {
        console.log('App listening on port 3000!');
    });
};

exports.default = server;