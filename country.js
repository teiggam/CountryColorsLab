class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flag = flag;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"],"images/USA.jpg");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"],"images/mexico.jpg");
let chad = new Country("Chad", "Arabic and French", "Bonjour le monde", ["blue", "yellow", "red"],"images/Chad.svg")
let finland = new Country("Finland", "Finnish","Hei maailma", ["blue","white"],"images/Finland.jpg")


function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Chad") {
        country = chad;
    }
    else if (input === "Finland"){
        country = finland;
    }
    
    DisplayColors(country);
    console.log(country);

}

function DisplayColors(country){
    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.lang;
    document.getElementById("HelloWorld").innerText = country.greeting;
   
    document.getElementById("Flag").src = country.flag;
    document.getElementById("Flag").style.width = "50%";
    


    document.getElementById("Color1").style.backgroundColor = country.colors[0];
    document.getElementById("Color2").style.backgroundColor = country.colors[1];
    if(country.colors.length < 3){
        document.getElementById("Color3").style.backgroundColor = country.colors[1];
    }
    else{
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
    }

}