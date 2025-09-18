<script setup lang="js">
  import { api } from '~/lib/api';
  const props = defineProps(['id']);
  const { id } = props;
  const { data } = await useFetch(api.getCategoryPath(id), api.fetch_options);
  // console.log(id);
</script>

<template>
  <Films :films="data.results" name="Category" />
</template>