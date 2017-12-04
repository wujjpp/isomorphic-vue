<template>
<div>
  <app-navbar></app-navbar>

  <div class="container">
    <div class="row">
      <div class="col-md-12 content-container">
        <router-view></router-view>
      </div>
    </div>
  </div>

  <app-footer></app-footer>

</div>
</template>

<style lang="scss" scoped>
.content-container {
    margin-top: 66px;
    margin-bottom: 60px;
}
</style>

<script src="./component.js"></script>
