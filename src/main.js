async function getTrendingMovies(){
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();

    const movies = data.results;
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

async function getExploreMovies(){
    const res = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=' + API_KEY);
    const data = await res.json();

    const movies = data.results;
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
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY + '&language=es');
    const data = await res.json();

    const categories = data.genres;
    categories.forEach(category => {
        const categoriesPreviewList = document.querySelector('#categories-preview .categories-select')
        const categoryContainer = document.createElement('div');

        categoryContainer.classList.add('category-container');
        
        const categoryTitle = document.createElement('p');
        categoryTitle.classList.add('category-title')

     
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