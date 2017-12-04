<template>
<div>
  <div>App Counter:{{counter.count}}</div>
  <div>
    Now: {{counter.now}}
  </div>
  <button @click="inc()" class="btn btn-primary">Inc</button>
  <button @click="dec()" class="btn btn-danger">Dec</button>
</div>
</template>

<style lang="scss" scoped>
button + button {
    margin-left: 5px;
}
</style>

<script src="./component.js"></script>
