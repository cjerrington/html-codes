function symbolsController($scope,$http) {
    $http.get("http://claytonerrington.com/html-codes/symbols.json")
    .success(function(response) {$scope.symbol = response;});
}