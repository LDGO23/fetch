<template>
  <div class="data">
    <ul class="data-list">
      <crud/>
    </ul>
  </div>
</template>

<script setup lang="ts">
import crud from '@/components/comps/crud.vue';
</script>

<style scoped>
.data {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
  
  