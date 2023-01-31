function Valider() {

    let Couriel = document.getElementsByName("Couriel")[0].value;
    let Nom = document.getElementsByName("Nom")[0].value;
    let province = document.getElementsByName("Province")[0].value;
    let tel = document.getElementsByName("Telephone")[0].value;
    let pomme = document.getElementsByName("Pommes")[0].value;
    let patate = document.getElementsByName("Patates")[0].value;
    let pseudonyme = document.getElementsByName("Pseudoyme")[0].value;
    if (province === "Ontario") {
        tel[0] = 6;
        tel[1] = 1;
        tel[2] = 3;
    } else if (province === "Ontario") {
        tel[0] = 8;
        tel[1] = 1;
        tel[2] = 9;
    }
// pseudonyme[0].ToUpper;
    if (Nom.length >= 2 && Nom.length <= 100 && Couriel === Couriel &&
        province === "Québec" || province === "Ontario" || province === "Manitoba" &&
        pomme >= 0 && pomme <= 40 && patate >= 5 && patate <= 40 && patate > pomme &&
        pseudonyme.length >= 3 && pseudonyme.length <= 9 && pseudonyme[pseudonyme.length - 1] === "!" ||
        pseudonyme[pseudonyme.length - 1] === "$" || pseudonyme[pseudonyme.length - 1] === "?") {
        alert("BRAVO!!!!")
        return true;
    } else {
        alert("NON CEST PAS BON!!!!")
        return false;
    }
}











