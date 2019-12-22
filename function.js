function num(char){
    var show = document.getElementById("calInput");

    show.value += char;
}
function result(){
    var show = document.getElementById("calInput");

    show.value = +eval(show.value).toFixed(12);
}
function squ2(){
    var show = document.getElementById("calInput");

    show.value = Math.pow(show.value, 2);
}
function squ3(){
    var show = document.getElementById("calInput");

    show.value = Math.pow(show.value, 3);
}

function back(){
    var show = document.getElementById("calInput");

        if (show.value.length != 0){
            show.value = show.value.substring(0, show.value.length - 1);
        }
}
function sqrt(){
    var show = document.getElementById("calInput");

    show.value = Math.sqrt(show.value);
}