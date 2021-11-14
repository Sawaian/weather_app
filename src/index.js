import { domGenerator } from "./weatherDom";
import './styles.css';

const cityForm = document.getElementById("location");
cityForm.addEventListener('submit', (event)=>{
    event.preventDefault();
});

c

const pageLoad = (()=>{
    domGenerator.divMaker('temp');
    domGenerator.divMaker('city');
    domGenerator.divMaker('name');
    console.log("calling")
})();


// weather info temp is called. 
// input goes into the function call .


//http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&APPID=cf59f533d7699be0364c16aa6a3d8741