//Class
class Country {
    name: string;
    officialLanguage: string;
    greeting:string;
    nationalColors: string[];

    /**
     *
     */
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.officialLanguage = lang;
        this.greeting = greeting;
        this.nationalColors = colors;
        
    }
}

//assignments
let CountryName = document.getElementById("CountryName");
let officialLanguage = document.getElementById("OfficialLanguage");
let greeting = document.getElementById("Greeting");
let NationalColors = document.getElementById("NationalColors");
let NationalFlag = document.getElementById("NationalFlag");
let CountryList = document.getElementById("CountryList");
let Colors = document.getElementById("Colors");


//objects of class
let usa = new Country("USA", "English", "Hello World", ["red", "white", "blue"]);
let iraq = new Country("Iraq", "Arabic-Iraqi Dialect", "Ya Hala", ["red", "white", "black", "green"]);
let japan = new Country("Japan", "Nihon (Japanese)", "Kon'nichiwa Sekai", ["red", "white"]);
let chile = new Country("Chile", "Spanish", "Hola Mundo", ["red", "white", "blue"]);
let egypt = new Country("Egypt", "Arabic-Egyptian Dialect", "Ahlan Ya Aalam", ["red", "white", "black"]);

//functions
const SwitchCountry = (): void => {
    let country:Country;
    let input: string = CountryList.value;

    console.log(input);
    if (input.toLowerCase() == "usa"){
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
}

const DisplayColors = (country:Country): void => {
while (Colors.hasChildNodes()){
    Colors.removeChild(Colors.firstChild);
}
    CountryName.textContent = country.name;
    officialLanguage.textContent = country.officialLanguage;
    greeting.textContent = country.greeting;
    NationalColors.textContent = "";
    country.nationalColors.forEach(element => {
         NationalColors.textContent = NationalColors.textContent + " " + element;
         let div = document.createElement("div");
         div.style.backgroundColor = element;
         div.style.height = "20px";
         
         Colors.appendChild(div);
    });
    NationalFlag.src = `./images/${country.name}.png`
}

