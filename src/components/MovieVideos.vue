<script setup>

import { useMovieStore } from '@/stores/movie.js'
let movieStore = useMovieStore()

</script>

<template>

    <h4 style="color: #FF914D" class="my-4">Trailer</h4>
    <hr style="background-color: #FF914D;" class="subtitle" />
    <div v-for="video in movieStore.MovieVideos">
        <div v-if="video.type === 'Trailer'">
            <center>
                <iframe 
                    class="video"
                    :src="'https://www.youtube.com/embed/'+video.key"
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                >
                </iframe>
            </center>
        </div>
    </div>

</template>

<style scoped>

.video{
    width: 500px;
    height: 400px;
}

.subtitle{
    width: 150px;
}


</style>