<template>
<div>
  <h2>这是Test页面</h2>

  <span>Total: {{tasks.total}}</span>
  <table class="table">
    <thead>
      <tr>
        <th>
          ID</th>
        <th>
          Name
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="o in tasks.items">
        <td>{{o.id}}</td>
        <td>{{o.name}}</td>
      </tr>
    </tbody>
  </table>
  <img src="./images/a.jpg" />
  <div class="img"></div>
  <span class="glyphicon glyphicon-heart"></span>
</div>
</template>
<script src="./component.js"></script>
<style lang="scss" src="./style.scss"></style>
