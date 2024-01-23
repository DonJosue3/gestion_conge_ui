<template>
 <div>
   <form>
    <input type="text" v-model="username" name="" placeholder="username">
    <input type="password" v-model="password" name="" placeholder="password">
    <button type="submit" v-on:click="performLogin">Login</button>
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
  },
  methods{
    login(){
        
    },
    performLogin(){

    }
  }
 }
</script>
<style scoped>

</style>