<script setup lang="js">
  import { api } from '~/lib/api';
  const { params } = useRoute();
  const { id } = params;
  const { data: film } = await useFetch(api.getFilmPath(id), api.fetch_options);
  // console.log(id, film);
</script>

<template>
  <main>
    <FilmGrid :id="film.id" type="recs" name="Recommendations" :sub="`based on ${film.title}`" />
  </main>
</template>
