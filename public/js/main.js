const contentContainer = document.querySelector(".content-container");
const form = document.querySelector("form");

// const parseQuery = (query) => {
//     let queries = query.split("&");
//     let queryObj = {};
//     queries.forEach((q, i) => {
//         let key = q.split("=")[0];
//         let val = q.split("=")[1];
//         queryObj[key] = val;
//     });
//     return queryObj;
// }

form.addEventListener("submit", () => {
    contentContainer.innerHTML = "<div class='loader'>loading...</div>";
});