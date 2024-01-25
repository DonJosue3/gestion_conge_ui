<template>
  <div class="body">
        <div class="body1">
            <h1 class="gestion">GESTION </h1>
            <h1 class="conge"> CONGE</h1>
        </div>
        <div class="body2">
            <div class="box">
                <h1 class="conne">Se Connecter</h1>
                <p class="nom">Nom D'utilisateur</p>
                <input class="input1" type="text" name="" id="" placeholder="tech" />
                <p class="nom1">Mot De Passe</p>
                <input class="input2" type="password" name="" id="" placeholder="..."/>
                <button type="submit" class="connex">Connexion</button>
            </div>
        </div>
    </div>
    </template>
    <script>
    
    </script>
    <style>
    body{
        padding: 0px;
    }

   *{
    box-sizing: border-box;
}
.body {
    margin: 0px 0px 0px 0px;
    width: 1300px;
    height: 700px;
    display: flex;
    flex-direction: row;
    padding: 0px 0px 0px 0px ;
}

.body1 {
    display: flex;
    flex-direction: column;
    width: 270px;
    height: 700px;
    background-color: rgb(7, 7, 67);
    padding-top: 250px;
}

.body2 {
    width: 1200px;
    height: 700px;
    background-color: rgb(252, 251, 251);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
}

.gestion,
.conge {
    font-family: sans-serif;
    color: white;
}

.gestion {
    margin-top: 60px;
    margin-bottom: 9px;
}

.conge {
    margin-top: 0px;
}

.box {
    box-shadow: 0px 0px 10px rgb(72, 71, 71);
    background-color: w;
    height: 400px;
    width: 400px;
    padding-left: 40px;
}

.conne {
    font-weight: 600;
    font-family: sans-serif;
    margin-top: 40px;
    margin-bottom: 40px;
}

.nom {
    font-family: sans-serif;
}
.nom1{
    font-family: sans-serif;
    margin-top: 35px;
}
.input1 {
    padding-left: 10px;
    height: 40px;
    width: 300px;
    border-radius: 4px;
    border: 2px solid grey;
 
}



.input1:focus{
    background-color: rgb(222, 239, 255);
    border: 4px solid blue;

}

.input2{
    padding-left: 10px;
    height: 40px;
    width: 300px;
    border: 2px solid grey;
    border-radius: 4px;
}
.connex{
    height: 40px;
    width: 100px;
    border-radius: 4px;
    color: white;
    background-color: blue;
    border: hidden;
    margin-top: 30px;
}
    </style>
    