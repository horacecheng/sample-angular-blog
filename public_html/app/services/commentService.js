/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('commentModule',[])
        .factory('commentService', ['$scope', function($scope){
                var post = $scope.post;
                
                    return{
                    addComment: function(username, comment){
                        if(!post.hasOwnProperty("comments"))
                        {
                            post.comments = [{"username": username, "comment": comment}]
                       
                        }
                        else
                        {
                            post.comments.push({"username": username, "comment": comment})
                            
                        }
                        return post.comments.indexOf(comments.length-1);
                        
                    },
                    deleteComment: function(index){
                        if(!post.hasOwnProperty("comments"))
                        {
                            return null;
                            
                        }
                        else
                        {
                            post.comments.splice(index,1);
                            
                        }
                        return post.comments;
                    },
                    replaceComment: function(index, newcomment){
                        
                        post.comments.comment(index,1, newcomment)
                        
                    }
                    
                    
                };
        }]);

