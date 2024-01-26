const api=axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
    'Content-Type': 'application/json;charset=utf-8'
    },
    params: {
        'api_key': API_KEY,
    },
});


async function getTrendingMovies(){
    const {data} = await api('trending/movie/week');
    const movies = data.movies;

    movies.forEach(movie => {
        const trendingMovies = document.querySelector('#trendingPreviewMovies')
        const movieContainer = document.createElement('div');
        const slider = document.querySelector('#slider');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);

        movieImg.setAttribute('src',
        'https://image.tmdb.org/t/p/w300' + movie.poster_path,);

        
        movieContainer.appendChild(movieImg);
        slider.appendChild(movieContainer);
        trendingMovies.appendChild(slider);
        
        

    });   
}
// trending/all/week
async function getExploreMovies(){
    const {data} = await api;
    const movies = data.movies;

    movies.forEach(movie => {
        const exploreMovies = document.querySelector('#explorePreviewMovies')
        const movieContainer = document.createElement('div');
        const slider = document.querySelector('#slider');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);

        movieImg.setAttribute('src',
        'https://image.tmdb.org/t/p/w300' + movie.poster_path,);

        
        movieContainer.appendChild(movieImg);
        slider.appendChild(movieContainer);
        exploreMovies.appendChild(slider);
    });  
}

async function getCatergoriesPreview(){
    const {data} = await api('genre/movie/list'+ '&language=es');
    const categories = data.genres;
    
    categories.forEach(category => {
        const categoriesPreviewList = document.querySelector('#categories-preview .categories-select')
        const categoryContainer = document.createElement('div');

        categoryContainer.classList.add('category-container');

        
        
        const categoryTitle = document.createElement('p');
        categoryTitle.classList.add('category-title')

        // const checkbox=document.querySelector('input[name=checkbox]');
        // checkbox.id='micheckbox';
        // label = document.createElement('label');
        // label.id='milabel';
        // label.htmlFor='micheckbox';
        // checkbox.parentNode.appendChild(label);
        // p.appendChild(label);   

     
        categoryTitle.setAttribute('id', 'id' + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesPreviewList.appendChild(categoryContainer);

        // movieImg.setAttribute('src',
        // 'https://image.tmdb.org/t/p/w300' + movie.poster_path,);

        
        
        
        

    });   
}



getExploreMovies();
getTrendingMovies();
getCatergoriesPreview();