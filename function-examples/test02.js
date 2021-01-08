//Passing functions as arguments

const Confirm = require('prompt-confirm');
const prompt = new Confirm('Do you like node-js?');

function verifyResp(resp) {
    if (resp == true) {
        console.log("You like node.js")
    }
    else {
        console.log("You don't like node.js")
    }
}
//verifyResp(true);
prompt.ask(verifyResp);

// 
/*
prompt.ask(function(answer){
    //console.log(answer);
    if (answer == true) {
        console.log("You like node.js")
    }
    else {
        console.log("You don't like node.js")
    }
});
*/

