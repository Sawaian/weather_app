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
            console.log(response.json());
            console.log("this is working")
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XG5cbmNvbnN0IHdlYXRoZXJJbmZvID0gKCgpPT57XG4gICAgZnVuY3Rpb24gZ2V0V2VhdGhlckluZm8oKXtcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1TYW4lMjBEaWVnbyZBUFBJRD1jZjU5ZjUzM2Q3Njk5YmUwMzY0YzE2YWE2YTNkODc0MScsIHtcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJ1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHdvcmtpbmdcIilcbiAgICAgICAgfSk7XG4gICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0V2VhdGhlckluZm8sXG4gICAgICAgIH1cbn0pKCk7XG5cbmNvbnN0IHdlYXRoZXJVSSA9ICgoKT0+e1xuICAgIGxldCB3ZWF0aGVyT2JqZWN0ID0gd2VhdGhlckluZm8uZ2V0V2VhdGhlckluZm8oKTtcbiAgICBcbiAgICAvLyBsZXQgd2VhdGhlclJlc3VsdCA9IEpTT04ucGFyc2Uod2VhdGhlck9iamVjdC5nZXRXZWF0aGVySW5mbyk7XG4gICAgLy8gY29uc29sZS50YWJsZSh3ZWF0aGVyUmVzdWx0KTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9