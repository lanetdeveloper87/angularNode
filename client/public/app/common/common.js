angular.module('myApp')
    .component("navBar", {
        restrict: 'E',
        templateUrl: "app/common/navBar/navBar.html",
        controller: navBarController,
        controllerAs: "vm",
        bindings:{}
    })
    .component("leftSidebar",{
        restrict: 'E',
        templateUrl: "app/common/leftSidebar/sidebar.html",
        controller: sideBarController,
        controllerAs: "vm",
        bindings:{}
    });

//controller for navBar component
//START
navBarController.$inject=[];
function navBarController(){
    let vm=this;
    vm.name='navBar';
}
//END

//controller for sideBar component
//START
sideBarController.$inject=[];
function sideBarController(){
    let vm=this;
    vm.name='sideBar';
}
//END