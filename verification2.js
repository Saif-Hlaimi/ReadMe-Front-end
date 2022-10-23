function validation2() {
    var test = true;

    if (document.p.nom.value == "") {
        alert("champs nom ne doit etre vide");
        test = false;
    } else
    if (document.p.prenom.value == "") {
        alert("champs prenom ne doit etre vide");
        test = false;
    } else
    if (document.p.mail.value == "") {
        alert("champs adress mail ne doit etre vide");
        test = false;
    } else
    if (document.p.mot_de_passe.value == "") {
        alert("champs mot de passe ne doit etre vide");
        test = false;
    } else
    if ((document.p.mot_de_passe.value).lenght < 8) {
        alert("mot de passe doit contenir 8 caractére au minimum");
        test = false;
    } else
    if (document.p.mot_de_passe.value.search(/[A-Z]/) == -1) {
        alert("mot de passe doit inclure des caractére majuscule");
        test = false;
    } else
    if (document.p.mot_de_passe.value.search(/[0-9]/) == -1) {
        alert("mot de passe doit inclure des chiffres");
        test = false;
    } else
    if (document.p.retype.value == "") {
        alert("le dernier champs ne doit etre vide");
        test = false;
    } else
    if ((document.p.mot_de_passe.value) != (document.p.retype.value)) {
        alert(" les mots de passes ne sont pas identque");
        test = false;
    }




    return test;



}