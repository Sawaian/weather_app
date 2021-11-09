/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("hello world");


class weatherInfo {

    getWeatherInfo(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&APPID=cf59f533d7699be0364c16aa6a3d8741', {
        mode: 'cors'
    })
    .then(function(response){
        console.log(response.json());
        console.log("this is working")
        return response.json
    });
}}

const weatherUI = (()=>{
    let weatherObject = weatherInfo;
    let weatherResult = JSON.parse(weatherObject.getWeatherInfo);
    console.table(weatherResult);
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpO1xuXG5cbmNsYXNzIHdlYXRoZXJJbmZvIHtcblxuICAgIGdldFdlYXRoZXJJbmZvKCl7XG4gICAgZmV0Y2goJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1TYW4lMjBEaWVnbyZBUFBJRD1jZjU5ZjUzM2Q3Njk5YmUwMzY0YzE2YWE2YTNkODc0MScsIHtcbiAgICAgICAgbW9kZTogJ2NvcnMnXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB3b3JraW5nXCIpXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uXG4gICAgfSk7XG59fVxuXG5jb25zdCB3ZWF0aGVyVUkgPSAoKCk9PntcbiAgICBsZXQgd2VhdGhlck9iamVjdCA9IHdlYXRoZXJJbmZvO1xuICAgIGxldCB3ZWF0aGVyUmVzdWx0ID0gSlNPTi5wYXJzZSh3ZWF0aGVyT2JqZWN0LmdldFdlYXRoZXJJbmZvKTtcbiAgICBjb25zb2xlLnRhYmxlKHdlYXRoZXJSZXN1bHQpO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=