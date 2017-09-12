<template>
<div>
  <div>App Counter:{{counter.count}}</div>
  <div>
    Now: {{counter.now}}
  </div>
  <button @click="inc()">+</button><button @click="dec()">-</button>
</div>
</template>

<script src="./component.js"></script>
