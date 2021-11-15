const weatherInfo = (()=>{

    function weatherJson (data){
        const {
            name: city,
            main: { temp: temperature },
        } = data;
        return { city, temperature};
    }

    async function getWeatherInfo(location){

        let cityLocation = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=imperial&APPID=cf59f533d7699be0364c16aa6a3d8741';
        try{
            const newCity = await fetch(cityLocation, { mode: 'cors'})
            const cityData = weatherJson(await newCity.json())
            return cityData;
            }
            catch(err){
                console.log(err)
            }
            // humidity.textContent = `${temp}`;
            
        }

        return {
            getWeatherInfo,
        }
})();

export { weatherInfo };