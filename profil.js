const scroll = document.querySelectorAll(".wilder");
const scrollNames = document.querySelectorAll(".nameWilder");
let profileTitle = document.querySelector("#profile-name");
let profilePic = document.querySelector("#profile-image");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const profileCard = document.querySelector(".profile-container");
const leftArrowImg = document.querySelector("#leftArrow");
const rightArrowImg = document.querySelector("#rightArrow");
const cross = document.querySelector("#cross");
const input = document.getElementById("searchInput");
const inputMobile = document.getElementById("searchInputMobile");
const searchButton = document.querySelector("#buttonSearchBar");

for (let i = 0; i < scroll.length; i++) {
  scroll[i].onclick = function () {
    profileTitle.innerText = scroll[i].querySelector(".nameWilder").innerText;
    profilePic.src = scroll[i].querySelector(".picture").src;
    profileCard.style.display = "flex";
    leftArrowImg.style.display = "flex";
    rightArrowImg.style.display = "flex";
    cross.style.display = "flex";
    profileCard.style.animation = "spin 0.5s ease";
    setTimeout(function () {
      profileCard.style.animation = "none";
    }, 500);
  };
}
if (window.matchMedia("screen and (min-width: 1023px)").matches) {
  for (let i = 0; i < scroll.length; i++) {
    scroll[i].onclick = function () {
      profileTitle.innerText = scroll[i].querySelector(".nameWilder").innerText;
      profilePic.src = scroll[i].querySelector(".picture").src;
      profileCard.style.display = "flex";
      leftArrowImg.style.display = "flex";
      rightArrowImg.style.display = "flex";
      cross.style.display = "none";
      profileCard.style.animation = "spin 0.5s ease";
      setTimeout(function () {
        profileCard.style.animation = "none";
      }, 500);
    };
  }
}
cross.onclick = function () {
  profileCard.style.display = "none";
  leftArrowImg.style.display = "none";
  rightArrowImg.style.display = "none";
  cross.style.display = "none";
};

let i = 1;

rightArrow.onclick = function () {
  i++;
  profileTitle.innerText = scroll[i].querySelector(".nameWilder").innerText;
  profilePic.src = scroll[i].querySelector(".picture").src;

  if (i >= 0 && i < scroll.length - 1) {
    profileCard.style.animation = "spin 0.5s ease";
    setTimeout(function () {
      profileCard.style.animation = "none";
    }, 500);
    console.log(i);
  }
};
leftArrow.onclick = function () {
  i--;
  profileTitle.innerText = scroll[i].querySelector(".nameWilder").innerText;
  profilePic.src = scroll[i].querySelector(".picture").src;

  if (i >= 1 && i < scroll.length) {
    profileCard.style.animation = "spin 0.5s ease";
    setTimeout(function () {
      profileCard.style.animation = "none";
    }, 500);
    console.log(i);
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

input.addEventListener("input", function (event) {
  console.log(event.target.value);
  const key = event.key;
  let inputValue = event.target.value.toUpperCase();
  for (let i = 0; i < scrollNames.length; i++) {
    if (!scrollNames[i].innerText.includes(inputValue)) {
      scroll[i].style.display = "none";
    }
  }
});

for (let i = 0; i < scrollNames.length; i++) {
  console.log(scrollNames[i].innerText);
}

addEventListener("resize", (event) => {
  event.preventDefault();
  if (window.matchMedia("screen and (min-width: 1023px)").matches) {
    profileCard.style.display = "flex";
    leftArrowImg.style.display = "flex";
    rightArrowImg.style.display = "flex";
  }
});
input.addEventListener("keydown", function (event) {
  console.log(event.key);
  console.log(event.target.value);
  const key = event.key;
  let inputValue = event.target.value.toUpperCase();
  for (let i = 0; i < scrollNames.length; i++) {
    if (scrollNames[i].innerText.includes(inputValue)) {
      scroll[i].style.display = "grid";
    }
  }
});

inputMobile.addEventListener("input", function (event) {
  console.log(event.target.value);
  const key = event.key;
  let inputValue = event.target.value.toUpperCase();
  for (let i = 0; i < scrollNames.length; i++) {
    if (!scrollNames[i].innerText.includes(inputValue)) {
      scroll[i].style.display = "none";
    }
  }
});

inputMobile.addEventListener("keydown", function (event) {
  console.log(event.key);
  console.log(event.target.value);
  const key = event.key;
  let inputValue = event.target.value.toUpperCase();
  for (let i = 0; i < scrollNames.length; i++) {
    if (scrollNames[i].innerText.includes(inputValue)) {
      scroll[i].style.display = "grid";
    }
  }
});