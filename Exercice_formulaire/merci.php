<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="merci.css">
    <title>Merci</title>
</head>
<body>
    <h1>Merci !</h1>
    <h2>Votre inscription a bien été enregistrée</h2>

<?php
    if(isset($_REQUEST['envoyer'])){
        $dbname = "formulaire";
        $dbuser = "root";
        $dbip = "localhost";
    
        $bdd = new PDO("mysql:host=".$dbip.";dbname=".$dbname.";charset=utf8",$dbuser); //$bdd=var de connexion (mysql=type de bdd, host=adresse de la bdd, $dbname=nom de la bdd, $dbuser=id pour se connecter à phpmyadmin)
        
        $nom = $_REQUEST['nom'];
        $prenom = $_REQUEST['prenom'];
        $jour = $_REQUEST['jour'];
        $mois = $_REQUEST['mois'];
        $annee = $_REQUEST['annee'];
        $ville = $_REQUEST['ville'];
        $formation = $_REQUEST['formation'];
        $message = $_REQUEST['message'];

        $sql = $bdd->prepare("INSERT INTO compte (nom, prenom, jour, mois, annee, ville, formation, `message`) VALUES (?,?,?,?,?,?,?,?)"); //prepare ta requête
        $sql->execute(array($nom,$prenom,$jour,$mois,$annee,$ville,$formation,$message));

        echo "Vos données ont bien été transmises";
    }

// $db = "evandb";
// $dbuser = "root";
// $dbpass = "";
// $bdd = new PDO("mysql:host=localhost;dbname=$db;charset=utf8", $dbuser, $dbpass);

// if (isset($_POST["forminscription"])) {
//     $prenom = $_POST["prenom"];
//     $nom = $_POST["nom"];
//     $jour = $_POST["jour"];
//     $mois = $_POST["mois"];
//     $annee = $_POST["annee"];
//     $date = $jour . "-" . $mois . "-" . $annee;
//     $choix = $_POST["choix"];
//     $select = $_POST["select"];
//     $text = $_POST["text"];

//     $jacques = $bdd->prepare("INSERT INTO formulaire(nom,prenom,dateanniv,forma,iia,`text`) VALUES(?,?,?,?,?,?)");
//     $jacques->execute(array($prenom, $nom, $date, $choix, $select, $text));
// }
?>
</body>
</html>