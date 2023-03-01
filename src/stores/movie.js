import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', () => {

  var SearchResultsMovies = ref([])
  var Name = ref('')
  var Genres = ref([])
  var Language = ref('en')
  var PageNumber = ref(localStorage.getItem('page_number') ?? 1)
  var MostPopularMovies = ref([])
  var LatestMovies = ref([])
  var WatchlistMovies = ref([])
  var MovieID = ref(0)
  var MovieInformations = ref({})
  var MovieCast = ref([])
  var MovieVideos = ref([])
  var MovieImages = ref([])
  var MovieReviews = ref([])

  function getMovie()
  {
    fetch('https://api.themoviedb.org/3/movie/'+MovieID.value+'?api_key=0d078873ce207e43428a3f84e014896e')
    .then(response => response.json())
    .then(response => {
      MovieInformations.value =  response
    })
  }

  async function getCast()
  {
    await fetch('https://api.themoviedb.org/3/movie/'+MovieID.value+'/credits?api_key=0d078873ce207e43428a3f84e014896e')
    .then(response => response.json())
    .then(response => {
       MovieCast.value =  response.cast
    })
  }

  async function getVideos()
  {
    await fetch('https://api.themoviedb.org/3/movie/'+MovieID.value+'/videos?api_key=0d078873ce207e43428a3f84e014896e')
    .then(response => response.json())
    .then(response => {
       MovieVideos.value =  response.results
    })
  }

  async function getImages()
  {
    await fetch('https://api.themoviedb.org/3/movie/'+MovieID.value+'/images?api_key=0d078873ce207e43428a3f84e014896e')
    .then(response => response.json())
    .then(response => {

            MovieImages.value =  response.backdrops

    })
  }

  async function getReviews()
  {
    await fetch('https://api.themoviedb.org/3/movie/'+MovieID.value+'/reviews?api_key=0d078873ce207e43428a3f84e014896e')
    .then(response => response.json())
    .then(response => {
       MovieReviews.value =  response.results
    })

  }

  function nextPage()
  {
    if(PageNumber.value < 10)
    {
      localStorage.setItem('page_number', ++PageNumber.value)
      getLatestMovies()
    }
  }

  function priviousPage()
  {
    if(PageNumber.value > 1)
    {
      localStorage.setItem('page_number', --PageNumber.value)
      getLatestMovies()
    }
  }

  function getPopularMovies()
  {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0d078873ce207e43428a3f84e014896e')
    .then(response => response.json())
    .then(response => {

      MostPopularMovies.value = response.results

    })
  }

  function getLatestMovies()
  {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=0d078873ce207e43428a3f84e014896e&page='+PageNumber.value)
    .then(response => response.json())
    .then(response => {
      LatestMovies.value = response.results
    })
  }

  async function search()
  {

    console.log(Genres.value);

    for(let i=0; i < Genres.value.length; i++)
    {
      Genres.value[i]= (Number(Genres.value[i]))
    }

    await fetch('https://api.themoviedb.org/3/search/movie?api_key=0d078873ce207e43428a3f84e014896e&query='+Name.value)
    .then(response => response.json())
    .then(response => {

      SearchResultsMovies.value =  response.results.filter(obj => {
            
            return Genres.value.every(elem => obj.genre_ids.includes(elem) && obj.original_language === Language.value);
        });
    })

  }

  function cancelSearching()
  {
     SearchResultsMovies.value = []
  }

  function getWatchlist()
  {
    for (let i = 0; i < localStorage.length; i++) 
    {
        const key = localStorage.key(i)
        if(key !== 'page_number')
        {
          WatchlistMovies.value.push(JSON.parse(localStorage.getItem(key)))
        }
    }
  }

  return { 
    MostPopularMovies,
    LatestMovies, 
    getPopularMovies, 
    getLatestMovies, 
    PageNumber, 
    nextPage, 
    priviousPage, 
    Name, 
    Genres, 
    Language,
    SearchResultsMovies,
    search,
    cancelSearching,
    WatchlistMovies,
    getWatchlist,
    MovieID,
    MovieInformations,
    getMovie,
    MovieCast,
    getCast,
    MovieVideos,
    getVideos,
    MovieImages,
    getImages,
    MovieReviews,
    getReviews
  }

})
