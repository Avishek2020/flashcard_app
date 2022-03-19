const  term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

words = {geben: "give",
         erklären: "Explain",
         leihen: "borrow",
         schicken: "send",
         schenken: "gift",
         schreiben: "write",
         machen: "make",
         bringen: "bring",
         nehmen: "take",
         erzählen: "tell / narrate",
         empfehlen: "recommend / suggest",
         präsentieren: "present / showcase",
         zeigen: "show",
         kaufen: "buy /  purchase ",
        
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
