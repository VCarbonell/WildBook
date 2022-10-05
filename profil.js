const scroll = document.querySelectorAll(".wilder");
const scrollNames = document.querySelectorAll(".nameWilder");
let profileTitle = document.querySelector("#profile-name");
let profilePic = document.querySelector("#profile-image");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const profileCard = document.querySelector(".profile-container");

for (let i = 0; i < scroll.length; i++) {
  scroll[i].onclick = function () {
    profileTitle.innerText = scroll[i].querySelector(".nameWilder").innerText;
    profilePic.src = scroll[i].querySelector(".picture").src;
  };
}

let i = 0;
rightArrow.onclick = function () {
  profileTitle.innerText = scroll[i].querySelector(".nameWilder").innerText;
  profilePic.src = scroll[i].querySelector(".picture").src;
  if (i < scroll.length) {
    i++;
  }
};
leftArrow.onclick = function () {
  profileTitle.innerText = scroll[i].querySelector(".nameWilder").innerText;
  profilePic.src = scroll[i].querySelector(".picture").src;
  if (i > 0 && i < scroll.length) {
    i--;
  }
};
