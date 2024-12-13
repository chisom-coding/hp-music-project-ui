<script setup lang="ts">
defineProps(['collectionName', 'artwork', 'collectionNameCensored'])
</script>

<template>
  <div class="square">
    <img :src="artwork" :alt="collectionNameCensored" />
    <span class="title">{{ collectionName }}</span>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .square {
    background: white;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  .title {
    color: rgb(69, 67, 67);
    font-weight: 600;
    font-size: small;
  }
}
</style>
