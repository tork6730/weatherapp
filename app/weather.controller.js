(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['WeatherFactory', 'toastr'];

    /* @ngInject */
    function WeatherController(WeatherFactory, toastr) {
        var vm = this;
        // 



        vm.cityData;
        vm.searchHistory = [];
        vm.addSearch = addSearch;
        vm.getWeather = getWeather;

        function getWeather(cityname) {
            var promise = WeatherFactory.getLocationWeather(cityname);
            promise.then(function(data) {
                vm.cityData = data;
                toastr.success("You have entered an actual city!!")
                addSearch();
                console.log(vm.cityData);
            });

        }
        ////////////////
        function addSearch() {
            vm.searchHistory.push({
                "event": vm.cityData.data.name,
                "timeAndDate": Date.now()

            });
        }





    }
})();

// function activate() {

//     WeatherFactory.getWeather().then(function(result){
//         vm.name = result.name;
//     })
// }



// vm.location = 
// vm.lat = 
// vm.long = 
// vm.temp = 
// vm.pressure = 
// vm.humidity = 
// vm.ltemp = 
// vm.htemp = 
// vm.wspeed = 
// vm.cityname =
