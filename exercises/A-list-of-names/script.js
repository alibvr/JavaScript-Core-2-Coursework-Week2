function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach(element => {
    content.appendChild(document.createElement("h1")).innerText = element.name;
    content.appendChild(document.createElement("h2")).innerText = element.job;
  
  });
}



let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];



listOfNames(people);
