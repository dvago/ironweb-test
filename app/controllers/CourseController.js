module.exports = function($scope, CoursesList) {
    
  CoursesList.success(function(data) { 
    $scope.courseLevels = data.levels; 
    $scope.courseItems = data.courses; 
  
    
    
  });
  
}