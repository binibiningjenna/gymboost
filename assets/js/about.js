document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 2000,
        once: true,
        offset: 200
    });
    loadReviews();
    loadTrainers();
    loadQuestions();
});

function loadReviews() {

    var reviews = [
        ["GymBoost changed my mindset and gave me real results fast.", "— Daniel R.", "Transformed in 6 months"],
        ["Now I actually enjoy workouts, thanks to the awesome vibe!", "— Ellie J.", "Built a consistent routine"],
        ["The trainers lift you up—physically and mentally. Incredible team!", "— Chris T.", "Energy + Confidence Boost"],
        ["Came for fitness, stayed for the passion and community.", "— Jamie L.", "Rediscovered the joy of movement"],
        ["This place keeps me going. It’s more than just workouts.", "— Renee K.", "ound a community, not just a gym"],
        ["From day one, I felt supported and motivated to grow.", "— Leo M.", "Routine turned into lifestyle"],
    ];

    var html = "";
    for (var i = 0; i < reviews.length; i++) {
        html +=
            "<div class='col-md-4' data-aos='fade-up'>" +
            "<div class='card rate-box highlight h-100 text-start' style='border: 2px solid var(--primaryColor); background-color: #1a1a1a'>" +
            "<div class='card-body'>" +
            "<p class='card-text fst-italic text-white'>\"" + reviews[i][0] + "\"</p>" +
            "<h5 class='card-title mt-4' style='color: var(--primaryColor)'>" + reviews[i][1] + "</h5>" +
            "<p class='card-subtitle text-white-50'>" + reviews[i][2] + "</p>" +
            "</div>" +
            "</div>" +
            "</div>";
    }
    document.getElementById("review-container").innerHTML = html;
}

function loadTrainers() {

    var trainer = [
        ["trainer_one.jpg", "Liam Flex", "Strength Coach", "Deadlifts fix everything."],
        ["trainer_two.jpg", "Yshimae Reed", "Mobility & Stretching", "Flexibility is freedom."],
        ["trainer_three.jpg", "Zoe Blaze", "HIIT Specialist", "Train like you mean it."]
    ];

    var html = "";
    for (var i = 0; i < trainer.length; i++) {
        html += "<div class='col-md-4' data-aos='fade-up'>" +
            "<div class='trainer-card'>" +
            "<img src='assets/img/" + trainer[i][0] + "' class='trainer-img' />" +
            "<div class='trainer-overlay'>" +
            "<div class='trainer-name'>" + trainer[i][1] + "</div>" +
            "<div class='trainer-role'>" + trainer[i][2] + "</div>" +
            "<div class='trainer-quote'>\"" + trainer[i][3] + "\"</div>" +
            "</div>" +
            "</div>" +
            "</div>";
    }
    document.getElementById("trainer-container").innerHTML = html;
}

function loadQuestions() {

    const faqData = [
        {
            question: "What are your opening hours?",
            answer: "We’re open daily from 6:00 AM to 10:00 PM — even on holidays. Perfect for early birds and night owls!"
        },
        {
            question: "How much does it cost?",
            answer: "Prices start at just ₱60/session — with affordable monthly and annual plans. All memberships include free coaching!"
        },
        {
            question: "Where are you located?",
            answer: "Find us at 123 Wellness St., FitCity, beside the plaza. We’ve got easy access and lots of parking!"
        },
        {
            question: "Do you offer personal training?",
            answer: "Yes! Our certified coaches offer free guidance with every membership. Book 1-on-1 training for a custom fitness plan!"
        },
        {
            question: "Do you offer classes or group workouts?",
            answer: "Absolutely! We have daily group sessions like HIIT, Zumba, Strength Training, and Yoga — all included in your membership. Perfect for staying motivated and meeting new gym buddies!"
        }
    ];

    const faqs = document.getElementById("question");
    faqs.innerHTML = "";
    for (i = 0; i < faqData.length; i++) {
        let id = `faq${i + 1}`;
        let accordion = `
        <div class="accordion-item" data-aos='fade-up'>
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${id}" aria-expanded="false" aria-controls="${id}">${faqData[i].question}</button>
            </h2>
            <div id="${id}" class="accordion-collapse collapse" data-bs-parent="#gymFaq">
            <div class="accordion-body">${faqData[i].answer}</div>
            </div>
        </div>
    `;
        faqs.innerHTML += accordion;
    }
}