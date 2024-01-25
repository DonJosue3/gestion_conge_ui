<template>
<body>
    <div class="card">
        <div class="tete">
          <div class="tete1">
          <h3>Ajouter congé</h3>
        </div>
          <div class="close">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="16" width="16" viewBox="0 0 512 512">
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
          </svg>
        </div>
        </div>
        <div class="id"><p class="id1">Id</p></div>
        <input class="input1" type="text"/>
        <div class="nom"><p class="nom1">Nom</p></div>
        <input class="input2" type="text"/>
        <div class="prenom"><p class="prenom1">Prenom</p></div>
        <input class="input3" type="text"/>
        <div class="age"><p class="age1"></p>Age</div>
        <input class="input4" type="text"/>
        <div class="genre"><p class="genre1">Genre</p></div>
        <input class="input5" type="text"/>
        <button type="submit"><p>Ajouter</p></button>
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
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card{
    height: 550px;
    width: 560px;
    background-color: white;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
}
.close{
  border: 0px solid white;
  height: 19px;
  margin-top: 20px;
  margin-right: 10px;
}
.tete1{
  margin-top: 20px;
  margin-left: 10px;
  font-family: sans-serif;
}
.tete{
  display: flex;
  flex-direction: row;
    align-items: space-between;
    gap: 400px;
    color: white;
    height: 70px;
    width: 559px;
    background-color: rgb(27, 27, 77);
}
.id{
    padding-left: 25px;
    font-family: sans-serif;
    
}
.id1,.nom1,.prenom1,.age1,.genre1{
    margin-bottom: 0px;
}
.input1,.input2,.input3,.input4,.input5{
    margin-top: 0px;
    margin-left: 25px;
    width: 500px;
    height: 40px;
}
.nom,.prenom,.age,.genre{
    padding-left: 25px;
    font-family: sans-serif;
}

button{
    margin-top: 20px;
    margin-left:25px ;
    height: 40px;
    width: 70px;
    background-color: blue;
    color: white;
    border: hidden;
}
</style>