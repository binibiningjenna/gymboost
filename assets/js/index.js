document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 2000,
        once: true,
        offset: 200
    });

    var rates = [
        ["Session", "₱60"],
        ["Half Month", "₱350"],
        ["1 Month", "₱600"],
        ["2 Months", "₱1,000"],
        ["3 Months", "₱1,500"],
        ["Semi-Annual", "₱2,850"],
        ["Annual", "₱5,500"],
    ];

    var html = "";
    for (var i = 0; i < rates.length; i++) {
        html +=
            "<div class='col-6 col-md-4' data-aos='fade-up'>" +
            "<div class='rate-box highlight text-center w-100 h-100 p-3' style='border: 2px solid var(--primaryColor); background-color: #1a1a1a'>" +
            "<h4>" +
            rates[i][0] +
            "</h4>" +
            "<p class='price'>" +
            rates[i][1] +
            "</p>" +
            "</div>" +
            "</div>";
    }

    document.getElementById("rate-container").innerHTML = html;
});