// function toggleAnswer(id) {
//   var answer = document.getElementById(id);
//   if (answer.style.display === "none") {
//     answer.style.display = "block";
//   } else {
//     answer.style.display = "none";
//   }
// }
// window.onload = function () {
//   const collapsibleSections = document.querySelectorAll(".card");

//   collapsibleSections.forEach(function (card) {
//     const collapseContent = document.querySelector(".collapse-content");
//     const iconButton = document.querySelector(".icon-button");
//     const icon = document.querySelector(".icon");

//     function toggleCollapse() {
//       collapseContent.classList.toggle("open");
//       icon.classList.toggle("rotate");
//     }
//   });
//   iconButton.addEventListener("click", toggleCollapse);
// };
//

// window.onload = function () {
//   const collapsibleSections = document.querySelectorAll(".card");
//   collapsibleSections.forEach(function (card) {
//     const collapseContent = card.querySelector(".collapse-content");
//     const iconButton = card.querySelector(".icon-button");
//     const icon = card.querySelector(".icon");

//     function toggleCollapse() {
//       collapseContent.classList.toggle("open");
//       icon.classList.toggle("rotate");
//     }
//     iconButton.addEventListener("click", toggleCollapse);
//   });
// };

window.onload = function () {
  const collapsibleSections = document.querySelectorAll(".card");
  collapsibleSections.forEach(function (card) {
    const collapseContent = card.querySelector(".collapse-content");
    const iconButton = card.querySelector(".icon-button");
    const icon = card.querySelector(".icon");

    function toggleCollapse(event) {
      //   event.stopPropagation(); // 阻止事件冒泡
      collapseContent.classList.toggle("open");
      icon.classList.toggle("rotate");
    }

    iconButton.addEventListener("click", toggleCollapse);
  });
};
