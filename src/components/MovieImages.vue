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

    <h4 style="color: #FF914D" class="my-4">Images ({{ movieStore.MovieImages.length }})</h4>
    <hr style="background-color: #FF914D;" class="subtitle" />
    <div class="swiper">
    <!-- Additional required wrapper -->

        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide slide" v-for="image in movieStore.MovieImages">
            <img :src="'https://image.tmdb.org/t/p/w500'+image.file_path" alt="image">
            </div>
        </div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

    </div>

</template>

<style scoped>

.image{
    width: 150px;
}

.subtitle{
    width: 150px;
}

.swiper {
  width: 500px;
  height: 300px;
}

</style>