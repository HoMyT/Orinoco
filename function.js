//chargement de la premier photo de teddy
let testdeTeddy = document.getElementById("img_de_teddy");
testdeTeddy.innerHTML = "<img  src=\"http://localhost:3000/images/teddy_1.jpg\" class=\"card-img-top\" alt=\"...\">";

//differente color de la peluche teddy
let eltTeddy = document.getElementById("teddy_selector");
eltTeddy.classList.add("div");
eltTeddy.innerHTML = "<div><ul><li id=\"pale_brown_teddy\">Pale brown</li></li><li>Dark brown</li><li>White</li></ul></div>";

//differente lentille camera

let eltCamera = document.getElementById("camera_selector");
eltCamera.classList.add("div");
eltCamera.innerHTML = "<div><ul><li>50mm 1.8</li></ul></li><ul><li>60mm 2.8</li></ul><ul><li>24-60mm 2.8/4.5</li></ul></div>";

//differente table

let eltTable = document.getElementById("table_selector");
eltTable.classList.add("div");
eltTable.innerHTML = "<div><ul><li>Chocolate</li></ul></li><ul><li>Black</li></ul><ul><li>White</li></ul></div>";

//changement de couleur du teddy
const teddy_test = document.getElementById("pale_brown_teddy");
//On detecte le click
teddy_test.addEventListener("click", function() {
    let replacementTeddy = document.getElementById("img_de_teddy");
    replacementTeddy.innerHTML = "<img  src=\"http://localhost:3000/images/teddy_2.jpg\" class=\"card-img-top\" alt=\"...\">";
});