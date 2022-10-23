function validation() {

    var test = true;

    if (document.f.mail_log.value == "")

    {
        alert("le champ adress mail ne doit etre vide !");
        test = false;
    } else

    if (document.f.pass_log.value == "") {
        alert("le champ mot de passe de doit etre vide !");
        test = false;
    }



    return test;

}