const input = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");

button.addEventListener("click", () => {
  const searchtext = input.value;

  if (searchtext === "") {
    alert("Please search something bro");
  } else {
    alert("Searching for: " + searchtext);
  }
});
const jobCards = document.querySelectorAll(".job-card");

button.addEventListener("click", () => {
  const searchtext = input.value.toLowerCase().trim();

  if (searchtext === "") {
    alert("Please search something bro");
    return;
  }

  jobCards.forEach(card => {
    const location = card.dataset.location.toLowerCase();
    const role = card.dataset.role.toLowerCase();

    if (location.includes(searchtext) || role.includes(searchtext)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
