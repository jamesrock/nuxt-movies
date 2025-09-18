<script setup lang="js">
  import { api, dedupe } from '~/lib/api';
  const props = defineProps(['id']);
  const { id } = props;
  const { data: films } = await useFetch(api.getFilmographyPath(id), api.fetch_options);
  // console.log(id);
</script>

<template>
  <div class="cast-and-crew">
		<Films :films="dedupe(films.cast, 'cast')" name="Cast" credits="cast" />
		<Films :films="dedupe(films.crew, 'crew')" name="Crew" credits="crew" />
	</div>
</template>