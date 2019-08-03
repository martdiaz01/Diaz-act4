function hi_and_by() {
    window.alert("Hi");
    window.alert("By");

}

document.getElementById("get-trivia").onclick =  hi_and_by;

const api = 'http://numbersapi.com/random/year?json';

    $.ajax({
        method: 'GET',
        url: FIRSTAPI

    })
        .then (function (parameter) {
            console.log (parameter) ;

        }) 