<script setup lang="js">
  import { api } from '~/lib/api';
  const { data } = await useFetch(api.getComingSoonPath(), api.fetch_options);
</script>

<template>
  <Films :films="data.results" name="Coming Soon" link="/coming" />
</template>