/*
 *
 *  * Copyright (C) 2015 eveR Vásquez.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
angular.module("my.first.controller", [])
    .directive('ngImage',function(){
        return function(scope,element,attrs){
            attrs.$observe('ngImage',function(value){
                //css
            })
        }
    })
    .controller('FirstController', ["$scope","$http",function ($scope,$http) {
    var url = 'https://api.github.com/users/sonico999/repos';
    $scope.posts =[];
    $http.get(url)
        .success(function(response){
            $scope.posts = response;
        }).error(function(){

        });
}]);

