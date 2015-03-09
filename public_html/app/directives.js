/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('app.directives',[])
        .directive('navigationbar',[ function(){
                return{
                  restrict: 'E',
                  controller: ['$scope','$http', function($scope, $http){
                          
                          $http.get('data/pages.json').success(function(data){$scope.pages = data});
                          
                  }],
                  templateUrl:'partials/navigationbar.html',
                  
                }
        }])
            .directive('comment',[function(){
                   return{
                       restrict:'E',
                       controller:['$scope', '$http', function($scope, $http){
                                
                       }]
                   } 
            }])

;
