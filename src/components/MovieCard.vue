<script setup>

import { defineProps, onMounted, ref } from 'vue'
import { useMovieStore } from '@/stores/movie.js'

let movieStore = useMovieStore()

let CardButton = ref('<i class="fa-solid fa-bookmark"></i> Add to watchlist')

function getCardButtonForm(MovieID)
{
    if(localStorage.getItem(MovieID) !== null)
    {
      CardButton.value = '<i class="fa-solid fa-trash"></i> Remove'
    }
}

function AddOrRemoveFromWatchlist(MovieID, MoviePoster, MovieRating, MovieTitle)
{
    if(localStorage.getItem(MovieID) === null)
    {
        let movie = {
        id: MovieID,
        poster: MoviePoster,
        rating: MovieRating,
        title: MovieTitle
        }
        localStorage.setItem(MovieID, JSON.stringify(movie))
        CardButton.value = '<i class="fa-solid fa-trash"></i> Remove'
    }
    else
    {
        localStorage.removeItem(MovieID)
        CardButton.value = '<i class="fa-solid fa-bookmark"></i> Add to watchlist'
    }
}


const props = defineProps({
    MovieID: Number,
    MoviePoster: String,
    MovieRating: Number,
    MovieTitle: String
})

onMounted(() => {
    getCardButtonForm(props.MovieID)
})


</script>

<template>

    <div class="card bg-dark m-2" style="width: 14rem;">
        <img :src="'https://image.tmdb.org/t/p/w500'+props.MoviePoster" class="card-img-top" alt="poster">
        <div class="card-body">
            <p class="card-text" style="color: #FF914D"><i class="fa-solid fa-star"></i> <span v-text="props.MovieRating"></span></p>
            <p class="card-text title" style="color: #FF914D" v-text="props.MovieTitle"></p>
            <p><router-link :to="{ path: '/movie', query: { id: props.MovieID } }" style="color: #FF914D">See more</router-link></p>
            <center>
                <button @click="AddOrRemoveFromWatchlist(props.MovieID, props.MoviePoster, props.MovieRating, props.MovieTitle)"
                        class="add-to-watchlist mx-auto" 
                        v-html="CardButton">
                </button>
            </center>
        </div>
    </div>

</template>

<style scoped>

img{
    width: 200px;
    height: 200px;
}
.add-to-watchlist{
    border: 1px solid #FF914D;
    background-color: transparent;
    color: #FF914D;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    width: 150px;
    height: 40px;
}

.title{
    min-height: 50px;
}

.add-to-watchlist:hover{
    background-color: black;
}
</style>