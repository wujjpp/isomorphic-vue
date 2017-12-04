<template>
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Isomorphic Vue</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li>
          <router-link :to="{ path: '/'}" exact>Home</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/about'}">About</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/test'}">Test</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
