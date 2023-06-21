const wrapper = document.querySelector(".wrpper");
const loginLink = document.querySelector(".login-link");
const registerLInk = document.querySelector(".register-link");

registerLInk.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
