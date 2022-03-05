function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();

closures -> a function bind together with its lexical environment

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
z();

function x(){
    var a = 7;
   return function y(){
        console.log(a);
    }
}
var z = x();
z();

// same as above


Though x no longer exist but it remeber from where it 
returned so it is able to print a

when y was returned function as well as its lexicals
scope was returned and put inside z

function along with its lexical scope bundle together forms a clouser