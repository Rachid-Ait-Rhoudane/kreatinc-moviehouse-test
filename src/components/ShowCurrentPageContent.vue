<script setup>

import { useMovieStore } from '@/stores/movie.js'

let movieStore = useMovieStore()

</script>

<template>

    <slot></slot>

</template>

<style scoped>


</style>