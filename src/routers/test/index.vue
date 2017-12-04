<template>
<div class="row">
  <div class="col-md-12">
    <h3>1. Test Getter</h3> Count: {{cnt}}</div>

  <div class="col-md-12">
    <h3>2. Test ajax</h3>
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
    Total: {{ tasks.total }}
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

  <div class="col-md-12">
    <h3>3. Test Component</h3>
    <app-counter />
  </div>

  <div class="col-md-12">
    <h3>4. Test image</h3>
    <img src="./images/a.jpg" />
  </div>

  <div class="col-md-12">
    <h3>5. Test background-image</h3>
    <div class="img"></div>
  </div>

  <div class="col-md-12">
    <h3>6. Test icon font</h3>
    <span class="glyphicon glyphicon-heart"></span>
  </div>
</div>
</template>
<script src="./component.js"></script>
<style lang="scss" src="./style.scss"></style>
