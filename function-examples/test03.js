const Confirm = require('prompt-confirm');


function ifYes() {
    console.log("You said yes.");
}

function ifNo() {
    console.log("You said no.");
}


function promptUser(message, f_yes, f_no){
    const prompt = new Confirm(message);
    prompt.ask(function(answer) {
        if (answer == true) {
            f_yes();
        }
        else {
            f_no();
        }
    });
}


promptUser("Do you like water", ifYes, ifNo);