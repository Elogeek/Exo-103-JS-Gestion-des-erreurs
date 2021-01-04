let blabla = document.getElementById("div11");

try {
    blabla.innerHTML = "Coucou";
}

catch (error) {
    alert("L'élément div11 n'existe pas !");
}
