<script setup>

import { RouterLink } from 'vue-router'
import logo from '@/assets/images/mouviehouse.png'
import { useMovieStore } from '@/stores/movie.js'

let movieStore = useMovieStore()

</script>

<template>

  <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid px-">
            <RouterLink to="/" class="navbar-brand">
              <img id="app_logo" :src="logo" alt="mouvie house logo">
            </RouterLink>
            <button style="background-color: #FF914D;" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/watchlist" style="color: #FF914D" class="nav-link active" href="#"><i class="fa-solid fa-bookmark"></i> Watchlist</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a style="color: #FF914D" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-magnifying-glass"></i> Search
                        </a>
                        <div style="background-color: #FF914D;" class="dropdown-menu my-2 p-4" aria-labelledby="navbarDropdown">
                           <form>
                                <div class="mb-3">
                                    <label for="name" class="form-label text-dark"><strong>Movie name:</strong></label>
                                    <input v-model="movieStore.Name" type="text" class="form-control search-input form-elements">
                                </div>

                                <div class="d-flex flex-wrap justify-content-center gap-2">
                                    <div class="form-check">
                                        <input v-model="movieStore.Genres" class="form-check-input" type="checkbox" value=28 id="action">
                                        <label  class="form-check-label" for="action">
                                            Action
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input v-model="movieStore.Genres" class="form-check-input" type="checkbox" value=12 id="adventure">
                                        <label class="form-check-label" for="adventure">
                                            Adventure
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input v-model="movieStore.Genres" class="form-check-input" type="checkbox" value=35 id="comedy">
                                        <label class="form-check-label" for="comedy">
                                            Comedy
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input v-model="movieStore.Genres" class="form-check-input" type="checkbox" value=27 id="horror">
                                        <label class="form-check-label" for="horror">
                                            Horror
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input v-model="movieStore.Genres" class="form-check-input" type="checkbox" value=878 id="fiction">
                                        <label class="form-check-label" for="fiction">
                                            Science Fiction
                                        </label>
                                    </div>
                                </div>

                                <label for="name" class="form-label text-dark"><strong>Language:</strong></label>
                                <select v-model="movieStore.Language" class="form-select mb-2 search-input form-elements" aria-label="Default select example">
                                    <option value="en">English</option>
                                    <option value="fr">Frensh</option>
                                </select>

                                <button @click="movieStore.search()"  type="button" class="search-button">Search</button>
                                <button @click="movieStore.cancelSearching()"  type="button" class="search-button ms-2">Cancel</button>
                                
                           </form>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

@media screen and (min-width: 990px) 
{
    .search-input{
        width: 500px;
    }
}

#app_logo{
  width: 100px;
  height: 100px;
}

.search-button{
    border: 1px solid black;
    background-color: transparent;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    width: 75px;
    height: 30px;
    color: black;
    text-decoration: none;
}

.search-button:hover{
    background-color: black;
    color: #FF914D;
}

.add-to-watchlist:hover{
    background-color: black;
}

.form-elements{
    background-color: black !important;
    color:#FF914D !important;
    border: 1px solid transparent;
}

</style>
