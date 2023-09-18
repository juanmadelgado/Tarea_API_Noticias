let API_KEY = '6aaf505a00ee435ab6832b4c4988bc4c';
let country = 'us';
let API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;



fetch(API_URL)
.then((res) => res.json())
.then(data => {
    console.log(data);
});