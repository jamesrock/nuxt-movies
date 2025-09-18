<script setup lang="js">
  import { api, getRole, largest_size_map } from '~/lib/api';
  const props = defineProps(['genres']);
  const { genres } = props;
</script>

<template>
  <div class="genres">
    <NuxtLink :to="`/genre/${genre.id}`" v-for="genre in genres" :key="genre.id">{{genre.name}}</NuxtLink>
  </div>
</template>