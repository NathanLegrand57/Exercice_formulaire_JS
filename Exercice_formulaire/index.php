<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Formulaire</title>
</head>
<body>
<form action="merci.php" method="post" onsubmit="return validation()">
    <div class="container1">
        <h1>Formulaire</h1>
        <div class="container2">
            <label id="lab_nom" for="nom">Nom</label>
            <input placeholder="Nom" id="nom" type="text" name="nom">
            <p id="nom_vide"></p>

            <label id="lab_prenom" for="prenom">Prénom</label>
            <input placeholder="Prénom" id="prenom" type="text"name="prenom" >

            <div class="naissance">
                <label id="lab_naissance" for="jour">Date de naissance</label>
                    <input type="text" placeholder="Jour" id="jour" name="jour" >
                    <input type="text" placeholder="Mois" id="mois" name="mois">
                    <input type="text" placeholder="Année" id="annee" name="annee">
                <p id="trop_vieux"></p>
            </div>

            <label id="city" for="ville">Ville</label>
            <select name="ville" id="ville_select">
                <option value="selection_ville"  >Sélectionner une ville</option>
                <option value="redon">Redon</option>
                <option value="st-nazaire">Saint-Nazaire</option>
                <option value="laval">Laval</option>
                <option value="nantes">Nantes</option>
            </select>

            <label id="lab_formation" for="sisr">Formation</label>
            <fieldset id="border_form">
                <div>
                <input type="radio" id="sisr" name="formation" value="sisr">
                <label for="sisr">SISR</label>
                </div>
            
                <div>
                <input type="radio" id="sisr_alt" name="formation" value="sisr_alt">
                <label for="sisr_alt">SISR Alternance</label>
                </div>
        
                <div>
                    <input type="radio" id="slam" name="formation" value="slam">
                    <label for="slam">SLAM</label>
                </div>

                <div>
                    <input type="radio" id="slam_alt" name="formationt" value="slam_alt">
                    <label for="slam_alt">SLAM Alternance</label>
                </div>
            </fieldset>

            <label id="lab_message" for="msg">Message</label>
            <textarea name="message" id="msg" cols="30" rows="10" placeholder="Ecrire un message..."></textarea>

            <input type="submit" name="envoyer">
        </div>
    </div>
</form>
<script src="formulaire.js"></script>
</body>
</html>