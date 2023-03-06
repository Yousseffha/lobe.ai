let menu = document.getElementById("menu");
let nav = document.getElementById("nav");
let download = document.getElementById("download");
let xMark = document.getElementById("x-mark");

menu.onclick = function () {
  download.style.display = "block";
  nav.style.display = "block";
  menu.style.display = "none";
  xMark.style.display = "block";
};

xMark.onclick = function () {
  download.style.display = "none";
  nav.style.display = "none";
  menu.style.display = "block";
  xMark.style.display = "none";
};
