<script setup lang="js">
  import { media_type_profile_path, largest_size_map, media_type_name } from '~/lib/api';
  // const props = defineProps(['films', 'link', 'credits', 'name']);
  // const { films, link, credits, name = 'name' } = props;
  // console.log(films);
  const items = [];
</script>

<template>
  <div class="search">
    <div class="search-body">
      <input type="search" placeholder="Search film, actor, director" />
      <div class="search-results">
        <NuxtLink :to="`/${item.media_type}/${item.id}`" class="search-results-item" v-for="item in items">
          <div class="poster-wrap">
            <Poster :path="item[media_type_profile_path[item.media_type]]" :size="largest_size_map[item.media_type]" />
          </div>
          <div>{item[media_type_name[item.media_type]]}</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>