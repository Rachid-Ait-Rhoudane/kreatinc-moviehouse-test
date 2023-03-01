<script setup>

import { useMovieStore } from '@/stores/movie.js'
import MovieCast from './MovieCast.vue';

let movieStore = useMovieStore()

</script>

<template>
    <div class="d-flex flex-wrap">
        <div>
            <img class="poster" :src="'https://image.tmdb.org/t/p/w500'+movieStore.MovieInformations.poster_path" alt="movie poster">
        </div>
        <div class="col mx-4">
                <h4 style="color: #FF914D">Rating</h4>
                <hr style="background-color: #FF914D;" class="subtitle" />
                <span class="color"><i class="fa-solid fa-star"></i> {{ movieStore.MovieInformations.vote_average }}</span>

                <h4 style="color: #FF914D" class="my-4">Overview</h4>
                <hr style="background-color: #FF914D;" class="subtitle" />
                <p style="width: 100%" class="color mt-4">{{ movieStore.MovieInformations.overview }}</p>

                <h4 style="color: #FF914D" class="my-4">Genres</h4>
                <hr style="background-color: #FF914D;" class="subtitle" />
                <div class="d-flex">
                    <p v-for="genre in movieStore.MovieInformations.genres" class="color me-4">
                        {{ genre.name }}
                    </p>
                </div>

                <MovieCast />
        </div>
    </div>
</template>

<style scoped>

.poster{
    width: 100%;
    height: 800px;
}

.color{
    color: #FF914D;
}

.subtitle{
    width: 150px;
}

</style>