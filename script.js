fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    let div = document.getElementById("box1");
    div.className = "box";
    data.forEach((user) => {
      let h1 = document.createElement("h1");
      h1.textContent = `Name: ${user.name}`;
      div.appendChild(h1);
      let p = document.createElement("p");
      p.textContent = `Username: ${user.username}`;
      div.appendChild(p);
      let p2 = document.createElement("p");
      p2.textContent = `Email: ${user.email}`;
      div.appendChild(p2);
    });
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Fetch operation completed");
  });

let input = document.getElementById("inp");
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");

button1.onclick = function () {
  alert("Light mode activated");
  document.body.style.backgroundColor = `white`;
  document.body.style.color = `black`;
};

button2.onclick = function () {
  alert("Dark mode activated");
  document.body.style.backgroundColor = `black`;
  document.body.style.color = `white`;
};
