//All for teddy 
//chargement de la premier photo de teddy
let testdeTeddy = document.getElementById("img_de_teddy");
testdeTeddy.innerHTML = "<img  src=\"http://localhost:3000/images/teddy_1.jpg\" class=\"card-img-top\" alt=\"...\">";

//Condition et evenement pour les changement d'image de teddy au click
let paleBrownTeddy = document.getElementById("pale_brown_teddy");
let darkBrownTeddy = document.getElementById("dark_brown");
let whiteColorTeddy = document.getElementById("white_color");
let tanColorTeddy = document.getElementById("tan_color_teddy");

paleBrownTeddy.onclick = function() {
    if (paleBrownTeddy.onclick) {
        let paleBrownTeddyColor = document.getElementById("img_de_teddy");
        paleBrownTeddyColor.innerHTML = "<img  src=\"http://localhost:3000/images/teddy_2.jpg\" class=\"card-img-top\" alt=\"...\">";
    }
}

darkBrownTeddy.onclick = function() {
    if (darkBrownTeddy.onclick) {
        let darkBrownTeddy = document.getElementById("img_de_teddy");
        darkBrownTeddy.innerHTML = "<img  src=\"http://localhost:3000/images/teddy_3.jpg\" class=\"card-img-top\" alt=\"...\">";
    }
}

whiteColorTeddy.onclick = function() {
    if (whiteColorTeddy.onclick) {
        let whiteColorTeddy = document.getElementById("img_de_teddy");
        whiteColorTeddy.innerHTML = "<img  src=\"http://localhost:3000/images/teddy_4.jpg\" class=\"card-img-top\" alt=\"...\">";
    }
}

tanColorTeddy.onclick = function() {
    if (tanColorTeddy.onclick) {
        let ts = document.getElementById("img_de_teddy");
        ts.innerHTML = "<img  src=\"http://localhost:3000/images/teddy_1.jpg\" class=\"card-img-top\" alt=\"...\">"
    }
}

//differente lentille camera

let eltCamera = document.getElementById("camera_selector");
eltCamera.classList.add("div");
eltCamera.innerHTML = "<div><ul><li>50mm 1.8</li></ul></li><ul><li>60mm 2.8</li></ul><ul><li>24-60mm 2.8/4.5</li></ul></div>";

//differente table

let eltTable = document.getElementById("table_selector");
eltTable.classList.add("div");
eltTable.innerHTML = "<div><ul><li>Chocolate</li></ul></li><ul><li>Black</li></ul><ul><li>White</li></ul></div>";