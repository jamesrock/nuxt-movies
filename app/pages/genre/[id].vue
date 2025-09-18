<script setup lang="js">
  import { genres } from '~/lib/api';
  const { params } = useRoute();
  const { id } = params;
</script>

<template>
  <main>
    <FilmGrid :id="id" :name="genres[id]" />
  </main>
</template>
