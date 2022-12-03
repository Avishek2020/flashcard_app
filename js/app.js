const  term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

words = {
         links: "To the left",
         Rechts: "To the right",
         "Nächste Straße (links/rechts)": "Next street (left/ right)",
         "Halb links/rechts abbiegen": "Turn half-left / half-right",
         "Erste, zweite, dritte Straße rechts (Kreisverkehr)":"Take the first, second, third street to the right (roundabout)",
         "Erste, zweite, dritte Ausfahrt nehmen":"Take the first, second, third exit",
         "Der Vorfahrtsstraße folgen":"Continue on the main road",
         "In Richtung…fahren":"Drive in direction",
         "Wenn nichts gesagt wird, geht es geradeaus":"if nothing is said, drive straight ahead",
         "Richtung Autobahn/Kraftfahrstraße":"Toward the motorway / motor road",
         "Anhalten":"Stop",
         "Rückwärts fahren (links/rechts)":"Reverse(left/right)",
         "Vorwärts fahren (links/rechts)":"Go forward(left/right)",
         "Einparken längs/quer (vorwärts/rückwärts)":"Park lenghtwise (forward/ backward)",
         "Einparken quer (vorwärts/rückwärts)":"Park crosswise (forward/ backward)",
         "Umkehren":"turn around",
         "Hinter dem Fahrzeug einparken":"Park behind the vehicle",
         "Zwischen Fahrzeugen einparken":"Park between the vehicles",
         "Gefahrbremsung":"Press emergency brakes",
         "Abbremsen mit höchstmöglicher Verzögerung":"Decelerate with a lot of delay",
         "Funktion prüfen von":"Check the functioning of",
         "Ein- und Ausschalten von":"Switcing on and off of",
         "Zeigen von":"Pointing to",
         "Standlicht":"Parking light",
         "Abblendlicht":"Dipped beam",
         "Fernlicht":"High beam",
         "Schlussleuchten mit Kennzeichenbeleuchtung":"Tail lamps with licence plate illumination",
         "Nebelschlussleuchte":"Rear fog lamp",
         "Warnblinkanlage":"Hazard warning lights",
         "Blinker":"Blinker",
         "Hupe":"Horn",
         "Bremsleuchte(n)":"Brake light(s)",
         "Kontrollleuchten benennen":"Name the warning lights",
         "Rückstrahler":"Rear reflector",
         "Vorhandensein":"Presence",
         "Beschädigung":"Damage/ injury",
         "Lenkung":"",
         "Lenkschloss entriegeln":"",
         "Bremsanlage":"",
         "Betriebsbremse (Fußbremse)":"",
         "Feststellbremse":"",
         "Flüssigkeitsstände prüfen":"",
         "Motoröl":"",
         "Kühlmittel":"",
         "Scheibenwaschflüssigkeit":"",
         "Reifen kontrollieren":"",
         "Beschädigungen":"",
         "Profiltiefe":"",
         "Reifendruck":"",
         "":"",
         "":"",
         "":"",
         "":"",
         "":"",
         "":"",
         "":"",
         "":"",
         "":"",
         "":"",
         "":"",

        
        };
      
data = Object.entries(words);


function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)];
    console.log(randomTerm);
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
};
 
checkButton.addEventListener('click', function(){
    definition.style.display = 'block';
});

nextButton.addEventListener('click', function(){
    getRandomWord();
});
