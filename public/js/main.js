const contentContainer = document.querySelector(".content-container");
const form = document.querySelector("form");

form.addEventListener("submit", () => {
    contentContainer.innerHTML = "<div class='loader'>loading...</div>";
});
