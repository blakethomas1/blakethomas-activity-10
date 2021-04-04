// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import 'bootstrap'

// JavaScript

//TODO

import { movies } from './movies (1).js'

let featured_movie = document.querySelector('.featured')
for(let m of movies){
    let movie_thumbnail = document.getElementById('m' + m.id)
    movie_thumbnail.innerHTML = `
    <img src="${m.poster}">
    `

    movie_thumbnail.onclick = function(){
        selectMovie(m)
    }
}

function selectMovie(m){
    featured_movie.innerHTML = `
    <img src="${m.poster}" style="float: left;">
    <h1>${m.title}</h1>
    <p>${m.plot}</p>
    <p style="font-weight: bold;">Year: ${m.year}</p>
    <p style="font-weight: bold;">Rated: ${m.rated}</p>
    <p style="font-weight: bold;">Genre: ${m.Genre}</p>
    <p style="font-weight: bold;">Rating: ${m.rating}</p>
    <p style="font-weight: bold;">Votes: ${m.votes}</p>
    <p style="font-weight: bold;">IMDBID: ${m.imdbID}</p>
    `
}

function searchMovies(event){
    if(event){
        event.preventDefault()
    }

    let input = document.querySelector('[type="search"]').value || ""
    for(let m of movies){
        let movie_thumbnail = document.getElementById('m' + m.id)
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
           // movie_thumb.classList.add('hidden')
           movie_thumbnail.style.display = 'none'
        }
        else{
            //movie_thumb.classList.remove('hidden')
            movie_thumbnail.style.display = 'block'
        }
    }

}

document.querySelector('button').onclick = searchMovies
document.querySelector('[type="search"]').onsearch = searchMovies
document.forms[0].addEventListener('submit', searchMovies, false)

