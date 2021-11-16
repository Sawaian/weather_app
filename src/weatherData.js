//Step 8 continued:
const weatherInfo = (()=>{
// This is the object which will hold the data from the json we get from the promise.
// the function is called below when we use the fetch request.
// step 8 continued:
    function weatherJson (data){
        // the object literal used to hold the data.
        // Step 9:
        const {
            name: city,
            main: { temp: temperature },
        } = data;
        // Data here can be named anything as it's a variable held in place for
        // what we pass into it from the promise.
        // step 10:
        return { city, temperature};
        // We are returning the city name and the temperature.
    }
    // Async lets the code work and wait for the requests.
    async function getWeatherInfo(location){ //Step 4:
        //Step 5: A vaariable set up to hold the location we request.
        let cityLocation = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=cf59f533d7699be0364c16aa6a3d8741`;
        // Step 6: will attempt to resolve what is within this codeblock.
        try{
            //Step 7: newCity will await on fetch to be resolved before continuing.
            const newCity = await fetch(cityLocation, { mode: 'cors'}) 
        
            //Step 8: calls our weatherJson function to paass the fetch data.
            // waits for newCity to resolve.
            const cityData = weatherJson(await newCity.json()) 
            //Step 11:
            return cityData;
            }//Step 8b: else will ddisplay an error.
            catch(err){
                console.log(err)
            }
        }
        return {
            //Step 12:
            getWeatherInfo,
        }
})();

export { weatherInfo };