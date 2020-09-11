
/*  Age Calculator */ 

/* Start */
function ageInDays()
{
    var birthYear =  prompt('What is my bday year?');
    var ageInDays = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}
/* End */


/* Start 
        Rock , Paper, Scissors game functionality
*/
function rpsGame(yourChoice){
    console.log(yourChoice);

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice : ', botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results); //you won
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);

}
//for mathematical equation
function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

//for chosing stuff
function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

//winnner function 
function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors' : {'paper': 1, 'scissors': 0.5, 'rock': 0},
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

//Message print functionality
function finalMessage([yourScore, computerScore])
{
    if(yourScore === 0)
    {
        return {'message' : 'You Lost', 'color': 'red'};
    }
    else if(yourScore === 0.5)
    {
        return {'message' : 'Game tied', 'color': 'yello'};
    }
    else
    {
        return {'message' : 'You won', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage)
{
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150x style='box-shadow : 0px 10px 50px rgba(37, 50, 233,1);'>"
    messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150x style='box-shadow : 0px 10px 50px rgba(243, 38, 24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
}


