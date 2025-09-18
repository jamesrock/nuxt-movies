<script setup lang="js">
	import { api, genres, dedupeFilms, largest_size_map } from "~/lib/api";
  import { ref, onMounted } from 'vue';
	
	const { id, type = 'genre', name = 'name', sub = false } = defineProps(['id', 'type', 'name', 'sub']);
	let films = ref([]);
	let page = ref(0);
	let pages = ref(0);
	const loadMore = (target) => {
    api.getFilms(type, target, id).then(data => {
      films.value = dedupeFilms([...films.value, ...data.results]);
      pages.value = data.total_pages;
      page.value = target;
    }).catch(error => console.log('Error:', error));
  };
	onMounted(() => {
		loadMore(1);
	});
</script>

<template>
  <div class="films">
    <div class="films-head">
      <h1>{{name}}</h1>
      <h2 v-if="sub">{{sub}}</h2>
    </div>
    <div class="films-body">
      <NuxtLink :to="`/movie/${film.id}`" class="category-item" v-for="film in films" :key="film.id">
        <Poster :path="film.poster_path" :size="largest_size_map.movie" />
        <div class="desc">
          <div class="desc-name">{{film.title}}</div>
        </div>
      </NuxtLink>
    </div>
    <div class="films-foot" v-if="page<pages">
      <button @click="loadMore(page + 1)">Load more</button>
    </div>
  </div>
</template>