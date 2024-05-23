
// var explosion = document.getElementById("explosion");

// window.addEventListener("keydown", function(event) {
//     explosion.style.display = "block";
// });

// window.addEventListener("keyup", function(event) {
//     explosion.style.display = "none";
// });

var explosion = document.getElementById("explosion");

window.addEventListener("keydown", function(event) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight","w","a","s","d"].includes(event.key)) {
        explosion.style.display = "block";
    }
});

window.addEventListener("keyup", function(event) {
        explosion.style.display = "none";
});
