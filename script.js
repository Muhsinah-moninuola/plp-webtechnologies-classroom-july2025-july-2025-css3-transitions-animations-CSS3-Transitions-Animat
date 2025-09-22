//Function with parameters + return value
function calculateRating(stars, total) {
    let rating = (stars / total) * 100;
    return rating.toFixed(1) + "%"; // returns rating as a string
}

//Function that updates description text
function changeText(message) {
    document.getElementById("movie-desc").textContent = message;
}

//Globak vs local variable
let globalMessage = "I am a global variable";

function scopeExample() {
    let localMessage = "I am a local variable";
    console.log(globalMessage); // accessible
    console.log(localMessage);  // accessible only inside
}
scopeExample(); // runs once on load


// Toggle modal on/off
function toggleModal() {
    document.getElementById("trailerModal").classList.toggle("show-modal");
}

// Animate card bounce
function animateCard() {
    let card = document.querySelector(".movie-card");

    card.classList.add("animate-card");
    setTimeout(() => {
        card.classList.remove("animate-card");
    }, 1000); 
};

// Reusable animation trigger
function triggerAnimation(element, className, duration = 1000) {
    element.classList.add(className);
    setTimeout(() => element.classList.remove(className), duration);
}

document.getElementById("watchBtn").addEventListener("click", () => {
    toggleModal();
    changeText("Trailer is loading... enjoy Nine Puzzles!");
});

document.getElementById("closeModal").addEventListener("click", toggleModal);

document.getElementById("surpriseBtn").addEventListener("click", () => {
   animateCard();

    let rating = calculateRating(8.7, 10);
    changeText(`Nine Puzzles has a rating of ${rating} on K-Drama charts!`);
});
