<script setup>

import { useMovieStore } from '@/stores/movie.js'

let movieStore = useMovieStore()

</script>

<template>
<div class="mt-4 d-flex justify-content-between">
    <button class="arrow" @click="movieStore.priviousPage()"><i class="fa-solid fa-angles-left"></i></button>
        <span id="page-number">{{ movieStore.PageNumber }}</span>
    <button class="arrow" @click="movieStore.nextPage()"><i class="fa-solid fa-angles-right"></i></button> 
</div>
</template>

<style scoped>

#page-number{
    color: #FF914D;
}

.arrow {
    display: inline-block;
    border: 1px solid #FF914D;
    background-color: transparent;
    margin: 2px;
    color: #FF914D;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    width: 50px;
    height: 30px;
}

.arrow:hover {
    border-color: transparent;
    background-color: #FF914D;
    color: black;
}

</style>