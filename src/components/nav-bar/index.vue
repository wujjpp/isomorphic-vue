<template>
<ul>
  <li v-for="item in items">
    <router-link :to="item.name">{{item.text}}</router-link>
  </li>
</ul>
</template>

<style lang="scss" src="./style.scss" scoped></style>
<script src="./component.js"></script>
