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

const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  console.log(`Name: ${userName}`);
  console.log(`Email: ${userEmail}`);
  console.log(`Message: ${userMessage}`);
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
  <a href="mailto:${userEmail}">${userName}</a>:
  <span>${userMessage}</span>`;

  //remove button//
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  //edit button//
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.setAttribute("type", "button");
  editButton.addEventListener("click", function () {
    const updateMessage = prompt("Edit your message:", userMessage);
    if (updateMessage !== null) {
      newMessage.querySelector("span").innerText = updateMessage;
    }
  });

  //append remove and edit button//
  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);

  messageList.appendChild(newMessage);
  messageForm.reset();
});
//github//
const GITHUB_USERNAME = "SintiaBaez";
//Fetch using GitHub API
fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  })
  .then((repositories) => {
    const projectSection = document.querySelector("#Projects");
    const projectList = projectSection.querySelector("ul");
    if (!projectList) {
      console.log("#Projects ul element not found in the DOM.");
      return;
    }
    if (repositories.length === 0) {
      projectList.innerHTML = "<li>No repositories found.</li>";
      return;
    }

    for (let i = 0; i < repositories.length; i++) {
      const listItem = document.createElement("li");
      const repoLink = document.createElement("a");
      repoLink.href = repositories[i].html_url;
      repoLink.target = "_blank";
      repoLink.innerText = repositories[i].name;

      listItem.appendChild(repoLink);
      projectList.appendChild(listItem);
    }
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
    const repoList = document.getElementById("repo-list");
    if (repoList) {
      repoList.innerHTML = `<li style="color: red;">Error loading repositories. Please try again later.</li>`;
    }
  });
