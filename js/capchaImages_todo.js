// tableau des éléments à clicker 


//                  0         1         2       3          4       5        6          7
let tableMots = ["Avion", "Camion", "Chaton", "Cheval", "Girafe", "Lion", "Oiseau", "Violon"];
let captcha;
let nbClick = 0;
let imgborders;
let resultMot;
let newTableMots = [];
let rAZ_btn;

window.onload = function() {
    captcha = document.querySelector('.capText');
    imgborders = document.querySelectorAll('img[class^="image"]');
    rAZ_btn = document.querySelector('input[value="Recommencer"]');

    generationList();
    ajouteEventListener();
}

// Créer une fonction pour mélanger le newTableMots tableMots[] avant d'afficher son contenu.
function melange(tableMots) {

    tableMots.sort(() => Math.random() - 0.5);
}


// Générer une liste <li> avec tous les textes du newTableMots tableMots[] ci-dessus, dans un ordre différents, donc : 
function generationList() {

    // captcha.innerHTML = "";

    let html = "";
    html += "<ol class='captcha'>";
    tableMots.forEach(tableMot => {

        html += "<li>" + tableMot + "</li>"
    });
    html += "</ol>";

    captcha.innerHTML = html;

    // html = "";

}

function ajouteEventListener() {
    for (const imgborder of imgborders) {
        imgborder.addEventListener("click", function(event) {
            selectImg(imgborder.alt);

        });

    }
    rAZ_btn.addEventListener('click', function() {
        raz();
    });
}



// L'utilisateur doit pouvoir cliquer sur les images.
// Et il doit cliquer sur les images dans l'ordre de la liste ul, pour que sont clic soit validé.
function selectImg(imgNom) {
    // let imgName = imgNom;

    if (tableMots[nbClick] == imgNom) {
        console.log('ok');
    }

    nbClick++;


    if (compareOne(nbClick, imgNom)) {
        // trouvé
    } else {
        // perdu
    }

    newTableMots.push(imgNom);

    resultMot = document.querySelector(".result");

    if (nbClick == tableMots.length) {

        let result = arrayEquals(tableMots, newTableMots);

        newTableMots = [];

        if (result) {
            changeborderColor("green");


        } else {
            changeborderColor("red");
        }
    }

}


function changeborderColor(color) {
    imgborders.forEach(imgborder => {

        imgborder.style.border = "10px " + color + " solid";

        resultMot.style.color = "rgb(24 104 24);";

        if (color == "green") {
            resultMot.innerHTML = "Vous avez Gagné !!!";
            resultMot.style.color = 'green';
        } else if (color == "red") {
            resultMot.innerHTML = "Vous avez Perdu !!!";
            resultMot.style.color = 'red';


        } else {
            resultMot.innerHTML = "";
            resultMot.style.color = '#000';

        }

    });


}

// Au premier clic sur une image :
// comparer si l'image cliqué est identique au premier mot du tableau.
// Au SECOND clic sur une image :
// comparer si l'image cliqué est identique au DEUXIEME mot du tableau.
// Au TROISIEME clic sur une image :
// comparer si ...
function compareOne(nbClick, imgNom) {

    let trouve_b = false;
    let getOneImg;

    getOneImg = document.querySelector('.image' + imgNom);

    if (tableMots[nbClick - 1] == imgNom) {
        trouve_b = true;
        getOneImg.style.border = "5px #0f0 solid";

    } else {
        trouve_b = false;
        getOneImg.style.border = "5px #f00 solid";

    }

    return trouve_b;

}
// Si oui 
//    
//    Mettre l'élément de la liste validé en couleur. (le mettre en couleur)
//
//    Si l'utilisateur à toutes les bonnes réponses,
//      mettre la bordure des images en vert. gagné.
// SINON
//    mettre toutes images avec un bord rouge. perdu.
function arrayEquals(tableMot, newTableMots) {
    return Array.isArray(tableMot) &&
        Array.isArray(newTableMots) &&
        tableMot.length === newTableMots.length && tableMot.every((val, index) => val === newTableMots[index]);
}






function raz() {
    melange(tableMots);
    generationList();
    changeborderColor("#888");
    nbClick = 0;
    let myResultMot = resultMot.innerHTML;
    if (myResultMot) {
        resultMot.innerHTML = "";

    }

}






//-----------------------------------------------------------------------
// ANALYSE
//-----------------------------------------------------------------------
/*

1) Mélanger le tableau tableMots[]

2) Générer les <li> avec les mots du tableau.

3) créer une variable Globale, qui comptabilise les clics : nbClick.

4) onclick sur une image

function compare() {

    // Au premier clic, c'est le premier élément, donc le num 0, qui doit être comparé.

    // on récupère le ALT : "Camion"

    //---------------------
    console.log('nom image : ' + ALT);
    console.log('nbClick : ' + nbClick);
    console.log('mot à comparer : ' + tableMots[nbClick]);

    comparaison image (ALT) / liste tableMots[nbClick] .

    if (c'est bon) {
        // sélectionner l'élément de la liste et le mettre en vert (style, class)

        if() {
            Si l'utilisateur à toutes les bonnes réponses,
            // mettre la bordure des images en vert
        }

    }  else {
        // mettre la bordure des images en rouge
    }

}

*/