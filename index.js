const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Canva",
  "BATS",
  "Rapsodo",
  "Edgertronic",
  "TrackMan",
  "Excel",
  "Google Sheet",
  "PitchBase",
  "BlastMotion",
];
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");
skills.forEach((skill) => {
  const skillElement = document.createElement("li");
  skillElement.innerText = skill;
  skillsList.appendChild(skillElement);
});

const body = document.body;

// footer//
const footer = document.createElement("footer");
footer.style.textAlign = "center";
footer.style.padding = "10px";
footer.style.backgroundColor = "#f1f1f1";

//currecnt year//
const today = new Date();
const thisYear = today.getFullYear();

//copyright p
const copyright = document.createElement("p");
copyright.innerHTML = `&copy; ${thisYear} Sintia Baez`;

footer.appendChild(copyright);
body.appendChild(footer);
