 angular.module('starter.controllers',[])

.controller('AppCtrl',function($scope,$ionicModal,$timeout,$ionicPopup,$http,$state,$ionicHistory){
console.log('AppCtrl');
    var url="http://localhost/ionic/";
var x;
  $scope.loginData={};
//  console.log(x);
//  $scope.adata={};

    $scope.doLogin=function(){

      var admin_user=$scope.loginData.username;
      var admin_password=$scope.loginData.password;

      if(admin_user && admin_password){
          str=url+"login.php?username="+admin_user+"&password="+admin_password;
          $http.get(str)
            .success(function(response){

                $scope.admin=response.records;
                sessionStorage.setItem('loggedin_status',true);
                sessionStorage.setItem('loggedin_id',$scope.admin.admin_id);
                sessionStorage.setItem('loggedin_status',$scope.admin.admin_user);

                $ionicHistory.nextViewOptions({
                  disableAnimate:true,
                  disableBack:true
                })

                $ionicPopup.alert({
                  title:'Lets get Started!',
                  template:'Logged in successfully'
                })

                $state.go('tab.intro',{},{location:"replace",reload:true});
            })
            .error(function(){

              $ionicPopup.alert({
                title:'Try Again!',
                template:'insert correct credentials'
              })
            });

      }else{
        $ionicPopup.alert({
          title:'Fields are empty',
          template:'Enter correct username and password'
        })

      }

    }

    $scope.doLogout=function(){

      sessionStorage.removeItem('loggedin_status');
      sessionStorage.removeItem('loggedin_id');
      sessionStorage.removeItem('loggedin_status');

      $ionicHistory.nextViewOptions({
        disableAnimate:true,
        disableBack:true
      })

      $ionicPopup.alert({
        title:'Logged out!',
        template:'Successfully logged out'
      })

      $state.go('tab.login',{},{location:"replace",reload:true});


    }


})

.controller('addCtrl',function($scope,$ionicModal,$timeout,$ionicPopup,$http,$state,$ionicHistory){

console.log('addCtrl');

var url="http://localhost/ionic/";
$scope.adata={};

  $scope.additem=function(){
//  console.log(x);
        var fname=$scope.adata.fname;
        var lname=$scope.adata.lname;
        var age=$scope.adata.age;

        if(fname && lname && age){

          str=url+"additem.php?fn="+fname+"&ln="+lname+"&ag="+age;
          $http.post(str)

          $ionicPopup.alert({
             title:'Add',
             template:'ok..'
           })


    }

    else{

      $ionicPopup.alert({
        title:'Fill all the fields',
        template:'You need to supply all the details'
      })

    }


        }


})

.controller('signupCtrl',function($scope,$ionicModal,$timeout,$ionicPopup,$http,$state,$ionicHistory){
var cdate;
var date;
console.log('signupCtrl');
// var filterdatetime = $filter('datetmUTC')( date );

var url="http://localhost/ionic/";
$scope.sdata={};

//$scope.cdate = new Date();
//console.log(cdate);


console.log();
  $scope.adduser=function(){
//  console.log(x);
        var email=$scope.sdata.email;
        var un=$scope.sdata.uname;
        var pw=$scope.sdata.pw;
        var sel=$scope.sdata.singleSelect;

        if(email && un && pw){

          str=url+"adduser.php?email="+email+"&un="+un+"&pw="+pw+"&sel="+sel;
          $http.post(str)

          $ionicPopup.alert({
             title:'Add',
             template:'ok..'
           })


    }

    else{

      $ionicPopup.alert({
        title:'Fill all the fields',
        template:'Some fields are missing!'
      })

    }


        }

})
//test modal
   .controller('PlaylistsCtrl', function($scope,$filter) {

console.log('playCrtl');

     $scope.datapointsList = [
       { DPNAME: 'CPMAD', id: 1 },
       { DPNAME: 'ITPM', id: 2 },
       { DPNAME: 'ISM', id: 3 },
       { DPNAME: 'DBMS', id: 4 },
       { DPNAME: 'IPE', id: 8 },
       { DPNAME: 'ITA', id: 9 },
       { DPNAME: 'ISM-2', id: 5 },
       { DPNAME: 'DBMS-2', id: 6 },
{ DPNAME: 'DBMS-3', id: 10 },
{ DPNAME: 'MA', id: 11 },
{ DPNAME: 'EM', id: 12 },
{ DPNAME: 'SPDC', id: 13 },
{ DPNAME: 'MA-2', id: 14 }

     ];
     $scope.names=$scope.datapointsList ;
      $scope.adn = {};
   	 $scope.srchchange = function () {
console.log('play');
           $scope.names = null;
           var filtervalue = [];
   		var serachData=$scope.datapointsList;
   		console.log(serachData);
           for (var i = 0; i <serachData.length; i++) {

               var fltvar = $filter('uppercase')($scope.adn.item);
               var jsval = $filter('uppercase')(serachData[i].DPNAME);

               if (jsval.indexOf(fltvar) >= 0) {
                   filtervalue.push(serachData[i]);
               }
           }
          // console.log("last");
           console.log(filtervalue);
           $scope.names = filtervalue;

       };

       $scope.ressetserach = function () {

           $scope.adn.item = "";
           $scope.names =$scope.datapointsList;
       }
   })




   .controller('mathCtrl', function($scope,$ionicModal,$http) {

  //   $http.get("http://localhost/ionic/test.php")
     //	.success(function (response) {$scope.names = response.records;});



console.log('mathCtrl');

//testing





$ionicModal.fromTemplateUrl('my-modal.html', {
  scope: $scope,
  animation: 'slide-in-up'
}).then(function(modal) {
  $scope.modal = modal;
});


$scope.openModal = function(user) {

//  $http.get("http://localhost/ionic/lastQ.php")
//  .success(function (response) {$scope.values = response.records;});

  //JSON.parse(this.values);


   $scope.modal.show();
   console.log('openModedl in');
   var a="subodhi math";
   console.log(a);
    $scope.user = user;




 };


 $scope.closeModal = function() {
$scope.modal.hide();
};



     }



   )


   .controller('qselectCtrl', function($scope,$ionicModal,$timeout,$ionicPopup,$http,$state,$ionicHistory) {
console.log('qselectCtrl');
var q_number=null;
var url="http://localhost/ionic/";
//Q1
$scope.q1Display=function(){
  q_number=1;
  console.log(q_number);
  $state.go('tab.math',{},{location:"replace",reload:true});

  //send required q number
  str=url+"getQ.php?qn="+q_number;
 $http.post(str);

 //$http.get("http://localhost:81//ionic/getQ.php")
	//.success(function (response) {$scope.names = response.records;});

  console.log("jjs");
}

//Q2
$scope.q2Display=function(){
  q_number=2
  console.log(q_number);
    $state.go('tab.math',{},{location:"replace",reload:true});

//$scope.q22={aaaaaaaaaaaaaaaaaaaa};


$scope.datapointsList = [
  { DPNAME: '1', id: 1 },
  { DPNAME: 'skdfsdkfs', id: 2 }

];
$scope.names=$scope.datapointsList ;



}





      }


   )



   .controller('answertCtrl', function($scope,$ionicModal,$timeout,$ionicPopup,$http,$state,$ionicHistory) {

//var eqn;
$scope.anData={};

$scope.answerDisplay=function(){
var eqn;
//var url="http://localhost/ionic/";
//eqn=$scope.anData.eq;
//console.log(eqn);
//str=url+"answerTest.php?qn="+eqn;
  $http.post(str);


}

})
.controller('answCtrl', function($scope,$ionicModal,$timeout,$ionicPopup,$http,$state,$ionicHistory) {

//var eqn;
//$scope.anData={};

$scope.answerDisplay=function(){
//var eqn;

$http.get("http://localhost/ionic/test.php")
 .success(function (response) {$scope.values = response.records;});


}

})
