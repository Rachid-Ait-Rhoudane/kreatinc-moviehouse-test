<script setup>

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

    <div v-show="movieStore.SearchResultsMovies.length === 0">

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

    </div>

    <div v-show="movieStore.SearchResultsMovies.length !== 0">

        <MovieContainer title="Search results">

            <movie-card 
                    v-for="movie in movieStore.SearchResultsMovies" 
                    :key="movie.id"
                    :MovieID="movie.id"
                    :MoviePoster="movie.poster_path"
                    :MovieTitle="movie.original_title.slice(0, 20)" 
                    :MovieRating="movie.vote_average"
            />

        </MovieContainer>

    </div>

</template>

<style scoped>


</style>