let historyBtn = document.querySelector("#history");
let visionBtn = document.querySelector("#vision");
let goalsBtn = document.querySelector("#goals");
let historyContent = document.querySelector(".history-content");
let visionContent = document.querySelector(".vision-content");
let goalsContent = document.querySelector(".goals-content");
let contentContainer = document.querySelector(".content-container");

let buttons = [historyBtn, visionBtn, goalsBtn];
let content = [historyContent, visionContent, goalsContent];

contentContainer.addEventListener("click", (e) => {
  if (
    e.target.id === "history" ||
    e.target.id === "vision" ||
    e.target.id === "goals"
  ) {
    for (let btn of buttons) {
      btn.classList.remove("active");
    }
    e.target.classList.add("active");

    for (let cont of content) {
      cont.classList.add("displayNone");
    }

    let selectContent = document.querySelector(`.${e.target.id}-content`);
    selectContent.classList.remove("displayNone");
  }
});
