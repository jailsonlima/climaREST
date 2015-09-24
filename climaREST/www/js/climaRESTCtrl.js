    var climaRest = angular.module('climaRest', ["ionic"]);

    climaRest.controller('climaRestCtrl', function($scope, $http){

        $scope.url = "http://api.openweathermap.org/data/2.5/weather?q=";
		$scope.temperatura = "";
		$scope.humidade = "";
		$scope.velocidadeVento = "";
		$scope.nomeCidade = "";
		$scope.pressao = "";
		$scope.lat = "";
		$scope.lon = "";
        $scope.cidade = "Assis";
        $scope.icone = "";
        $scope.descricaoTempo = "";
        $scope.mostrarPrevisao = false;    

        $scope.loadWeather = function(){
            $http
                .get($scope.url+$scope.cidade+"&units=metric&lang=pt")
                .success(function(result){
                    console.log(result);
                    $scope.temperatura = result.main.temp;
                    $scope.humidade = result.main.humidity;            
                    $scope.velocidadeVento = result.wind.speed;
                    $scope.nomeCidade = result.name;
                    $scope.pressao = result.main.pressure;
                    $scope.lat = result.coord.lat;
                    $scope.lon = result.coord.lon;
                    $scope.icone = result.weather[0].icon;
                    $scope.descricaoTempo = result.weather[0].description;

                    $scope.mostrarPrevisao = true; 

                })
                .error(function(){
                    alert("Não foi possível carregar os dados");
                });
        }

    });