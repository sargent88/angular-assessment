angular.module('app').controller('shopCtrl', function(shopSrv, $scope){
    
    $scope.getData = () => {
        shopSrv.getData().then(function(res) {
            $scope.products = res.data
        })
    }
    $scope.getData()
    // console.log('shop: ', $scope)
})