/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(
        function (){
             var app = angular.module('blogapp',['ngRoute','blogapp.controllers' ]);
             app.config(["$routeProvider",function($routeProvider){
                $routeProvider.when('/',{
                    templateUrl: 'views/post.html',
                    controller: 'PostController'
                }).when('/post/:id',{
                    templateUrl:'views/singlepost.html',
                    controller:'SinglePostController'
                }).when('/page/:id',{
                    templateUrl:'views/page.html',
                    controller:'PageController'
                })
                  .otherwise({
                    redirectTo: "/"
                });
             }])
        }

        )();

