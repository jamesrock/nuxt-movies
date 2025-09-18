<script setup lang="js">
  import { api } from '~/lib/api';
  const { data: genres } = await useFetch(api.getGenresPath(), api.fetch_options);
  // console.log(genres);
</script>

<template>
  <main>
    <div class="all-genres">
      <div v-for="genre in genres.genres" :key="genre.id">
        <NuxtLink :to="`/genre/${genre.id}`">{{genre.name}}</NuxtLink>
      </div>
    </div>
  </main>
</template>
