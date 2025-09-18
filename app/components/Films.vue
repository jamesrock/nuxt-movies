<script setup lang="js">
  import { largest_size_map, getRole } from '~/lib/api';
  const props = defineProps(['films', 'link', 'credits', 'name']);
  const { films, link, credits, name = 'name' } = props;
  // console.log(films);
</script>

<template>
  <div class="category" v-if="films.length">
		<div class="category-head">
			<h2>{{name}}</h2>
			<a :href="link" v-if="link">view all</a>
		</div>
		<div class="category-items">
			<NuxtLink :to="`/movie/${film.id}`" class="category-item" v-for="film in films" :key="film.id">
				<Poster :path="film.poster_path" :size="largest_size_map.movie" />
				<div class="desc">
					<div class="desc-name">{{film.title}}</div>
					<div class="desc-role" v-if="credits">{{getRole(credits, film)}}</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>