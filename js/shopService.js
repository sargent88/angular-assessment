angular.module('app').service('shopSrv', function($http){
    
    this.getData = () => {
        return $http.get('https://practiceapi.devmountain.com/products')
    }

    this.getId = (id) => {
        return $http.get(`https://practiceapi.devmountain.com/products/${id}`)
    }
})