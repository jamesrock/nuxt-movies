<script setup lang="js">
  import { api } from '~/lib/api';
  const props = defineProps(['path', 'size']);
  const { path, size = 'original' } = props;
  // console.log('path', path);
</script>

<template>
  <div class="poster-crop">
    <img class="poster" :src="api.getPosterPath(path, size)" alt="" />
  </div>
</template>