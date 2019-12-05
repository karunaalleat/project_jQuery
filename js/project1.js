$(document).ready(() => {
    $('#recipt').on('change', () =>{
        var friut = $('#recipt').val();
        choose(friut);
    });
});
var choose = (data) =>{
    switch(parseInt(data)){
        case 1:
            getApple();
            break;
        case 2:
            getBanana();
            break;
        case 3:
            getCoconat();
            break;
    }
}
// get apple
var getApple = () => {
    var apple = "I love apple";
    printOut(apple);
}
// get apple
var getBanana = () => {
    var banana = "I love banana";
    printOut(banana);
}
// get apple
var getCoconat = () => {
    var coconat = "I love coconat";
    printOut(coconat);
}
//print out to html

var printOut = (out) => {
    $('#done').html(out);
}