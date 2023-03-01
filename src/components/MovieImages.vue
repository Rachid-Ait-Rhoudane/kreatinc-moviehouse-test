<script setup>

import { useMovieStore } from '@/stores/movie.js'
let movieStore = useMovieStore()

</script>

<template>

    <h4 style="color: #FF914D" class="my-4">Images</h4>
        <hr style="background-color: #FF914D;" class="subtitle" />
        <div class="d-flex flex-wrap justify-content-center">
        <div v-for="image in movieStore.MovieImages">
            <img class="image me-2 my-2" :src="'https://image.tmdb.org/t/p/w500'+image.file_path" alt="image">
        </div>
    </div>

</template>

<style scoped>

.image{
    width: 150px;
}

.subtitle{
    width: 150px;
}


</style>