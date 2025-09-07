
//IIFE -Immediately Invoked Function Expression-----()()
//NodeJs -wraps the code into it and all the code inside the module runs inside here
//The Module and Require are both fundamental components in common js module system

//module - object represents the current module being executed.
//require - the require function is used to import modules in nodejs script.

(function(require,module){

    //Example
    function calculateSum(a,b){
        const output = a+b;
        console.log(output);
    }


})()