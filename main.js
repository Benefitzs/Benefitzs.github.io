document.addEventListener('DOMContentLoaded', () => {

const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const hdrImg = document.querySelector(".header-img");
const textOverlay = document.querySelector(".text-overlay");
const imageThree = document.querySelector(".image-3");
const btnContinue = document.querySelector(".btn-continue");
const finalText = document.querySelector(".final-text");
console.log("Header image element:", hdrImg); // Add this line after the querySelector

function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

btnYes.addEventListener("click", (e) => {
  console.log("Yes button clicked");
  btnYes.classList.add("hide");
  hdrImg.style.display = "none";
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
  textOverlay.classList.remove("hide");
  btnContinue.classList.remove("hide");
  
  // Reset No button position
  btnNo.style.top = "";
  btnNo.style.left = "";
});

btnContinue.addEventListener("click", (e) => {
  imageTwo.classList.add("hide");
  imageThree.classList.remove("hide");
  textOverlay.classList.add("hide");
  finalText.classList.remove("hide");

  btnContinue.classList.add("hide");
  btnNo.classList.add("hide");
});

});