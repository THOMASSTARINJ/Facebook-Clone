let settingsMenu = document.querySelector(".settings-menu");
let darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
  settingsMenu.classList.toggle("settings-menu-height");
}



darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");


  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "drak");
  } else {
    localStorage.setItem("theme", "light");
  }
}

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "drak") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
}
else {
  localStorage.setItem("theme", "light");
}


