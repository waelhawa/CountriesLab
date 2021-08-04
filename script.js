//Class
var Country = /** @class */ (function () {
    /**
     *
     */
    function Country(name, lang, greeting, colors) {
        this.name = name;
        this.officialLanguage = lang;
        this.greeting = greeting;
        this.nationalColors = colors;
    }
    return Country;
}());
//assignments
var CountryName = document.getElementById("CountryName");
var officialLanguage = document.getElementById("OfficialLanguage");
var greeting = document.getElementById("Greeting");
var NationalColors = document.getElementById("NationalColors");
var NationalFlag = document.getElementById("NationalFlag");
var CountryList = document.getElementById("CountryList");
var Colors = document.getElementById("Colors");
//objects of class
var usa = new Country("USA", "English", "Hello World", ["red", "white", "blue"]);
var iraq = new Country("Iraq", "Arabic-Iraqi Dialect", "Ya Hala", ["red", "white", "black", "green"]);
var japan = new Country("Japan", "Nihon (Japanese)", "Kon'nichiwa Sekai", ["red", "white"]);
var chile = new Country("Chile", "Spanish", "Hola Mundo", ["red", "white", "blue"]);
var egypt = new Country("Egypt", "Arabic-Egyptian Dialect", "Ahlan Ya Aalam", ["red", "white", "black"]);
//functions
var SwitchCountry = function () {
    var country;
    var input = CountryList.value;
    console.log(input);
    if (input.toLowerCase() == "usa") {
        country = usa;
    }
    else if (input.toLowerCase() == "iraq") {
        country = iraq;
    }
    else if (input.toLowerCase() == "japan") {
        country = japan;
    }
    else if (input.toLowerCase() == "chile") {
        country = chile;
    }
    else {
        country = egypt;
    }
    DisplayColors(country);
};
var DisplayColors = function (country) {
    while (Colors.hasChildNodes()) {
        Colors.removeChild(Colors.firstChild);
    }
    CountryName.textContent = country.name;
    officialLanguage.textContent = country.officialLanguage;
    greeting.textContent = country.greeting;
    NationalColors.textContent = "";
    country.nationalColors.forEach(function (element) {
        NationalColors.textContent = NationalColors.textContent + " " + element;
        var div = document.createElement("div");
        div.style.backgroundColor = element;
        div.style.height = "20px";
        Colors.appendChild(div);
    });
    NationalFlag.src = "./images/" + country.name + ".png";
};
