<script setup>

import { useMovieStore } from '@/stores/movie.js'
let movieStore = useMovieStore()



</script>

<template>
    
    <h4 style="color: #FF914D" class="my-4">Credits</h4>
    <hr style="background-color: #FF914D;" class="subtitle" />
    <div class="d-flex flex-wrap">
        <div v-for="actor in movieStore.MovieCast" class="color me-4">
            <div v-if="actor.order < 7">
                <img class="actor rounded-circle" :src="'https://image.tmdb.org/t/p/w500'+actor.profile_path" alt="actore profile picture">
                <p style="width:75px">{{ actor.original_name }}</p>
            </div>
        </div>
    </div>

</template>

<style scoped>

.actor{
    width: 50px;
    height: 50px;
}

.color{
    color: #FF914D;
}

.subtitle{
    width: 150px;
}

</style>