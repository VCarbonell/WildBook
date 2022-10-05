const scroll = document.querySelectorAll(".wilder");
const scrollNames = document.querySelectorAll(".nameWilder");
let profileTitle = document.querySelector("#profile-name");
let profilePic = document.querySelector("#profile-image");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const leftArrowImg = document.querySelector("#leftArrow");
const rightArrowImg = document.querySelector("#rightArrow");
const cross = document.querySelector("#cross");
const profileCard = document.querySelector(".profile-container");
const input = document.getElementById("searchInput");
const searchButton = document.querySelector("#buttonSearchBar");

for (let i = 0; i < scroll.length; i++) {
  scroll[i].onclick = function () {
    profileTitle.innerText = scroll[i].querySelector(".nameWilder").innerText;
    profilePic.src = scroll[i].querySelector(".picture").src;
    profileCard.style.display = "flex";
    leftArrowImg.style.display = "flex";
    rightArrowImg.style.display = "flex";
    cross.style.display = "flex";
  };
}

cross.onclick = function () {
  profileCard.style.display = "none";
  leftArrowImg.style.display = "none";
  rightArrowImg.style.display = "none";
  cross.style.display = "none";
};

let i = 0;
rightArrow.onclick = function () {
  profileTitle.innerText = scroll[i].querySelector(".nameWilder").innerText;
  profilePic.src = scroll[i].querySelector(".picture").src;
  if (i >= 0 && i < scroll.length - 1) {
    i++;
  }
};
leftArrow.onclick = function () {
  profileTitle.innerText = scroll[i].querySelector(".nameWilder").innerText;
  profilePic.src = scroll[i].querySelector(".picture").src;
  if (i >= 1 && i < scroll.length) {
    i--;
  }
};

searchButton.addEventListener("click", function () {
  console.log(input.value);
  let inputValue = input.value;
  for (let i = 0; i < scrollNames.length; i++) {
    if (!scrollNames[i].innerText.includes(inputValue)) {
      scroll[i].style.display = "none";
    }
  }
});

for (let i = 0; i < scrollNames.length; i++) {
  console.log(scrollNames[i].innerText);
}
