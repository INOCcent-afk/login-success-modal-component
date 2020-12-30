const btn = document.querySelector(".modalbtnExample");
const dummybtncontainer = document.querySelector(".modal-dummy");

const modalV2 = document.querySelector(".modal-v2");
const closeModalV2 = document.querySelector(".closeModal-v2");
const continueModalBtn = document.querySelector(".continueModal");

btn.addEventListener("click", () => {
  modalV2.style.display = "flex";
});
closeModalV2.addEventListener("click", () => {
  modalV2.style.display = "none";
});
continueModalBtn.addEventListener("click", () => {
  modalV2.style.display = "none";
});
