require('angular')
var courseCtrl = require('./controllers/CourseController');
var courseList = require('./factories/CoursesList');

var app = angular.module('appCourses', []);

app.controller('CourseController', ['$scope', 'CoursesList', courseCtrl])
app.factory('CoursesList', ['$http', courseList]);
