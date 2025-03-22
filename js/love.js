document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".note").forEach(note => {
        note.addEventListener("click", () => {
            note.classList.toggle("flipped");
        });
    });
});
