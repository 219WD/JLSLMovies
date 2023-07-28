const preloader = document.getElementById("preload-container");
const doneText = document.getElementById("doneText");
gsap.from(".preload", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});

async function loadData() {
  preloader.style.display = "flex";
  await sleep(2);
  preloader.style.display = "none";
  doneText.style.display = "flex";
}

async function sleep(seconds){
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
loadData();