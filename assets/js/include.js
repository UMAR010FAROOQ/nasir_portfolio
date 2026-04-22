function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // Re-initialize scripts if needed
      if (typeof initTemplate === "function") {
        initTemplate(); // wrap your main.js logic inside this
      }
    })
    .catch(err => console.error(err));
}

const isGitHub = window.location.hostname.includes("github.io");
const repoName = "portfolio"; // change if needed

const basePath = isGitHub ? `/${repoName}/` : "./";

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", basePath + "header.html");
  loadComponent("footer", basePath + "footer.html");
});