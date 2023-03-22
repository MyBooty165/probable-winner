const form = document.getElementById("password-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = document.getElementById("password").value;
  if (password === "TL9162010") {
    window.location.href = "https://the-archives-hub.vercel.app/";
  } else {
    alert("Incorrect password. Please try again.");
  }
});
