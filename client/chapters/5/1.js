// Pit fall of Callback Hell
var MainController = (function () {
    function MainController(TodoService) {
        var that = this;
        TodoService.getTodoListCallbackHell(function (tasks) {
            that.list = tasks.data
            that.isVisible = true;
        })
        that.message = 'Hi! I am Deepak :-)';
        that.isVisible = false;
    }

    return MainController;
})();
var app = angular.module("demoApp", []);
app.factory('TodoService', function ($timeout) {
    return {
        getTodoListCallbackHell: function (callback) {
            $.get("/promise.json", function (response) {
                $timeout(function () {
                    callback(response)
                }, 1000);
            })
        }
    };
})
app.controller('MainController', ['TodoService', MainController]);
