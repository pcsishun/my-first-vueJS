<template>
  <div id="app">
    <h3 align="center">My first Vue.js</h3>
    <!-- <ul class="nav nav-tabs">
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
    </ul> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
    <br>
    <router-view/>

  </div>
  
</template>

<script>



</script>
 