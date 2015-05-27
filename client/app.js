var MainController = (function () {
    function MainController() {
        var that = this;
        this.chapters = [
            {
                srNo: 5,
                name: 'Promise Pattern & Event Handling',
                desc: 'Promise Pattern & Event Handling',
                lesions: [
                    {
                        srNo: 1,
                        title: 'Pit fall of Callback Hell',
                        body: "<h4>Callback</h4>\n<p>\n    A callback method is one which is passed as an argument in another method and which is invoked after\n    some kind of event.\n</p>\nCallbacks also lead to another problem, which you should be already familiar with: <b>callback hell</b>.\n<pre d-highlight><code class=\"java\">\nasyncCall(function(err, data1){\n    if(err) return callback(err);\n        anotherAsyncCall(function(err2, data2){\n            if(err2) return calllback(err2);\n                oneMoreAsyncCall(function(err3, data3){\n                    if(err3) return callback(err3);\n                    // are we done yet?\n                 });\n        });\n});\n</code></pre>\n"
                    },
                    {
                        srNo: 2,
                        title: 'Promise in Javascript',
                        body: "<h3>Story Weather forecast:</h3>\n<blockquote>\n    One morning, a father says to his son: \"Go and get the weather forecast, son!\"\n</blockquote>\n<div class=\"list-group\">\n    <a href=\"#\" class=\"list-group-item alert-info\">\n        Outcomes\n    </a>\n    <a href=\"#\" class=\"list-group-item\">A) Weather forecast retrieved! Sunshine :-)\n        <small><b>// promise fulfilled +ve</b></small>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">B) Weather forecast retrieved! Cloudy and rain :-(\n        <small><b>// promise fulfilled -ve</b></small>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">C) Couldn't get the weather forecast :-/\n        <small><b>//promise was rejected</b></small>\n    </a>\n</div>\n<h3>EXAMPLE:</h3>\n<pre d-highlight><code class=\"javascript\">\n// function somewhere in father-controller.js\nvar makePromiseWithSon = function() {\n// This service's function returns a promise, but we'll deal with that shortly\n    SonService.getWeather()\n    // then() called when son gets back\n        .then(function(data) {\n    // promise fulfilled\n            if (data.forecast==='good') {\n                prepareFishingTrip();\n            } else {\n            prepareSundayRoastDinner();\n        }\n    }, function(error) {\n    // promise rejected, could log the error with: console.log('error', error);\n    prepareSundayRoastDinner();\n    });\n};\n</code></pre>\n"
                    },
                    {
                        srNo: 3,
                        title: 'All Events/Callbacks of $q',
                        body: "<h3>Methods:</h3>\n<div class=\"list-group\">\n    <a href=\"#\" class=\"list-group-item alert-info\">\n        There are 3 different methods that you can use to handle promise result(Either fulfillment or rejection)\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n        A)\n        <small><b>then(successCallback, errorCallback, notifyCallback)</b></small>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n        B)\n        <small><b>.catch(errorCallback)</b></small>\n        – shorthand for promise\n        <small><b>.then(null, errorCallback)</b></small>\n    </a>\n    <a href=\"#\" class=\"list-group-item\">\n        C)\n        <small><b>finally(callback, notifyCallback)</b></small>\n        CLEAN-UP of resources\n    </a>\n</div>\n<h5>EXAMPLE:</h5>\n<pre d-highlight><code class=\"javascript\">\nsomePromise\n    .then(function (data) {\n        /*Error event should handle here*/\n        that.status = 'DONE';\n    }, function (error ) {\n        /*Error event should handle here*/\n        that.status = 'ERROR';\n    }, function (data ) {\n        /*Notify event should handle here*/\n        that.status = 'PENDING';\n    })\n</code></pre>\n"
                    },
                    {
                        srNo: 4,
                        title: 'Some predefine promise base services $http',
                        body: "<h3>Some predefine promise base services <b>$http</b></h3>\n<h5>EXAMPLE:</h5>\n<pre d-highlight>\n<code class=\"javascript\">\n$http.get('data/posts.json')\n    .success(function(data, status, headers, config) {\n        $scope.posts = data;\n    })\n    .error(function(data, status, headers, config) {\n        // log error\n    });\n</code>\n</pre>\n<blockquote>\n    There are some other methods that you can explore. Like $q.all()\n</blockquote>\n<h5>EXAMPLE:</h5>\n<pre d-highlight><code class=\"javascript\">\nvar promise1 = $http({method: 'GET', url: 'a/pi-one-url', cache: 'true'});\nvar promise2 = $http({method: 'GET', url: '/api-two-url', cache: 'true'});\n\n$q.all([promise1, promise2])\n    .then(function(data){\n        console.log(data[0], data[1]);\n    });\n</code></pre>\n"
                    }
                ]
            },
            {
                srNo: 6,
                name: 'View and Routing using UI router ',
                desc: 'View and Routing using UI router ',
                lesions: [
                    {
                        srNo: 1,
                        title: 'Pit fall of Callback Hell',
                        body: "<h4>Callback</h4>\n<p>\n    A callback method is one which is passed as an argument in another method and which is invoked after\n    some kind of event.\n</p>\nCallbacks also lead to another problem, which you should be already familiar with: <b>callback hell</b>.\n<pre d-highlight><code class=\"java\">\nasyncCall(function(err, data1){\n    if(err) return callback(err);\n        anotherAsyncCall(function(err2, data2){\n            if(err2) return calllback(err2);\n                oneMoreAsyncCall(function(err3, data3){\n                    if(err3) return callback(err3);\n                    // are we done yet?\n                 });\n        });\n});\n</code></pre>\n"
                    }
                ]
            }
        ]
        that.iframeUrl = '';
        that.runProgram = function (chapterNo, lesionNo) {
            that.iframeUrl = ['/chapters', chapterNo, lesionNo + '.html'].join('/');
            that.isPeekabooOpen = true;
            console.log(that.iframeUrl)
        }
        that.changeChapter = function (chapterNo) {
            that.selectedChapter = chapterNo;
        }
        that.selectedChapter = 5;
        that.resetProgram = function () {
            that.isPeekabooOpen = false;
        }
        $(document).ready(function () {
            $('pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        });
        //
    }

    return MainController;
})();
var app = angular.module("demoApp", ['ngSanitize', 'truncate']);
app
    .controller('MainController', [MainController])
    .directive('dHighlight', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                hljs.highlightBlock(element.find('code')[0]);
            }
        }
    })
var MainController2 = (function () {
    function MainController2() {
        var that = this;
        that.sayHi = 'Hi!!!'
    }
    return MainController2
})()
var app2 = angular.module("syntxApp", ['ngSanitize', 'truncate']);
app2
    .controller('MainController', ['$scope', '$timeout', MainController2])