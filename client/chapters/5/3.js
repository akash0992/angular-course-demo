// all event/callbacks of $q
//then(successCallback, errorCallback, notifyCallback)
//catch(errorCallback) – shorthand for promise.then(null, errorCallback)
//finally(callback, notifyCallback)
//deferred.notify('About to greet ' + name + '.');

var MainController = (function () {
    function MainController($scope, $timeout, TodoService) {
        var that = this;
        TodoService.getTodoList('/promise.json')
            .then(function (data) {
                that.list = data;
                that.isVisible = true;
                that.status = 'DONE';
            }, function (error /*Error event should handle here*/) {

            }, function (data /*Notify event should handle here*/) {
                that.status = 'PENDING';
                that.percentage = data.percentage;
            })
        that.message = 'Hi! I am Deepak :-)';
        that.status = 'START';
    }

    return MainController;
})();
var app = angular.module("demoApp", []);
app.factory('TodoService', function ($q, $interval) {
    return {
        getTodoList: function (url) {
            var deferred = $q.defer();
            var data = [
                {
                    "task": "I wanna to learn Web-Worker...",
                    "stared": "nopes!!: (",
                    "estimatedTime": "Infinity"
                },
                {
                    "task": "I wanna to learn Monkey-Patching...",
                    "stared": "Yup!!!",
                    "estimatedTime": "1day"
                },
                {
                    "task": "I wanna to learn ui-router",
                    "stared": "nopes!!: (",
                    "estimatedTime": "99999hr"
                }
            ];
            var percentage = 0;
            var interval = $interval(function () {
                percentage = percentage + 5;
                deferred.notify({percentage: percentage});
                if (percentage > 99) {
                    $interval.cancel(interval);
                    deferred.resolve(data)
                }

            }, 500)
            return deferred.promise;
        }
    };
})
app.controller('MainController', ['$scope', '$timeout', 'TodoService', MainController]);
