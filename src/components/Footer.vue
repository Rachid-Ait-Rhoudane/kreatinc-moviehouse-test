<script setup>

    import logo from '@/assets/images/mouviehouse.png'

</script>

<template>
    <footer class="text-center text-lg-start bg-dark" style="color:#FF914D;position:relative; bottom: 0;right: 0;left:0;" >
        <div class="container p-4 pb-0">
            <section class="">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Mouvie House</h5>
                        <p>"Discover, watch, and love your favorite movies with MouvieHouse."</p>
                        <p>
                        MouvieHouse is a movie information and watchlist application that allows users to browse, search, and add movies to their personalized watchlist.
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Links</h5>
                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Links</h5>
                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Links</h5>
                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 4</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Links</h5>
                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" style="color:#FF914D;">Link 4</a>
                            </li>
                        </ul>
                    </div>
            </div>
            </section>
            <hr class="mb-4" />
            <section class="mb-4 text-center">
                <a class="social-media" href="#!">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a class="social-media" href="#!">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="social-media" href="#!">
                    <i class="fab fa-google"></i>
                </a>
                <a class="social-media" href="#!">
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="social-media" href="#!">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a class="social-media" href="#">
                    <i class="fab fa-github"></i>
                </a>
            </section>
        </div>
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
            © 2023 Copyright: <a style="color:#FF914D;" href="#">mouvie<img :src="logo" alt="app logo">house.com</a>
        </div>
    </footer>
</template>

<style scoped>

img{
    width: 50px;
    height: 50px;
}
.social-media {
    display: inline-block;
    border: 1px solid #FF914D;
    background-color: transparent;
    margin: 2px;
    color: #FF914D;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    width: 50px;
    height: 25px;
}

.social-media:hover {
    border-color: transparent;
    background-color: #FF914D;
    color: black;
}
</style>
