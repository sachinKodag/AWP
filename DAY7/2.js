// Lets use clearInterval to stop setinterval
var myvar = setInterval(function () {
    console.log("Please stop me");
}
    , 1000)

function stopfun() {
    clearInterval(myvar);
}