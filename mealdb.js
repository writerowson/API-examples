const searchFood = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    // console.log(searchText)
    // searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top w-50" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.idMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 30)}This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = mealId => {
    console.log(mealId)
}