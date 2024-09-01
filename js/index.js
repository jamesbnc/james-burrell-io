const currentDate = new Date();
const thisYear = currentDate.getFullYear();

const footer = document.createElement('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `<small>James Burrell &copy; ${thisYear}</small>`

footer.appendChild(copyright);
document.body.appendChild(footer);

let skills = ["Hardware Configuration", "Database Fundamentals", "Networking", "Linux", 
"Infrastructure", "Technical Support", "JavaScript", "HTML", "CSS", "APIs", "Git Bash", "VS Code"];

let skillsSection = document.getElementById("Skills");
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);

for (let skill of skills) {
    let skillItem = document.createElement("li");
    skillItem.innerText = skill;
    skillsList.appendChild(skillItem);
}