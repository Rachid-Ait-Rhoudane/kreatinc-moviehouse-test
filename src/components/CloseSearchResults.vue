<script setup>

import { useMovieStore } from '@/stores/movie.js'

let movieStore = useMovieStore()

</script>

<template>
   <button @click="movieStore.cancelSearching()" type="button" class="close"><i class="fa-sharp fa-solid fa-xmark"></i></button>
</template>

<style scoped>
.close{
    color: #FF914D;
    background-color: black;
}
</style>