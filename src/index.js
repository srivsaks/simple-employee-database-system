import "./styles.css";

const images = [
  "https://images.unsplash.com/photo-1674714865408-2b510940a34f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1674665887843-71b844be2e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1674649206998-dfa81167bc36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1674653297566-8b9b7dcccf56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1674594430972-c3b9e6589e53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1674553049029-b45c79cafb0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "data:image/jpeg;base64,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"
];

class Employee {
  constructor(id, email, phone, name, dob, image) {
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.name = name;
    this.dob = dob;
    this.image = image;
  }
}
//var EMPLOYEES = [];

/*for (let i = 0; i < 10; i++) {
  const time = new Date().getTime();
  const emp = new Employee(
    time + i,
    `${time + i}@gmail.com`,
    `888${i}303564`,
    `Sakshi${i}`,
    null,
    images[Math.floor(Math.random() * 6)]
  );
  EMPLOYEES.push(emp);
}*/

const container = document.querySelector(".container");
const employeInfoContainer = document.querySelector(".employee-info-container");
const employeContainer = document.querySelector(".employee-list-container");
const modalContainer = document.querySelector(".modal-wrapper");

const displayModal = () => {
  modalContainer.classList.remove("inactive");
};

function displayEmployees(del = false) {
  if (del) {
    const children = employeContainer.childNodes;
    const childToBeDeletedArr = Array.from(children).filter(
      (child) => child.id === del
    );
    const childToBeDeleted = childToBeDeletedArr[0];
    employeContainer.removeChild(childToBeDeleted);
    return;
  }
  const parentDivs = [];

  const EMPLOYEES = JSON.parse(localStorage.getItem("employees"))["key"];

  EMPLOYEES.forEach((emp) => {
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("employee-list");
    parentDiv.id = emp.id;
    parentDivs.push(parentDiv);
  });

  parentDivs.forEach((parent, index) => {
    const div = document.createElement("div");
    const button = document.createElement("button");

    div.classList.add("employee-info");
    button.classList.add("delete-btn");
    div.textContent = EMPLOYEES[index].name;
    div.id = EMPLOYEES[index].id;
    button.textContent = "Remove";

    parent.appendChild(div);
    parent.appendChild(button);
  });

  parentDivs.forEach((div) => {
    employeContainer.appendChild(div);
  });
}

function displayEmployee(emp) {
  if (employeInfoContainer.childElementCount > 1)
    employeInfoContainer.removeChild(employeInfoContainer.children[1]);

  const empInfoDiv = document.createElement("div");
  const infoDiv = document.createElement("div");
  const imgContainerDiv = document.createElement("div");
  const img = document.createElement("img");
  const nameDiv = document.createElement("div");
  const numDiv = document.createElement("div");
  const addressDiv = document.createElement("div");

  empInfoDiv.classList.add("employee-info");
  infoDiv.classList.add("info-container");
  imgContainerDiv.classList.add("img-container");
  img.classList.add("img");
  nameDiv.classList.add("name");
  numDiv.classList.add("number");
  addressDiv.classList.add("address");

  img.src = emp.image;
  img.style.width = "150px";
  img.style.height = "150px";

  nameDiv.textContent = emp.name;
  numDiv.textContent = emp.phone;
  addressDiv.textContent = emp.email;

  imgContainerDiv.appendChild(img);
  infoDiv.appendChild(nameDiv);
  infoDiv.appendChild(numDiv);
  infoDiv.appendChild(addressDiv);
  empInfoDiv.appendChild(imgContainerDiv);
  empInfoDiv.appendChild(infoDiv);
  employeInfoContainer.appendChild(empInfoDiv);
}

container.addEventListener("click", (e) => {
  const EMPLOYEES = JSON.parse(localStorage.getItem("employees"))["key"];

  if (e.target.classList.contains("add-btn")) {
    // display modal
    displayModal();
  } else if (e.target.classList.contains("employee-info")) {
    const employeeId = e.target.id;
    const employeeInfo = EMPLOYEES.filter((emp) => {
      return emp.id === parseInt(employeeId);
    });
    if (employeeInfo.length > 0) {
      //display info
      displayEmployee(employeeInfo[0]);
    } else {
      //display no info found
    }
  } else if (e.target.classList.contains("delete-btn")) {
    const employeeId = e.target.closest(".employee-list").id;
    const newEmployees = EMPLOYEES.filter((emp) => {
      return emp.id !== parseInt(employeeId);
    });
    console.log(newEmployees);
    localStorage.setItem("employees", JSON.stringify({ key: newEmployees }));
    displayEmployees(employeeId);
  }
});

function closeModal() {
  modalContainer.classList.add("inactive");
  modalContainer.classList.remove("active");
}

modalContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-modal")) {
    closeModal();
  } else if (e.target.classList.contains("submit-btn")) {
    e.preventDefault();
    const time = new Date().getTime();

    const form = e.target.closest("form");

    //here FormData() could have been used https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
    const fName = form.children[1].value;
    const lName = form.children[3].value;
    const phone = form.children[5].value;
    const email = form.children[7].value;
    const img = form.children[9].value;
    const emp = new Employee(
      time,
      email,
      phone,
      fName + " " + lName,
      null,
      img
    );

    const EMPLOYEES = JSON.parse(localStorage.getItem("employees"))["key"];
    EMPLOYEES.push(emp);
    localStorage.setItem("employees", JSON.stringify({ key: EMPLOYEES }));

    displayEmployees();
    closeModal();
  }
});

function onDomContentLoad() {
  if (!localStorage.getItem("employees")) {
    const EMPLOYEES = [];
    for (let i = 0; i < 10; i++) {
      const time = new Date().getTime();
      const emp = new Employee(
        time + i,
        `${time + i}@gmail.com`,
        `888${i}303564`,
        `Sakshi${i}`,
        null,
        images[Math.floor(Math.random() * 6)]
      );
      EMPLOYEES.push(emp);
    }

    localStorage.setItem("employees", JSON.stringify({ key: EMPLOYEES }));
  }
  //console.log(JSON.parse(localStorage.getItem("employees"))["key"]);
  //localStorage.removeItem("employees");

  displayEmployees();
}
document.addEventListener("DOMContentLoaded", onDomContentLoad());
