const wrapper = document.querySelector(".wrpper");
const loginLink = document.querySelector(".login-link");
const registerLInk = document.querySelector(".register-link");
const btnLOginPopUp = document.querySelector(".login-popup");
const closeIcon = document.querySelector(".icon-close");

registerLInk.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnLOginPopUp.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

closeIcon.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
