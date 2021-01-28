
/* bonjour Monsieur.
Nous sommes plutot fiers de notre TP, mais nous sommes conscients de plusieurs défauts:
1 - lorsque l'on retire une image du diaporama, le length de toutes les images contenues
    dans le diaporama ne diminue pas, ce qui laisse un vide au bout du film après avoir
    enlevé une ou des images.
2 - Nous n'avons pas eu le temps de programmer l'ajout ou le retrait de sons dans la playlist
3 - Notre lightbox fonctionne, mais peu importe ou l'on clique, le lightbox disparaît.
4 - le code n'est sûrement pas minimalisé à son maximum, il peu sembler long et répétitif


/*

/* =================================   VARIABLES/SÉLÉCTEURS   ================== */

// HEADER
var h1 = document.querySelector('h1');
// MENUS/NAV
var liens = document.querySelector('#liens');
var images = document.querySelector('#images');
var sons = document.querySelector('#sons');
var ulMenu = document.querySelector('#ulMenu');
var ulLiens = document.querySelector('#ulLiens');
var ulImages = document.querySelector('#ulImages');
var ulSons = document.querySelector('#ulSons');
// SECTIONS
var sectionAccueil = document.querySelector("#sectionAccueil");
var sectionImages = document.querySelector("#sectionImages");
var cadreImage = document.querySelector("#cadreImage");
var choixSon = document.querySelector("#sectionSons #pisteSonore");
var buttonSons = document.querySelector("#form2");
var srcImagePresente;
var nomImagePresente;
var sonPresente;
// ASIDE
var diaporama = document.querySelector("#diaporama #fenetre #bande");
var lightbox = document.querySelector(".lightBox");
var btnGauche = document.querySelector("#btnleft");
var btnDroit = document.querySelector("#btnright");
var imageLightBox;



/* =================================   INSÉRER IMAGES DANS LE DIAPORAMA   ================== */

function ImageDansDiaporama(){
    let htmlOption = "";
    // boucle qui va injecter chaque balises image dans la section avec son nom et sa source
    for (let i = 0; i < menu.images.length; i++) {
        let sourceImage = menu.images[i].src;
        let nomImage = menu.images[i].nom;
        if(menu.images[i].choix == true){
            htmlOption += `<img data-nom="${nomImage}"  src="${sourceImage}">`;  
        }else{};
    }
    diaporama.innerHTML = htmlOption;
}
ImageDansDiaporama();



/* =================================   FAIRE GÉNÉRER LISTES DE MENUS   ========= */

/* ===================    LIENS  ==================== */

// detecter souris sur menu et liste
liens.addEventListener("mouseover", function(){
    ulLiens.addEventListener("mouseover", function(){
        ulLiens.style.display = "block"; });

    // generer la data liste en injectant les sources et noms de chaque site dans des li
    function afficherList(){
        let htmlOption = "";
        for (let i = 0; i < menu.sites.length; i++) {
            let nomCourant = menu.sites[i].nom;
            htmlOption += `<li onclick="window.open('${menu.sites[i].addresse}')">${nomCourant}</li>`;
            ulLiens.innerHTML = htmlOption;
        }
        //faire apparaitre la liste
        ulLiens.style.display = "block"; 
    }
    afficherList();
});
    // liste invisible si curseur pas dessus
    ulMenu.addEventListener("mouseout", function(){
        ulLiens.style.display = "none";
    });

/* ===================    IMAGES  =================== */

// detecter souris sur menu et liste
images.addEventListener("mouseover", function(){
    ulImages.addEventListener("mouseover", function(){
        ulImages.style.display = "block"; });
    // generer la data liste en injectant les sources et les noms de chaque images dans des li
    function afficherList(){
        let htmlOption = "";
        for (let i = 0; i < menu.images.length; i++) {
            let nomCourant = menu.images[i].nom;
            // Clicker sur LI fait appel à la fonction ImbriquerImage()
            htmlOption += `<li onclick="imbriquerImage(${i})">${nomCourant}</li>`;
            ulImages.innerHTML = htmlOption;
        }
        //faire apparaitre la liste
        ulImages.style.display = "block"; 
    }
    afficherList();
});
    // liste invisible si curseur pas dessus
    ulMenu.addEventListener("mouseout", function(){
        ulImages.style.display = "none";
    });

/* ====================    SONS  ==================== */

// detecter souris sur menu et liste
sons.addEventListener("mouseover", function(){
    ulSons.addEventListener("mouseover", function(){
        ulSons.style.display = "block"; });
    // generer la data liste en injectant les sources et les noms de chaque son dans les li
    function afficherList(){
        let htmlOption = "";
        for (let i = 0; i < menu.sons.length; i++) {
            let nomCourant = menu.sons[i].nom;
            htmlOption += `<li onclick="imbriquerSon(${i})">${nomCourant}</li>`
            ulSons.innerHTML = htmlOption;
        }  
        //faire apparaitre la liste
        ulSons.style.display = "block"; 
    }
    afficherList();
});
    // liste invisible si curseur pas dessus
    ulMenu.addEventListener("mouseout", function(){
        ulSons.style.display = "none";
    });



/* ==========================   APPARAÎTRE SECTIONS + AJOUTER/RETIRER AU DIAPORAMA  ============= */

// revenir au meni losqu'on click sur le titre
h1.addEventListener("click", function(){
    sectionAccueil.style.display = 'block';
    sectionImages.style.display = 'none';
    sectionSons.style.display = 'none';
});

//fonction servant à injecter les balises images dans la section ainsi que les inputs qui y sont liés
function imbriquerImage(i){
    let sourceImage = menu.images[i].src;
    let nomImage = menu.images[i].nom;
    cadreImage.innerHTML = `<img data-nom="${nomImage}" src="${sourceImage}" width="100%"></img>`;
    sectionAccueil.style.display = 'none';
    sectionImages.style.display = 'block';
    sectionSons.style.display = 'none';
    srcImagePresente = sourceImage;
    
    form1.innerHTML = `<input type="button" data-name="${nomImage}" id="Oui" value="Oui"><br>
                        <input type="button" data-name="${nomImage}" id="Non" value="Non" checked><br>`
                          var buttonImageNon = document.querySelector("#form1 #Non");
                          var buttonImageOui = document.querySelector("#form1 #Oui");
                          var nomImageEnCours = buttonImageNon.dataset.name;                          
                          
        for (let i = 0; i < menu.images.length; i++) {
            let nomCourant = menu.images[i].nom;
            // Ajout d'une image dans le diaporama
            buttonImageOui.addEventListener("click", function(){
                if(nomCourant == nomImageEnCours && menu.images[i].choix == false)
                {
                    menu.images[i].choix = true;
                }
                // appelle la fonction qui injecte les images dans le diaporama
                ImageDansDiaporama();
            });
            // Retrait d'une image dans le diaporama
            buttonImageNon.addEventListener("click", function(){
                if(nomCourant == nomImageEnCours && menu.images[i].choix == true){
                    menu.images[i].choix=false;
                }
                // appelle la fonction qui injecte les images dans le diaporama
                ImageDansDiaporama();
            });
        }  
}

//fonction servant à injecter la balise audio dans la section ainsi que les inputs qui y sont liés
function imbriquerSon(i){
    let sourceSon = menu.sons[i].src;
    choixSon.innerHTML = `<audio controls><source src="${sourceSon}" type="audio/mp3"></audio>`;
    sectionAccueil.style.display = 'none';
    sectionImages.style.display = 'none';
    sectionSons.style.display = 'block';
    sonPresente = sourceSon;
    buttonSons.innerHTML = `<input type="button" name="${sourceSon}" id="Oui" value="Oui"><br>
                          <input type="button" name="${sourceSon}" id="Non" value="Non" checked><br>`
}



/* =================================   CONTROLER DIAPORAMA   ========================= */

(function(){
    let imageCourante = 0;
    // Nombre d'images calculé à partir du contenu de la page web.
    const nombreImages = document.querySelectorAll("#bande img").length;
    
    // Nécessaires pour accéder aux étapes de modification de la marge
    let margeCourante = 0;
    let margeFinale = 0;

    // Gestionnaires d'événements des boutons de contrôle du diaporama.
    btnDroit.addEventListener("click", diapoSuivante);
    btnGauche.addEventListener("click", diapoPrecedente);

    //l'image suivante
    function diapoSuivante() {
        // Tant qu'il y a des images suivantes
        if(imageCourante < nombreImages - 1) {
            imageCourante++;
            margeFinale = imageCourante*(-200);
        }
        // Démarrer une minuterie pour afficher la prochaine diapo par un mouvement
        // fluide et répété
       
        // Lire la marge courante du film
        margeCourante = parseInt(document.querySelector('#bande').style.marginLeft);
        // Ajuster la marge courante à 0 si nous n'avons pas encore démarré le déplacement
        if(isNaN(margeCourante)) {
            margeCourante = 0;
        }

        if(margeCourante > margeFinale) {
            const marge = margeCourante - 200;
            document.querySelector('#bande').style.marginLeft = marge + "px";
        }
    }

    //Afficher image précédente
    function diapoPrecedente() {
        if(imageCourante > 0) {
            imageCourante--;
        }
        const marge = imageCourante*(-200);
        document.querySelector('#bande').style.marginLeft = marge + "px";
    }
})();



/* =====================================   LIGHTBOX   ================================ */

// Créer une array avec les sources de chaques images contenues dans la bande
function ToutesImgDiapo() {
    var imgsBande = document.querySelectorAll("#bande img");
    var srcList = [];
    for(let i = 0; i < imgsBande.length; i++) {
    srcList.push(imgsBande[i].nom);
        
    /* == Mettre les images dans le lightbox == */
    imgsBande[i].addEventListener("click", function(){
        imageLightBox = this.src;
        let htmlOption = "";
        for (let i = 0; i < 1; i++) { 
            htmlOption += '<img src="' + imageLightBox + '">';
        }
        lightbox.innerHTML = htmlOption;
        document.querySelector(".lightBox").style.display = "block";
    });
    }
}
ToutesImgDiapo();
// Pour faire disparaitre le lightbox
var EnleveLightBox = document.querySelector(".lightBox");
    EnleveLightBox.addEventListener("click", function(){
        EnleveLightBox.style.display = "none";
});



/* =================================   AJOUTER/RETIRER DE PLAYLIST   ========================= */

function SonsDansSelect(){
    let selectSons = document.querySelector(".listeDeroulanteSons"); 
    let selectAudio = document.querySelector(".ctrlAudio audio"); 
    let htmlOption = "";
    
    for (let i = 0; i < menu.sons.length; i++) {
        let sourceSons = menu.sons[i].nom;
        let source = menu.sons[i].src;
        sonPresente = sourceSons; 
        htmlOption += `<option value="${source}">${sonPresente}</option>`;
    }

    selectSons.innerHTML = htmlOption;
    selectSons.addEventListener("change",function(){
       selectAudio.src= this.value;
    })
}
SonsDansSelect();



/* =================================   DATE ET HEURE   ========================= */

/**
    * Elle prend un objet date et retourne une chaîne formatée 
    * selon le modèle :  "Lundi, le 27 mai 2019".
    * 
    * @param Date dateAFormater : l'objet date que l'on veut formater.
    * @return String : la chaîne représentant la date dans le format spécifié.
*/
    function obtenirDateFormatee(dateAFormater) {
        let jds = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        let ndm = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

        let jourDeLaSemaine = dateAFormater.getDay();
        let jourDuMois = dateAFormater.getDate();
        let mois = dateAFormater.getMonth();
        let annee = dateAFormater.getFullYear();
        let dateFormatee = jds[jourDeLaSemaine] + ", le " 
                            + jourDuMois + " "
                            + ndm[mois] + " "
                            + annee;
        return dateFormatee;
    }
    document.querySelector('footer #date').innerHTML = obtenirDateFormatee(new Date());

    function afficherHorloge() {
    let maintenant = new Date();
    document.querySelector('footer #horloge').innerHTML = maintenant.toLocaleTimeString();
    }

afficherHorloge();
setInterval(afficherHorloge, 1000);