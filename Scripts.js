function alphanumerique(ch) {
    ch = ch.toUpperCase();
    i = 0;
    verife = true;
    do {
        if (((ch.charAt(i) >= "A") && (ch.charAt(i) <= "Z")) || ((ch.charAt(i) >= "0") && (ch.charAt(i) <= "9"))) { i++; }
        else { verife = false; }
    }
    while ((verife) && (i < ch.length));
    return verife;
}


function alphabetique(ch) {
    ch = ch.toUpperCase();
    i = 0;
    verife = true;
    do {
        if ((ch.charAt(i) >= "A") && (ch.charAt(i) <= "Z")) { i++; }
        else { verife = false; }
    }
    while ((verife) && (i < ch.length));
    return verife;
}

function abc() {
    var adresse = document.getElementById("adresse").value;
    if (adresse.length < 10) {
        alert("aaa")
        return false
    }

}
function test() {

    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var adresse = document.getElementById("adresse").value;
    var tel = document.getElementById("tel").value;
    var mail = document.getElementById("mail").value;
    var date = document.getElementById("date").value;

    // Controle du nom
    if (nom.length <= 3 || !(alphabetique(nom))) {
        alert("Entrez votre nom!");
        return false;
    }

    // Controle du prenom
    if (prenom.length <= 3 || !(alphabetique(prenom))) {
        alert("Entrez votre prénom!");
        return false;
    }

    // Controle de l'age
    dateactuelle = new Date()
    anneeactuelle = dateactuelle.getFullYear()
    datenaissance = new Date(date)
    anneenaissance = datenaissance.getFullYear()
    Age = Number(anneeactuelle) - Number(anneenaissance)
    if (Number(anneeactuelle) < Number(anneenaissance)) {
        alert("Date invalide!");
        return false;
    }

    // Controle de l'adresse
    if (adresse.length < 10) {
        alert("Veuillez rentrez une adresse de taille minimal de 10 caractéres!");
        return false;
    }

    // Controle du téléphone
    if (tel.isNaN) {
        alert("Veuillez rentrez un numero de téléphone valide");
        return false;
    }
    if (tel.length != 8) {
        alert("Veuillez rentrez un numero de téléphone de 8 chiffres");
        return false;
    }
    if (tel.charAt(0) <= 1) {
        alert("Le premier chiffre du numero du téléphone doit être égale ou supérieur a 1");
        return false;
    }





    // Controle de l'email

    if ((mail.length > 50) || (mail.indexOf("@") == -1) || (mail.indexOf(".") == -1) || ((mail.indexOf(".")) < (mail.indexOf("@")))) {
        alert("Email \n |-----> Invalide : L'Email doit  vérifier ces contraintes: <-----| \n---> longueur <=50\n---> Arobase (@) existe\n---> Le point (.) existe\n---> La position du point (.) > La position du arobase(@)");
        return false;
    }
    else {
        ch1 = mail.substr(0, mail.indexOf("@"));
        if ((!alphanumerique(ch1)) || (ch1.length < 3)) {
            alert("Email \n |-----> Invalide : L'Email doit  vérifier ces contraintes: <-----| \n---> La partie ch1 de Mail doit être Alphanumérique\n---> La longueur de ch1 de Mail doit être >=3");
            return false;
        }
        else {
            ch2 = mail.substring(mail.indexOf("@") + 1, mail.indexOf("."));
            if ((!alphanumerique(ch2)) || (ch2.length < 3)) {
                alert("Email \n |-----> Invalide : L'Email doit  vérifier ces contraintes: <-----| \n---> La partie ch2 de Mail doit être Alphanumérique\n---> La longueur de ch2 de Mail doit être >=3");
                return false;
            }
            else {
                ch3 = mail.substr(mail.indexOf(".") + 1);
                if ((!alphabetique(ch3)) || (ch3.length < 2) || (ch3.length > 4)) {
                    alert("Email \n |-----> Invalide : L'Email doit  vérifier ces contraintes: <-----| \n---> La partie ch3 de Mail doit être Alphabétique\n---> La longueur de ch3 de Mail doit être dans [2..4]");
                    return false;
                }
            }
        }
    }



    // Calculer le score
    score = 0
    var deuxPts = document.querySelectorAll(".deuxpoints");
    var troisPts = document.querySelectorAll(".troispoints");
    var cinqPts = document.querySelectorAll(".cinqpoints");
    var chronique = document.getElementById("chronique");
    var mauxtete = document.getElementById("mauxtete");

    for (i = 0; i < troisPts.length; i++) {
        if (troisPts[i].checked)
            score += 3
    }
    for (i = 0; i < deuxPts.length; i++) {
        if (deuxPts[i].checked)
            score += 2
    }
    for (i = 0; i < cinqPts.length; i++) {
        if (cinqPts[i].checked)
            score += 5
    }
    if (mauxtete.checked)
        score += 1

    console.log(score);
    ls = window.localStorage;
    ls.setItem("score", score);
    ls.setItem("chronique", chronique);
    ls.setItem("age", Age); 
}
