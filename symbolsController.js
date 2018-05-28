function symbolsController($scope,$http) {
    $http.get("https://claytonerrington.com/html-codes/symbols.json")
    .success(function(response) {$scope.symbol = response;});
}
