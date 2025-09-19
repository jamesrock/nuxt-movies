<script setup lang="js">
  import { api, toTime, getRatingClass, floorRating } from '~/lib/api';
  const { params } = useRoute();
  const { id } = params;
  const { data: film } = await useFetch(api.getFilmPath(id), api.fetch_options);
</script>

<template>
  <main>
    <div class="film">
      <div class="film-head">
        <div class="film-head-top">
          <h1>{{film.title}}</h1>
          <div class="duration">{{toTime(film.runtime)}}</div>
          <Genres :genres="film.genres" />
        </div>
        <div class="film-head-bottom">
          <div :class="`rating ${getRatingClass(film.vote_average ?? 0)}`">{{floorRating(film.vote_average)}}</div>
        </div>
      </div>
      <Poster :path="film.poster_path" />
      <p class="plot">{{film.overview}}</p>
      <CastAndCrew :id="film.id" />
      <Recommendations :id="film.id" />
    </div>
  </main>
</template>
