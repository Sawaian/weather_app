//Step 8 continued:
const weatherInfo = (()=>{
// This is the object which will hold the data from the json we get from the promise.
// the function is called below when we use the fetch request.
    function weatherJson (weatherData){
        // the object literal used to hold the data.
        // Step 9:
        const {
            name: city,
            main: { temp: temperature },
        } = weatherData;
        // Data here can be named anything as it's a variable held in place for
        // what we pass into it from the promise.
        return { city, temperature};
        // We are returning the city name and the temperature.
    }
    // Async lets the code work and wait for the requests.

async function fetchWeatherInfo(location){
        let doc;
        let response = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=cf59f533d7699be0364c16aa6a3d8741`;
        const newCity = await fetch(response, { mode: 'cors'}) 
        if(!newCity.ok){ 
            doc = {}   
        }
        if(newCity.ok){
        return newCity
        };
    }

async function useWeatherInfo(location){ 
        // will attempt to resolve what is within this codeblock.
        try{
            let newCity = await fetchWeatherInfo(location);
                const cityData = weatherJson(await newCity.json());
            return cityData;
            }//Step 8b: else will ddisplay an error.
            catch(err){
                console.log(err)
            }
        }
        return {
            //Step 12:
            useWeatherInfo,
        }
})();

export { weatherInfo };