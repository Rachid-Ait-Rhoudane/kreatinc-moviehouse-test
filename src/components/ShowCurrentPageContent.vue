<script setup>

import { useMovieStore } from '@/stores/movie.js'

let movieStore = useMovieStore()

</script>

<template>

    <div v-show="movieStore.SearchResultsMovies.length === 0">
        <slot></slot>

    </div>

</template>

<style scoped>


</style>