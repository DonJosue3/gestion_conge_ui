<template>
 <div>
   <form>
    <input type="text" v-model="username" name="" placeholder="username">
    <input type="password" v-model="password" name="" placeholder="password">
    <button type="submit" class="connex" v-on:click="performLogin">Login</button>
   </form>
   <p>Username = {{ username }} </p>
   <p>Password = {{ password }}</p>
 </div>
</template>
<script>
 export default{
  data(){
    return{
        username:"",
        password:""
    }
  }
  }
 
</script>
<style scoped>

</style>