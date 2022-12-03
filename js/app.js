const  term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

words = {
         links: "To the left",
         Rechts: "To the right",
         "Nächste Straße (links/rechts)": "Next street (left/ right)",
         "Halb links/rechts abbiegen": "Turn half-left / half-right",

         Schädigung: "Damage/injury",
         "Falsch eingeordnet (Fahrstreifen)":"incorrectly classified(lane)",
        
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
