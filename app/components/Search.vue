<script setup lang="js">
  import { api, addProp, sortByProp, filterByMatch, media_type_name, media_type_profile_path, largest_size_map } from '~/lib/api';
  import { ref, onMounted } from 'vue';
  
  const query = defineModel();
  let items = ref([]);
  const cache = {};
  const runSearch = () => {
    if(query.value.length === 0) {
      clearSearch();
      return;
    };
    if(cache[query.value]) {
      items = cache[query.value];
      return;
    };
    api.search(query.value).then(data => {
      cache[query.value] = sortByProp(filterByMatch([...addProp(data[0].results, 'media_type', 'movie'), ...addProp(data[1].results, 'media_type', 'person')], query.value), 'popularity');
      items.value = cache[query.value];
    }).catch(error => console.log('Error:', error));
  };
  const clearSearch = () => {
    query.value = '';
    items.value = [];
  };
</script>

<template>
  <div class="search">
    <div class="search-body">
      <input type="search" placeholder="Search film, actor, director" v-model="query" @input="runSearch" />
      <div class="search-results">
        <NuxtLink :to="`/${item.media_type}/${item.id}`" class="search-results-item" v-for="item in items" :key="item.id" @click="clearSearch">
          <div class="poster-wrap">
            <Poster :path="item[media_type_profile_path[item.media_type]]" :size="largest_size_map[item.media_type]" />
          </div>
          <div>{{item[media_type_name[item.media_type]]}}</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>