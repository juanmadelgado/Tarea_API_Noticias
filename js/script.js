const API_KEY = '6aaf505a00ee435ab6832b4c4988bc4c';
let categorySelected = 'general';
let API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${categorySelected}&apiKey=${API_KEY}`;

const container = document.getElementById('news');

let btnGeneral = document.getElementById('general');
let btnEntertainment = document.getElementById('entertainment');
let btnTechnology = document.getElementById('technology');
let btnBussiness = document.getElementById('business');
let btnHealth = document.getElementById('health');
let btnScience = document.getElementById('science');
let btnSports = document.getElementById('sports');

function getDATA(){
    try{
        fetch(API_URL)
    .then((res) => res.json())
      .then(data => {
         console.log(data);
         showNews(data);
        })
    } catch (error){
        console.error("error fetching data", error)
    }
};


function showNews(data){
    let news = (data.articles);
    news.map(number => {
        container.innerHTML += `
        <br>
        <img style="max-width:800px" src=${number.urlToImage} href=${number.url}><br>
        <h1>${number.title}</h1>
        <h2>${number.description}</h2>
        <h3>${number.publishedAt}</h2>
        `
    })
};

function updateAndFetchData() {
    API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${categorySelected}&apiKey=${API_KEY}`;
    container.innerHTML = ''; // Clear the existing articles
    getDATA();
}


//Botones para seleccionar la categoria de las noticias
btnGeneral.addEventListener('click', function () {
    categorySelected = 'general';
    updateAndFetchData();
});
btnEntertainment.addEventListener('click', function () {
    categorySelected = 'entertainment';
    updateAndFetchData();
});
btnTechnology.addEventListener('click', function () {
    categorySelected = 'technology';
    updateAndFetchData();
});
btnBussiness.addEventListener('click', function () {
    categorySelected = 'business';
    updateAndFetchData();
});
btnHealth.addEventListener('click', function () {
    categorySelected = 'health';
    updateAndFetchData();
});
btnSports.addEventListener('click', function () {
    categorySelected = 'sports';
    updateAndFetchData();
});
btnScience.addEventListener('click', function () {
    categorySelected = 'science';
    updateAndFetchData();
});


document.addEventListener("DOMContentLoaded", function(){
    getDATA();
})