let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".btn");

bouton.addEventListener("click", function() {
  titre.innerText = "Sukuna ❤️‍🔥";
  titre.classList.toggle("highlight");
  image.setAttribute("src", "pic3.jpg");
  image.setAttribute("alt", "Nouvelle image");
});
