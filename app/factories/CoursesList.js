module.exports = function($http) {
    return $http.get('/courses.json')
    .success(function (data) {
      return data;
    })
    .error(function (err) {
      return err;
    });
  
}