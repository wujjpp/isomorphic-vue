<template>
<div>
  <h2>这是Test页面</h2>
  <div>Count: {{cnt}}</div>
  <div>Total: {{ tasks.total }}</div>
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
  <div>
    <a href="/test?page=1" @click="changePage(1, $event)">[1]</a>
    <a href="/test?page=2" @click="changePage(2, $event)">[2]</a>
    <a href="/test?page=3" @click="changePage(3, $event)">[3]</a>
    <a href="/test?page=4" @click="changePage(4, $event)">[4]</a>
    <a href="/test?page=5" @click="changePage(5, $event)">[5]</a>
    <a href="/test?page=6" @click="changePage(6, $event)">[6]</a>
    <a href="/test?page=7" @click="changePage(7, $event)">[7]</a>
    <a href="/test?page=8" @click="changePage(8, $event)">[8]</a>
    <a href="/test?page=9" @click="changePage(9, $event)">[9]</a>
    <a href="/test?page=10" @click="changePage(10, $event)">[10]</a>
  </div>
  <div>
    <counter />
  </div>
  <br />
  <img src="./images/a.jpg" />
  <div class="img"></div>
  <span class="glyphicon glyphicon-heart"></span>
</div>
</template>
<script src="./component.js"></script>
<style lang="scss" src="./style.scss"></style>
