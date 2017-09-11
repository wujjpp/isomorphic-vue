<template>
<div class="hello">
  <h2>这是About页面</h2>
  <div>
    {{ item.name }}
  </div>
  <div>
    {{ localComputed }}
  </div>
  <div>
    {{ completedTaskCount }}
  </div>
  <div>
    {{ doneCount }}
  </div>
  <button @click="change">Change</button>
</div>
</template>
<script src="./component.js"></script>
<style lang="scss" scoped src="./style.scss"></style>
