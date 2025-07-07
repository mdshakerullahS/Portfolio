const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  project.addEventListener("click", (e) => {
    e.stopPropagation();

    if (project.classList.contains("flip")) {
      project.classList.remove("flip");
      project.style.height = "164px";
    } else {
      projects.forEach((p) => p.classList.remove("flip"));
      projects.forEach((p) => (p.style.height = "164px"));
      project.classList.add("flip");
      project.style.height = "300px";
    }
  });
});
