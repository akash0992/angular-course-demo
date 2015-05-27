// Some predefine promise base services $http
var MainController = (function () {
    function MainController(TodoService) {
        var that = this;
        TodoService.getTodoList('/promise.json')
            .then(function (response) {
                that.list = response.data.data;
                that.isVisible = true;
            })
        that.message = 'Hi! I am Deepak :-)';
        that.isVisible = false;
    }

    return MainController;
})();
var app = angular.module("demoApp", []);
app.factory('TodoService', function ($http) {
    return {
        getTodoList: function (url) {
            return $http.get(url)
        }
    };
})
app.controller('MainController', ['TodoService', MainController]);
