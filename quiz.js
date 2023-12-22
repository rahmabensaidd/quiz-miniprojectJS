
var arrayreponse=["Paris","JavaScript","HyperText Markup Language","To define a new CSS style"];
var tr=0;
var score1=0;
function Quizques() {
    var quesCollection = document.getElementsByClassName("question");
    var arraychoix = [];

    var quesArray = Array.from(quesCollection);

    for (let i = 0; i < quesArray.length; i++) {
        var m = quesArray[i].children;
        var childTextArray = [];

        for (let j = 0; j < m.length; j++) {
            var textContent = m[j].textContent.trim(); 
            childTextArray.push(textContent);
        }

        arraychoix.push(childTextArray);
    }

    return arraychoix;
}

var result = Quizques();
console.log(result);
var question = "What is the purpose of the addEventListener method in JavaScript?";
var options = [
    "To add a new HTML element",
    "To handle events like clicks or keypresses",
    "To create a function",
    "To define a new CSS style"
];

function displayQuestion(question, options) {
    arrayreponse += "To define a new CSS style";
    var newP = document.createElement('p');
    var newPText = document.createTextNode(question);
    newP.appendChild(newPText);
    var butt = document.getElementById("a");
    document.body.insertBefore(newP, butt);
    var newDiv = document.createElement('div');
    newDiv.className = "question";

    for (var i = 0; i < options.length; i++) {
      
        var newLabel = document.createElement('label');

        var newInput = document.createElement('input');
        newInput.type = "radio";
        newInput.name = "options"; 
        
        newInput.value = options[i];

        var labelText = document.createTextNode(options[i]);
        newLabel.appendChild(newInput);
        newLabel.appendChild(labelText);
      newDiv.appendChild(newLabel);
    }

    document.body.insertBefore(newDiv, butt);
    tr=1;
    
}




function submitAnswer() {
   
    var last = document.body.lastChild;
    var score = 0;
        var questions = document.getElementsByClassName("question");
    
    if (!last || (last.nodeName.toLowerCase() !== 'p' || last.className !== 'pp')) {
        
    
        for (var j = 0; j < questions.length; j++) {
            var radioButtons = questions[j].querySelectorAll('input[type="radio"]');
            var reponse;
    
            
            for (var i = 0; i < radioButtons.length; i++) {
                if (radioButtons[i].checked) {
                    reponse = radioButtons[i].value;
                }
            }
    
            if (reponse === arrayreponse[j]) {
                score++;
                
                
            }
            
        }
        // Si le dernier élément n'est pas un paragraphe avec la classe "pp" ou s'il n'y a pas d'élément
        console.log("Score:", score);
    
        var scor = "SCORE:" + score;
        var parag = document.createElement('p');
        parag.className = "pp";
        var newt = document.createTextNode(scor);
        parag.appendChild(newt);
        
        // Ajouter le paragraphe au corps du document
        document.body.appendChild(parag);
    } else {
       
    
        for (var j = 0; j < questions.length; j++) {
            var radioButtons = questions[j].querySelectorAll('input[type="radio"]');
            var reponse;
    
            
            for (var i = 0; i < radioButtons.length; i++) {
                if (radioButtons[i].checked) {
                    reponse = radioButtons[i].value;
                }
            }
    
            if (reponse === arrayreponse[j]) {
                score++;
            }
           
        }
        // Si le dernier élément est un paragraphe avec la classe "pp", le supprimer
        document.body.removeChild(last);
    
        console.log("Score:", score);
    
        var scor = "SCORE:" + score;
        var parag = document.createElement('p');
        parag.className = "pp";
        var newt = document.createTextNode(scor);
        parag.appendChild(newt);
        
    
        document.body.appendChild(parag);
    }
    
}

function verifier() {
    var questions = document.getElementsByClassName("question");
    var quesArray = Array.from(questions);
    var n = quesArray.length;

    for (var i = 0; i < n; i++) {
        if (i === 0) {
            continue;
        }
        ///deja maamltsh appel fe questin loula dou c pas grave 

        var currentQuestion = quesArray[i];
        var previousQuestion = quesArray[i - 1];
        var currentRadioButtons = currentQuestion.querySelectorAll('input[type="radio"]');
        
        
        var previousRadioButtons = previousQuestion.querySelectorAll('input[type="radio"]');
        var isPreviousQuestionChecked = Array.from(previousRadioButtons).some(radio => radio.checked);
        if (!isPreviousQuestionChecked) {
            console.log("La question précédente n'est pas cochée.");
           alert("question precedante non cochée");
            
        }
    }
}





