<script setup lang="js">
  import { api, getRole, largest_size_map } from '~/lib/api';
  const props = defineProps(['people', 'name', 'type']);
  const { people, name, tyoe } = props;
</script>

<template>
  <div class="category">
		<div class="category-head">
			<h2>{{name}}</h2>
		</div>
		<div class="category-items">
			<NuxtLink :to="`/person/${person.id}`" class="category-item" v-for="person in people" :key="person.id">
				<Poster :path="person.profile_path" :size="largest_size_map.person" />
				<div class="desc">
					<div class="desc-name">{{person.name}}</div>
					<div class="desc-role">{{getRole(type, person)}}</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>