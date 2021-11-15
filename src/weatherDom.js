// Dynamically generated divs.
class domGen {

    divMaker(divType){
        let container = document.querySelector(".container");
        let div = document.createElement('div');
        div.setAttribute("class", divType);
        container.appendChild(div);
    }
}

let domGenerator = new domGen


function weatherDataDisplayed (cityData){
    let temp = document.querySelector('.temp');
    let city = document.querySelector('.city');

    temp.textContent = cityData.temperature;
    city.textContent = cityData.name;
}

export{ domGenerator, weatherDataDisplayed }

