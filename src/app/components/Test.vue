<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
const response = await fetch("http://localhost:4321/pets");
const data = await response.json();
</script>
