const scroll = document.querySelectorAll(".wilder");
const scrollNames = document.querySelectorAll(".nameWilder");
let profileTitle = document.querySelector("#profile-name");
let profilePic = document.querySelector("#profile-image");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

for (let i = 0; i < scroll.length; i++) {
  scroll[i].onclick = function () {
    profileTitle.innerText = scroll[i].querySelector(".nameWilder").innerText;
    profilePic.src = scroll[i].querySelector(".picture").src;
  };
}
