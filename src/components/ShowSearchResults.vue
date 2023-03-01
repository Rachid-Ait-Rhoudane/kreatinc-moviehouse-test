<script setup>

import MovieContainer from '@/components/MovieContainer.vue'
import MovieCard from '@/components/MovieCard.vue'
import { useMovieStore } from '@/stores/movie.js'

let movieStore = useMovieStore()

</script>

<template>
    
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