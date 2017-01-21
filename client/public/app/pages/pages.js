angular.module('myApp')
    .controller('homeController',homeController)
    .controller('cartController',cartController)
    .service('pageService',pageService);

//home controller
//START
homeController.$inject = ['pageService'];
function homeController(pageService) {
    'use strict';
    let vm = this;
    vm.submit=submit;
    function submit(){
        vm.submited=true;
        if(vm.employeeForm.$invalid)return;
        let employeeData={
            employeeName:vm.employeeModel.employeeName,
            employeeCity:vm.employeeModel.employeeCity
        }
    }
}
//END


//home controller
//START
cartController.$inject=['$window'];
function cartController($window){
    let vm=this;
    vm.name='cart';
}
//END

pageService.$inject=['PRODUCTS','$http'];
function pageService(PRODUCTS,$http) {
    let vm=this;
    vm.getProducts=getProducts;
    function getProducts(){
        return PRODUCTS;
        // return $http.get();
    }
}
