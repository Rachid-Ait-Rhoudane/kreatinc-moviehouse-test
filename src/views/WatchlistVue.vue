<script setup>

import ShowCurrentPageContent from '@/components/ShowCurrentPageContent.vue'
import ShowSearchResults from '../components/ShowSearchResults.vue'
import MovieContainer from '@/components/MovieContainer.vue'
import MovieCard from '@/components/MovieCard.vue'
import { useMovieStore } from '@/stores/movie.js'
import { onMounted } from 'vue'

let movieStore = useMovieStore()

onMounted(() => {
    movieStore.WatchlistMovies = []
    movieStore.getWatchlist()
})

</script>

<template>

    <ShowSearchResults />

    <ShowCurrentPageContent>

        <MovieContainer title="Watchlist">

            <movie-card 
                    v-for="movie in movieStore.WatchlistMovies" 
                    :key="movie.id"
                    :MovieID="movie.id"
                    :MoviePoster="movie.poster"
                    :MovieTitle="movie.title.slice(0, 20)" 
                    :MovieRating="movie.rating"
            />

        </MovieContainer>

    </ShowCurrentPageContent>

</template>

<style scoped>


</style>