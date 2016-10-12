(function() {
    'use strict';

    angular
        .module('app')
        .factory('WeatherFactory', WeatherFactory);

    WeatherFactory.$inject = ['$http'];

    /* @ngInject */
    function WeatherFactory($http) {
        var service = {
            getLocationWeather: getLocationWeather
        };
        return service;

        ////////////////

        function getLocationWeather(city) {

            return $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather',
                params: {
                    APPID: '9df2180a41f8a77f7f435abb28cafd81',
                    q: city,
                    units: "imperial"

                },
            }).then(function(response) {

                return response;

            });
        }
    }
})();





// REVIEWED - MT JDCT HN
