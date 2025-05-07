const ieietLogs = document.getElementById("login-modal");
const registretiesLogs = document.getElementById("register-modal");

const ieietPoga = document.getElementById("login-btn");
const registretiesPoga = document.getElementById("register-btn");

const aizvertPogas = document.getElementsByClassName("close");

ieietPoga.onclick = function() {
  ieietLogs.style.display = "block";
}

registretiesPoga.onclick = function() {
  registretiesLogs.style.display = "block";
}

for (let i = 0; i < aizvertPogas.length; i++) {
  aizvertPogas[i].onclick = function() {
    ieietLogs.style.display = "none";
    registretiesLogs.style.display = "none";
  }
}

window.onclick = function(notikums) {
  if (notikums.target == ieietLogs) {
    ieietLogs.style.display = "none";
  }
  if (notikums.target == registretiesLogs) {
    registretiesLogs.style.display = "none";
  }
}

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const epasts = document.getElementById("login-email").value;
  const parole = document.getElementById("login-password").value;
  
  console.log("Ieeja: ", epasts, parole);
  ieietLogs.style.display = "none";
});

document.getElementById("register-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const vards = document.getElementById("register-name").value;
  const epasts = document.getElementById("register-email").value;
  const parole = document.getElementById("register-password").value;
  const apstiprinat = document.getElementById("register-confirm").value;
  
  if (parole !== apstiprinat) {
    alert("Paroles nesakrīt!");
    return;
  }
  
  console.log("Reģistrācija: ", vards, epasts, parole);
  registretiesLogs.style.display = "none";
});