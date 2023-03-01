<script setup>

import LatestMoviesPagination from '@/components/LatestMoviesPagination.vue'
import MovieContainer from '@/components/MovieContainer.vue'
import MovieCard from '@/components/MovieCard.vue'
import { useMovieStore } from '@/stores/movie.js'

import { onMounted } from 'vue'

let movieStore = useMovieStore()

onMounted(() => {
    movieStore.getPopularMovies()
    movieStore.getLatestMovies()
})


</script>

<template>

    <div v-show="movieStore.SearchResultsMovies.length === 0">

        <MovieContainer title="Most Popular movies">

            <movie-card 
                    v-for="movie in movieStore.MostPopularMovies" 
                    :key="movie.id"
                    :MovieID="movie.id"
                    :MoviePoster="movie.poster_path"
                    :MovieTitle="movie.original_title.slice(0, 20)" 
                    :MovieRating="movie.vote_average"
            />
            
        </MovieContainer>

        <MovieContainer title="Latest movies">

            <movie-card 
                    v-for="movie in movieStore.LatestMovies" 
                    :key="movie.id"
                    :MovieID="movie.id"
                    :MoviePoster="movie.poster_path"
                    :MovieTitle="movie.original_title.slice(0, 20)" 
                    :MovieRating="movie.vote_average"
            />

            <template #pagination>
                <LatestMoviesPagination />
            </template>

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