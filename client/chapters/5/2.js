// Yeah!! new design pattern Deferred and Promise
var MainController = (function () {
    function MainController($scope, $timeout, TodoService) {
        var that = this;
        TodoService.getTodoList()
            .then(function (tasks) {
                that.list = tasks.data
                that.isVisible = true;
            })
        that.message = 'Hi! I am Deepak :-)';
        that.isVisible = false;
    }

    return MainController;
})();
var app = angular.module("demoApp", []);
app.factory('TodoService', function ($q) {
    return {
        getTodoList: function () {
            var defer = $q.defer();
            $.get("/promise.json", function (response) {
                defer.resolve(response);
            })
            return defer.promise;
        }
    };
})
app.controller('MainController', ['$scope', '$timeout', 'TodoService', MainController]);
