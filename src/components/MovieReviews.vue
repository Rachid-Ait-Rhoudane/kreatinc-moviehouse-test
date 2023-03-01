<script setup>

import { useMovieStore } from '@/stores/movie.js'
let movieStore = useMovieStore()

</script>

<template>
    <h4 style="color: #FF914D" class="my-4">Reviews</h4>
    <hr style="background-color: #FF914D;" class="subtitle" />
    <div v-for="review in movieStore.MovieReviews">
        <div>
            <div class="d-flex">
                <img class="rounded-circle author me-2" :src="'https://image.tmdb.org/t/p/w500'+review.author_details.avatar_path" alt="author">
                <div>
                    <span class="color">{{ review.author }}</span><br>
                    <span class="color"><i v-if="review.author_details.rating !== null" class="fa-solid fa-star"></i> {{ review.author_details.rating }}</span>
                </div>
            </div>
            <hr style="background-color: #FF914D;" class="subtitle" />
            <p class="color">
                {{ review.content }}
            </p>
        </div>
    </div>
</template>

<style scoped>

.subtitle{
    width: 150px;
}

.color{
    color: #FF914D;
}

.author{
    width: 50px;
    height: 50px;
}

</style>