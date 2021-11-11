/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("hello world");

const weatherInfo = (()=>{
    function getWeatherInfo(location){
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=cf59f533d7699be0364c16aa6a3d8741', {
            mode: 'cors'
        })
        .then(function(response){

            return response.json();

        })
        .then(function(response){
            console.log(response.main.humidity);
        })
    }
        return {
            getWeatherInfo,
        }
})();

const weatherUI = (()=>{
    let weatherObject = weatherInfo.getWeatherInfo('London');
    
    // let weatherResult = JSON.parse(weatherObject.getWeatherInfo);
    // console.table(weatherResult);
})();


//http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&APPID=cf59f533d7699be0364c16aa6a3d8741
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0QscUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpO1xuXG5jb25zdCB3ZWF0aGVySW5mbyA9ICgoKT0+e1xuICAgIGZ1bmN0aW9uIGdldFdlYXRoZXJJbmZvKGxvY2F0aW9uKXtcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0nICsgbG9jYXRpb24gKyAnJkFQUElEPWNmNTlmNTMzZDc2OTliZTAzNjRjMTZhYTZhM2Q4NzQxJywge1xuICAgICAgICAgICAgbW9kZTogJ2NvcnMnXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5tYWluLmh1bWlkaXR5KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRXZWF0aGVySW5mbyxcbiAgICAgICAgfVxufSkoKTtcblxuY29uc3Qgd2VhdGhlclVJID0gKCgpPT57XG4gICAgbGV0IHdlYXRoZXJPYmplY3QgPSB3ZWF0aGVySW5mby5nZXRXZWF0aGVySW5mbygnTG9uZG9uJyk7XG4gICAgXG4gICAgLy8gbGV0IHdlYXRoZXJSZXN1bHQgPSBKU09OLnBhcnNlKHdlYXRoZXJPYmplY3QuZ2V0V2VhdGhlckluZm8pO1xuICAgIC8vIGNvbnNvbGUudGFibGUod2VhdGhlclJlc3VsdCk7XG59KSgpO1xuXG5cbi8vaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVNhbiUyMERpZWdvJkFQUElEPWNmNTlmNTMzZDc2OTliZTAzNjRjMTZhYTZhM2Q4NzQxIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9