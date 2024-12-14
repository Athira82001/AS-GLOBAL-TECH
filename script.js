function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "password") {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("details-form").classList.remove("hidden");
  } else {
    alert("Invalid credentials!");
  }
}

function addDetails(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  const table = document.getElementById("details-table");
  const row = table.insertRow();
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = age;

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}
