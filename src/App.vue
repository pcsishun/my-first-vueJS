<template>
  <div id="app">
    <h3 align="center">My first Vue.js</h3>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#/image">Images</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/shop">Shop</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/models">Models</a>
      </li>
       <li class="nav-item" style="margin-left: 70%; ">
        <a class="nav-link" href="#/login">Login</a>
      </li>   
    </ul>
    <br>
    <router-view/>

  </div>
  
</template>

<script>



</script>
 