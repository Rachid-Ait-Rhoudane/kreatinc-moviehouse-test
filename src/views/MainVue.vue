<script setup>

import ShowCurrentPageContent from '@/components/ShowCurrentPageContent.vue'
import LatestMoviesPagination from '@/components/LatestMoviesPagination.vue'
import ShowSearchResults from '../components/ShowSearchResults.vue'
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

    <ShowSearchResults />
    
    <ShowCurrentPageContent>

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

    </ShowCurrentPageContent>

</template>

<style scoped>

</style>