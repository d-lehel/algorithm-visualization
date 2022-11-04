function email_ellenoriz(email) {
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (emailformat.test(document.form.email.value));
}

function ellenoriz() {

    if (document.form.nev.value.trim == '') {
        alert('Kérlek add meg a neved!');
        document.form.nev.focus();
        return false;
    }

    if (document.form.email.value.trim == '') {
        alert('Kérlek add meg az email-címed!');
        document.form.email.focus();
        return false;

    } 
    
    if (email_ellenoriz() == false) {
        alert('Kérlek add meg helyesen az emal-címed!');
        document.form.email.focus();
        return false;
    }

    if (document.form.targy.value.trim() == '') {
        alert('Kérlek add meg az üzenet tárgyát!');
        document.form.targy.focus();
        return false;
    }

    if (document.form.uzenet.value.trim() == '') {
        alert('Kérlek írj valami üzenetet!');
        document.form.uzenet.focus();
        return false;
    }

    return true;
}