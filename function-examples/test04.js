const Confirm = require('prompt-confirm');

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
//CALLBACK functions
console.log('before calling prompt');
promptUser("Do you like water", 
   function(){
    console.log("You said YES.");
}, function(){
    console.log("You said NO.");
});
console.log('after calling prompt');

/*
Tradtionally the first parameter in a callback function is an error object

ex:

object.method(par, function(error, data){
    if(err){
        ...
    }
    else {
        process data
    }
});
*/
