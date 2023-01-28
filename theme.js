let themeValue = true;
let themeBtn = document.querySelector("#theme");
if (JSON.parse(localStorage.getItem("Theme")) !== null) {
  themeValue = JSON.parse(localStorage.getItem("Theme"));
}
function changeTheme() {
  themeValue = !themeValue;
  theme(themeValue);
}
const theme = (value) => {
  if (value == false) {
    localStorage.setItem("Theme", false);
    document.documentElement.style.setProperty("--black", "#f0f0f0");
    document.documentElement.style.setProperty("--white", "#1a1a1a");
    document.documentElement.style.setProperty("--line", "#4d4d4d");
    document.documentElement.style.setProperty("--today", "#1a1a1a");
    document.documentElement.style.setProperty("--transparent", "#313131e8");
    themeBtn.innerHTML = `<span class="material-symbols-outlined">light_mode</span>`;
  } else {
    // Light Theme
    localStorage.setItem("Theme", true);
    document.documentElement.style.setProperty("--black", "#1a1a1a");
    document.documentElement.style.setProperty("--white", "#f0f0f0");
    document.documentElement.style.setProperty("--line", "#d6d6d6");
    document.documentElement.style.setProperty("--today", "#505050");
    document.documentElement.style.setProperty("--transparent", "#000000a6");
    themeBtn.innerHTML = `<span class="material-symbols-outlined">dark_mode</span>`;
  }
};
theme(themeValue);
