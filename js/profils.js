const izietPoga = document.getElementById("logout-btn");
const izietLogs = document.getElementById("logout-modal");
const aizvertPoga = document.querySelectorAll(".modal .close");

const izdzestLogs = document.getElementById("delete-modal");
const izdzestPoga = document.querySelectorAll(".delete-btn");

izietPoga.addEventListener("click", function (e) {
  e.preventDefault();
  izietLogs.style.display = "block";

  setTimeout(function () {
    window.location.href = "index.html";
  }, 2000);
});

aizvertPoga.forEach(function (e) {
  e.addEventListener("click", function () {
    e.closest(".modal").style.display = "none";
  });
});

izdzestPoga.forEach(function (poga) {
  poga.addEventListener("click", function (e) {
    e.preventDefault();
    izdzestLogs.style.display = "block";
    const celPlans = poga.closest(".travel-plan");
    setTimeout(function () {
      celPlans.remove();
      izdzestLogs.style.display = "none"; 
    }, 2000);
  });
});

window.addEventListener("click", function (e) {
  if (e.target === izietLogs) {
    izietLogs.style.display = "none";
  }
  if (e.target === izdzestLogs) {
    izdzestLogs.style.display = "none";
  }
});