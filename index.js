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
    if (updatedMessage !== null) {
      newMessage.querySelector("span").innerText = updatedMessage;
    }
  });

  //append remove and edit button//
  newMessage.appendChild(removeButton);
  newMessage.appendChild(editButton);

  messageList.appendChild(newMessage);
  messageForm.reset();
});
