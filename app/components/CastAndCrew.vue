<script setup lang="js">
  import { api, dedupe, sortByPriority } from '~/lib/api';
  const props = defineProps(['id']);
  const { id } = props;
  const { data } = await useFetch(api.getCreditsPath(id), api.fetch_options);
  // console.log(id, film);
</script>

<template>
  <People :people="dedupe(data.cast, 'cast')" name="Cast" type="cast" />
  <People :people="dedupe(sortByPriority(data.crew, 'job'), 'crew')" name="Crew" type="crew" />
</template>