/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("hello world");

const weatherInfo = (()=>{
    function getWeatherInfo(){
        fetch('http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&APPID=cf59f533d7699be0364c16aa6a3d8741', {
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
    let weatherObject = weatherInfo.getWeatherInfo();
    
    // let weatherResult = JSON.parse(weatherObject.getWeatherInfo);
    // console.table(weatherResult);
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKTtcblxuY29uc3Qgd2VhdGhlckluZm8gPSAoKCk9PntcbiAgICBmdW5jdGlvbiBnZXRXZWF0aGVySW5mbygpe1xuICAgICAgICBmZXRjaCgnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVNhbiUyMERpZWdvJkFQUElEPWNmNTlmNTMzZDc2OTliZTAzNjRjMTZhYTZhM2Q4NzQxJywge1xuICAgICAgICAgICAgbW9kZTogJ2NvcnMnXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5tYWluLmh1bWlkaXR5KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRXZWF0aGVySW5mbyxcbiAgICAgICAgfVxufSkoKTtcblxuY29uc3Qgd2VhdGhlclVJID0gKCgpPT57XG4gICAgbGV0IHdlYXRoZXJPYmplY3QgPSB3ZWF0aGVySW5mby5nZXRXZWF0aGVySW5mbygpO1xuICAgIFxuICAgIC8vIGxldCB3ZWF0aGVyUmVzdWx0ID0gSlNPTi5wYXJzZSh3ZWF0aGVyT2JqZWN0LmdldFdlYXRoZXJJbmZvKTtcbiAgICAvLyBjb25zb2xlLnRhYmxlKHdlYXRoZXJSZXN1bHQpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=