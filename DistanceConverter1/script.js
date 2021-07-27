(function () {

    'use strict';

    document.getElementById('convert').addEventListener('submit', function (e) {

        e.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);
        //alert(distance);

        const answer = document.getElementById('answer');

        if (distance) {
            //convert number

            const conversion = (distance * 1.609344).toFixed(3);
            answer.innerHTML = `<h2>${distance} miles converts to ${conversion} Kilometers</h2>`;
        }
        else {
            //display error

            answer.innerHTML = '<h2>Please provide a number!</h2>';
        }

    });

})();