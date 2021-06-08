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
        let tanColorForTeddy = document.getElementById("img_de_teddy");
        tanColorForTeddy.innerHTML = "<img  src=\"http://localhost:3000/images/teddy_1.jpg\" class=\"card-img-top\" alt=\"...\">"
    }
}

//All camera
//Image camera 
let imgCamera = document.getElementById("img_camera");
imgCamera.innerHTML = "<img src=\"http://localhost:3000/images/vcam_1.jpg\" class=\"card-img-top\" alt=\"...\">";

let lentilleCamera35mm14 = document.getElementById("lentille_camera_35mm_14");
let lentilleCamera50mm18 = document.getElementById("lentille_camera_50mm_18");
let lentilleCamera25mm45 = document.getElementById("lentille_camera_25mm_45");
let lentilleCamera50mm17 = document.getElementById("lentille_camera_50mm_17");
let lentilleCamera50mm14 = document.getElementById("lentille_camera_50mm_14");

lentilleCamera35mm14.onclick = function() {
    if (lentilleCamera35mm14.onclick) {
        let changeImgCamera35mm14 = document.getElementById("img_camera");
        changeImgCamera35mm14.innerHTML = "<img src=\"http://localhost:3000/images/vcam_1.jpg\" class=\"card-img-top\" alt=\"...\">";
    }
}

lentilleCamera50mm18.onclick = function() {
    if (lentilleCamera50mm18.onclick) {
        let changeImgCamera50mm18 = document.getElementById("img_camera");
        changeImgCamera50mm18.innerHTML = "<img src=\"http://localhost:3000/images/vcam_2.jpg\" class=\"card-img-top\" alt=\"...\">";
    }
}

lentilleCamera25mm45.onclick = function() {
    if (lentilleCamera25mm45.onclick) {
        let changeImgCamera25mm45 = document.getElementById("img_camera");
        changeImgCamera25mm45.innerHTML = "<img src=\"http://localhost:3000/images/vcam_3.jpg\" class=\"card-img-top\" alt=\"...\">";
    }
}

lentilleCamera50mm17.onclick = function() {
    if (lentilleCamera50mm17.onclick) {
        let changeImgCamera50mm17 = document.getElementById('img_camera');
        changeImgCamera50mm17.innerHTML = "<img src=\"http://localhost:3000/images/vcam_4.jpg\" class=\"card-img-top\" alt=\"...\">";
    }
}

lentilleCamera50mm14.onclick = function() {
        if (lentilleCamera50mm14.onclick) {
            let changeImgCamera50mm14 = document.getElementById("img_camera");
            changeImgCamera50mm14.innerHTML = "<img src=\"http://localhost:3000/images/vcam_5.jpg\" class=\"card-img-top\" alt=\"...\">";
        }
    }
    //Image table
    //All for table
let imgTable = document.getElementById("img_table");
imgTable.innerHTML = "<img src=\"http://localhost:3000/images/oak_1.jpg\" class=\"card-img-top\" alt=\"...\">";
//Variable evenement table
let TanChocolatTable = document.getElementById("tan_chocolate_table");
let DarkOakLightOakTable = document.getElementById("dark_oak_light_oak_table");
let DarkOakTeakTable = document.getElementById("dark_oak_teak_table");
let LightOakTeakTable = document.getElementById("light_oak_teak_table");
let darkOakMahoganyTable = document.getElementById("dark_oak_mahogany");
// All evenement table
TanChocolatTable.onclick = function() {
    if (TanChocolatTable.onclick) {
        let changeTanImgTable = document.getElementById("img_table");
        changeTanImgTable.innerHTML = "<img src=\"http://localhost:3000/images/oak_1.jpg\" class=\"card-img-top\" alt=\"...\">";
    }
}

DarkOakLightOakTable.onclick = function() {
    if (DarkOakLightOakTable.onclick) {
        let changeDarkOakImgTable = document.getElementById("img_table");
        changeDarkOakImgTable.innerHTML = "<img src=\"http://localhost:3000/images/oak_2.jpg\" class=\"card-img-top\" alt=\"...\">";
    }
}

DarkOakTeakTable.onclick = function() {
    if (DarkOakTeakTable.onclick) {
        let changeDarkOakTeakImgTable = document.getElementById("img_table");
        changeDarkOakTeakImgTable.innerHTML = "<img src=\"http://localhost:3000/images/oak_3.jpg\" class=\"card-img-top\" alt=\"...\">";
    }
}

LightOakTeakTable.onclick = function() {
    if (LightOakTeakTable.onclick) {
        let changeLightOakTeakImgTable = document.getElementById("img_table");
        changeLightOakTeakImgTable.innerHTML = "<img src=\"http://localhost:3000/images/oak_4.jpg\" class=\"card-img-top\" alt=\"...\">";
    }
}

darkOakMahoganyTable.onclick = function() {
    if (darkOakMahoganyTable.onclick) {
        let changedarkOakMahoganyImgTable = document.getElementById("img_table");
        changedarkOakMahoganyImgTable.innerHTML = "<img src=\"http://localhost:3000/images/oak_5.jpg\" class=\"card-img-top\" alt=\"...\">";
    }
}

let clickbuttonteddy = document.getElementById("button_for_teddy");

clickbuttonteddy.onclick = function() {
    if (clickbuttonteddy.onclick) {
        console.log("Hello world");
        window.location.href = "produit.html";
    }
}

fetch("http://localhost:3000/api/teddies")

.then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        console.log(value);
        // console.log(value[2])


        let $ArrayTeedy2 = value[0];
        console.log($ArrayTeedy2);

        class bankForTeddy {
            constructor(name, price, imageUrl, description, colors, _id) {
                this.name = name;
                this.price = price;
                this.imageUrl = imageUrl;
                this.description = description;
                this.colors = colors;
                this._id = _id
            }
            SayTeddy() {
                console.log("bonjour" + this.name + this.price + this.description + this.colors + this.imageUrl + this._id);
            }
        }
        const newForTeddy = new bankForTeddy();
        newForTeddy.SayTeddy();

    })
    .catch(function(err) {
        // Une erreur est survenue
    });