<script setup lang="js">
  import { api, dedupe, sortByPriority } from '~/lib/api';
  const props = defineProps(['id']);
  const { id } = props;
  const { data } = await useFetch(api.getRecommendationsPath(id), api.fetch_options);
  // console.log(id, film);
</script>

<template>
  <Films :films="data.results" name="Recommendations" :link="`/recs/${id}`" />
</template>