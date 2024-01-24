<template>
    <body>
        
  
    <div class="tete">
        <h3 class="liste">Liste des utilisateurs</h3>
        <div class="tete1">
            <input class="chercher" type="search" name="" id="" placeholder="Chercher...">
            <button class="ajout" type="submit">Ajouter Employé</button>
        </div>
    </div>
    <div class="middle">
        <table>
            <thead>
                <tr class="titre">
                    <td class="un">NOM</td>
                    <td class="deux">PRENOM</td>
                    <td class="trois">AGE</td>
                    <td class="quatre">GENRE</td>
                    <td class="cinq">STATUS</td>
                    <td class="six">ACTIONS</td>
                </tr>
            </thead>
            <tbody>
                <tr>

                    <td>Artcal'O</td>
                    <td>Lone Wolf</td>
                    <td>45</td>
                    <td>F</td>
                    <td>Pas en congé</td>
                    <td>
                        <button class="un1" type="menu">Ajouter congé</button>
                        <button class="un2" type="menu">Modifier</button>
                        <button class="un3" type="menu">Supprimer</button>
                    </td>

                </tr>
                <tr>
                    <td>TLW</td>
                    <td>Wolverine</td>
                    <td>45</td>
                    <td>F</td>
                    <td>Pas en congé</td>
                    <td>
                        <button class="un1" type="menu">Ajouter congé</button>
                        <button class="un2" type="menu">Modifier</button>
                        <button class="un3" type="menu">Supprimer</button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</body>
</template>
<script>

</script>
<style scoped>

*{
    box-sizing: border-box;
}
body {
    padding: 0px 0px 0px 0px;
    gap: 15px;
    width: 1350px;
    height: 500px;
    display: flex;
    flex-direction: column;
}

.tete {
    display: flex;
    flex-direction: row;
    gap: 800px;
}

.tete1 {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.liste {
    margin-top: 20px ;
    font-family: sans-serif;
    font-weight: 700;
}

.chercher {
    height: 33px;
    padding-left: 10px;
    margin-top: 20px;
    border-radius: 4px;
    border: 1px solid grey;
}

.ajout {
    height: 30px;
    background-color: rgb(27, 27, 77);
    color: white;
    margin-top: 20px;
    border-radius: 4px;
}

td {
    font-family: sans-serif;
    border: 0.5 solid grey;
}

td {
    border-bottom: 0.5px solid grey;

}

.mi {
    height: 30px;
    width: 100%;
    background-color: brown;
}

.un {
    height: 30px;
    width: 150px;
    background-color: rgb(27, 27, 77);
    color: white;
    padding-left: 20px;
    font-size: 15px;
    border-radius: 3px;
}

.un1 {
    border: hidden;
    height: 30px;
    width: 120px;
    background-color: blue;
    color: white;
    border-radius: 4px;
    margin-right: 10px;
}

.un2 {
    border: hidden;
    height: 30px;
    width: 70px;
    background-color: blue;
    color: white;
    border-radius: 4px;
    margin-right: 10px;
}

.un3 {
    border: hidden;
    height: 30px;
    width: 100px;
    background-color: red;
    color: white;
    border-radius: 4px;
}

.deux {
    height: 30px;
    width: 200px;
    background-color: rgb(27, 27, 77);
    color: white;
    padding-left: 20px;
    font-size: 15px;
    border-radius: 3px;

}

.trois {
    height: 30px;
    width: 100px;
    background-color: rgb(27, 27, 77);
    color: white;
    padding-left: 20px;
    font-size: 15px;
    border-radius: 3px;
}

.quatre {
    height: 30px;
    width: 160px;
    background-color: rgb(27, 27, 77);
    color: white;
    padding-left: 20px;
    font-size: 15px;
    border-radius: 3px;
}

.cinq {
    height: 30px;
    width: 200px;
    background-color: rgb(27, 27, 77);
    color: white;
    padding-left: 20px;
    font-size: 15px;
    border-radius: 3px;
}

.six {
    height: 30px;
    width: 600px;
    background-color: rgb(27, 27, 77);
    color: white;
    padding-left: 20px;
    font-size: 15px;
    border-radius: 3px;
}

tbody td {
    height: 40px;
}
</style>
