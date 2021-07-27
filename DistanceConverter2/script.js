(function () {

    'use strict';

    let convertType = "miles";
    const heading = document.querySelector("h1");
    const intro = document.querySelector("p");
    const answerDiv = document.getElementById("answer");
    const form = document.getElementById("convert");

    document.addEventListener('keydown', function (evt) {
        //handle keypress of K or M
        if (evt.code == "KeyK") {
            convertType = 'kilometers';
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.';
        }
        else if (evt.code == "KeyM") {
            convertType = 'miles';
            heading.innerHTML = "Miles to Kilometers Converter";
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';
        }
    });

    form.addEventListener('submit', function (evt) {

        evt.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if (distance) {
            let conversion;
            switch (convertType) {
                case 'kilometers':
                    conversion = (distance * 1.609344).toFixed(3);
                    answerDiv.innerHTML = `${distance} kilometers are ${conversion} miles!`
                    return conversion;
                case 'miles':
                    conversion = (distance * 0.621371192).toFixed(3);
                    answerDiv.innerHTML = `${distance} miles are ${conversion} kilometers!`
                    return conversion;
            }
        }
        else {
            answer.innerHTML = '<h2>Please provide a number!</h2>'
        }
    });
})();