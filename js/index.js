const profile = document.getElementById("profile");
const menu = document.getElementById("user-menu");

profile.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
