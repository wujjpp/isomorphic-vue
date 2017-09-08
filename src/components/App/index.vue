<template>
<div>
  <img src="./images/logo.png">
  <ul>
    <li>
      <router-link to="/">Hello</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
    <li>
      <router-link to="/test">Test</router-link>
    </li>
  </ul>
  <router-view></router-view>
</div>
</template>
<script src="./component.js"></script>
