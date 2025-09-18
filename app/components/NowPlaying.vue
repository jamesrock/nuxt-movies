<script setup lang="js">
  import { api } from '~/lib/api';
  const { data } = await useFetch(api.getNowPlayingPath(), api.fetch_options);
</script>

<template>
  <Films :films="data.results" name="Now Playing" link="/playing" />
</template>