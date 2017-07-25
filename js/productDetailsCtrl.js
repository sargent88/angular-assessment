angular.module('app').controller('productDetailsCtrl', function($scope, $stateParams, shopSrv){

    $scope.getId = () => {
        // console.log('params: ', $stateParams)
        shopSrv.getId($stateParams.id).then(function(res){
            $scope.id = res.data
        })
    }
    $scope.getId()
    // console.log('product: ', $scope)
})