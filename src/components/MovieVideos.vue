<script setup>

import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { onMounted } from 'vue';

import { useMovieStore } from '@/stores/movie.js'
let movieStore = useMovieStore()

onMounted(() => {

    const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    });

})

</script>

<template>

    <h4 style="color: #FF914D" class="my-4">Videos ({{ movieStore.MovieVideos.length }})</h4>
    <hr style="background-color: #FF914D;" class="subtitle" />

    <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide slide" v-for="video in movieStore.MovieVideos">
                <iframe 
                    class="video"
                    :src="'https://www.youtube.com/embed/'+video.key"
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

    </div>

</template>

<style scoped>

.subtitle{
    width: 150px;
}

.swiper {
  width: 500px;
  height: 300px;
}
.video{
    width: 500px;
    height: 300px;
}

</style>