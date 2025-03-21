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



const handleMouseOver = (event) =>  {
  const containerRect = container.getBoundingClientRect();
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const padding = 20;
  const scrollY = window.scrollY; // Get current scroll position

  // Use a larger area than the container but still relative to it
  const minTop = containerRect.top + scrollY - containerRect.height/2;
  const maxTop = containerRect.bottom + scrollY + containerRect.height/2;
  const minLeft = containerRect.left - containerRect.width/2;
  const maxLeft = containerRect.right + containerRect.width/2;

  let newTop = getRandomNumber(
    Math.max(padding + scrollY, minTop), 
    Math.min(maxTop - btnHeight - padding, window.innerHeight + scrollY - btnHeight - padding)
  );
  let newLeft = getRandomNumber(
    Math.max(padding, minLeft), 
    Math.min(maxLeft - btnWidth - padding, window.innerWidth - btnWidth - padding)
  );

  btnNo.style.position = 'absolute'; // Change to absolute
  btnNo.style.bottom = '';
  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
};


btnNo.addEventListener("mouseover", handleMouseOver);

  btnYes.addEventListener("click", (e) => {
    console.log("Yes button clicked");
    btnYes.classList.add("hide");
    hdrImg.style.display = "none";
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
    textOverlay.classList.remove("hide");
    btnContinue.classList.remove("hide");
    
    // Remove the mouseover listener temporarily
    btnNo.removeEventListener("mouseover", handleMouseOver);
    
    // Reset No button position
    btnNo.style.position = 'absolute';
    btnNo.style.top = '';
    btnNo.style.left = '55%';
    btnNo.style.bottom = '2rem';
    
    // Re-add the mouseover listener after transition completes
    setTimeout(() => {
      btnNo.addEventListener("mouseover", handleMouseOver);
    }, 500); // Match this with your CSS transition duration
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