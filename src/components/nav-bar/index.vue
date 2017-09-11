<template>
<ul>
  <li v-for="item in items">
    <router-link :to="item.name">{{item.text}}</router-link>
  </li>
</ul>
</template>
<script src="./component.js"></script>
