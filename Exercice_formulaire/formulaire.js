function validation() {
    let etat = true // La variable qui sera soit false soit true

    // Condition du nom

    const nom = document.getElementById("nom");            // Définit la constante en fonction de l'input
    if (nom.value.length < 3 || nom.value.length > 100) {       // Vérifie si il y a moins de 3 caractères ou plus de 100 caractères
        document.getElementById("nom").style.border = "3px solid red";      // Change la bordure en rouge si ce n'est pas bon
        document.getElementById("lab_nom").style.color = "red";         // Change le label en rouge si ce n'est pas bon
        etat = false; // Définit la variable etat en false
    } else if (/[^a-z-A-Z]/.test(nom.value.trim())) {        // Vérifie qu'il n'y a que des lettres dans l'input
        document.getElementById("nom").style.border = "3px solid red";       // Change la bordure en rouge si ce n'est pas bon
        document.getElementById("lab_nom").style.color = "red";         // Change le label en rouge si ce n'est pas bon
        etat = false;
    } else {
        document.getElementById("nom").style.border = "3px solid black";      // Sinon la bordure reste noire
        document.getElementById("lab_nom").style.color = "green";       // Et la label devient vert
    }

    // Condition du prenom

    const prenom = document.getElementById("prenom");
    if (prenom.value.length < 3 || prenom.value.length > 100) { 
        document.getElementById("prenom").style.border = "3px solid red";
        document.getElementById("lab_prenom").style.color = "red";
        etat = false;
    } else if (/[^a-zA-Z]/.test(prenom.value.trim())) {
        document.getElementById("prenom").style.border = "3px solid red";
        document.getElementById("lab_prenom").style.color = "red";
        etat = false;
    } else {
        document.getElementById("prenom").style.border = "3px solid black";
        document.getElementById("lab_prenom").style.color = "green";
    }

    // Condition du jour

    const jour = document.getElementById("jour");
    if (jour.value.length != 2) {       // Vérifie qu'il n'y a que deux caractères
        document.getElementById("jour").style.border = "3px solid red";
        etat = false;
    } else if (/[^0-9]/.test(jour.value.trim())) {      // Vérifie qu'il n'y a que des chiffres
        document.getElementById("jour").style.border = "3px solid red";
        etat = false
    } else if (jour.value > 31){
        document.getElementById("jour").style.border = "3px solid red";
        document.getElementById("lab_naissance").style.color = "red";
        etat = false;
    } else {
        document.getElementById("jour").style.border = "3px solid black";
    }
    
    // Condition du mois

    const mois = document.getElementById("mois");
    if (mois.value.length != 2) { 
        document.getElementById("mois").style.border = "3px solid red";
        document.getElementById("lab_naissance").style.color = "red";
        etat = false;
    } else if (/[^0-9]/.test(mois.value.trim())) {
        document.getElementById("mois").style.border = "3px solid red";
        document.getElementById("lab_naissance").style.color = "red";
        etat = false;
    } else if (mois.value > 12){
        document.getElementById("mois").style.border = "3px solid red";
        document.getElementById("lab_naissance").style.color = "red";
        etat = false;
    } else {
        document.getElementById("mois").style.border = "3px solid black";
    }
    
    // Condition de l'annee et de l'âge
    
    let date_actu = new Date();     // date_actu prend la date atcuelle
    let annee_actu = date_actu.getFullYear();       // annee_actu prend l'année de la date actuelle
    const annee = document.getElementById("annee");
    if (annee.value.length != 4) {               // Vérifie qu'il n'y a que 4 caractères sinon : bordure rouge et label rouge
        document.getElementById("annee").style.border = "3px solid red";
        document.getElementById("lab_naissance").style.color = "red"; 
        etat = false;
    } else if (/[^0-9]/.test(annee.value.trim())) {
        document.getElementById("annee").style.border = "3px solid red";
        document.getElementById("lab_naissance").style.color = "red";
        etat = false;
    } else if (annee.value > 2023) {
        document.getElementById("annee").style.border = "3px solid red";
        document.getElementById("lab_naissance").style.color = "red";
        etat = false;
    } else if (annee_actu - annee.value > 40 ) {        // Vérifie que l'année actuelle moins l'année de naissance est inférieure à 40
        document.getElementById("annee").style.border = "3px solid red";
        document.getElementById("lab_naissance").style.color = "red";
        document.getElementById("trop_vieux").innerHTML = "Vous êtes trop vieux !";     // Un message apparaît en disant que l'utilsateur est trop 
        etat = false;
    } else {
        document.getElementById("annee").style.border = "3px solid black";
        document.getElementById("trop_vieux").innerHTML = "";       // Le message disant que l'utilisateur disparaît s'enlève
    }
    
    // Vérification du label de la date de naissance
    
    if (jour.value.length == 2 && mois.value.length == 2 && annee.value.length == 4 ) {         // Si il y a deux caractères pour l'input jour et mois et 4 pour l'année alors le label devient vert
        document.getElementById("lab_naissance").style.color = "green";
    }
    
    // Condition de la ville
    
    const valeur_ville = document.getElementById("ville_select");
    if (valeur_ville.value =="selection_ville") { 
        document.getElementById("ville_select").style.border = "3px solid red";
        document.getElementById("city").style.color = "red";
        etat = false;
    } else {
        document.getElementById("ville_select").style.border = "3px solid black";
        document.getElementById("city").style.color = "green";
    } 
    
    // Condition de la formation

    const sisr = document.getElementById("sisr");
    const sisr_alt = document.getElementById("sisr_alt");
    const slam = document.getElementById("slam");
    const slam_alt = document.getElementById("slam_alt");
    if (!sisr.checked && !sisr_alt.checked && !slam.checked && !slam_alt.checked){
        document.getElementById("border_form").style.border = "solid red 3px";
        document.getElementById("lab_formation").style.color = "red"; 
        etat = false;
    }else {
        document.getElementById("border_form").style.border = "solid black 3px";
        document.getElementById("lab_formation").style.color = "green"; 
    }
    
    // Condition du message
    
    const msg = document.getElementById("msg");
    if (msg.value.length < 50) { // Vérifie qu'il y a minimum 50 caractères
        document.getElementById("msg").style.border = "3px solid red";
        document.getElementById("lab_message").style.color = "red";
        etat = false;
    } else {
        document.getElementById("msg").style.border = "3px solid black";
        document.getElementById("lab_message").style.color = "green";
    } 
    
    return etat;
    }
    




    
