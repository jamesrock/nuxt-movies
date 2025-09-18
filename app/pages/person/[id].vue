<script setup lang="js">
  import { api } from '~/lib/api';
  const { params } = useRoute();
  const { id } = params;
  const { data: person } = await useFetch(api.getPersonPath(id), api.fetch_options);
  // console.log(id, film);
</script>

<template>
  <main>
    <div class="person">
      <h1>{{person.name}}</h1>
      <Poster :path="person.profile_path" />
      <p class="bio">{{person.biography}}</p>
      <Filmography :id="person.id" />
    </div>
  </main>
</template>
