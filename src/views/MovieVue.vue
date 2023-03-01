<script setup>

import ShowSearchResults from '../components/ShowSearchResults.vue'

import MovieInformations from '@/components/MovieInformations.vue'
import MovieVideos from '../components/MovieVideos.vue'
import MovieImages from '../components/MovieImages.vue'
import MovieReviews from '../components/MovieReviews.vue'

import { useMovieStore } from '@/stores/movie.js'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

let movieStore = useMovieStore()

const router = useRouter()
const id = router.currentRoute.value.query.id

onMounted(() => {
    movieStore.MovieID = id
    movieStore.getMovie()
    movieStore.getCast()
    movieStore.getVideos()
    movieStore.getImages()
    movieStore.getReviews()
})

</script>

<template>

    <div v-show="movieStore.SearchResultsMovies.length === 0">

        <section style="border: 1px solid #FF914D;" class="container p-4 m-4 mx-auto">

            <h1 style="color: #FF914D" v-text="movieStore.MovieInformations.original_title"></h1>

            <hr style="background-color: #FF914D; height: 5px;" class="w-50" />

            <MovieInformations />

            <div>

                <MovieVideos />

                <MovieImages />

                <MovieReviews />

            </div>

        </section>

    </div>

    <ShowSearchResults />

</template>

<style scoped>


</style>