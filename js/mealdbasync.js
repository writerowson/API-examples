document.getElementById('error-message').style.display = 'none'

const searchFood = async () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;

    // clear data
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none'

    if (searchText == '') {
        return alert('please put a item name')
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        try {
            const res = await fetch(url);
            const data = await res.json()
            displaySearchResult(data.meals)
        }
        catch (error) {
            console.log(error)
        }

    }
}
const displayerror = error => {
    document.getElementById('error-message').style.display = 'block'
}


const displaySearchResult = meals => {
    console.log(meals)
    const searchResult = document.getElementById('search-result');
    // clear data
    searchResult.textContent = ''
    // -----------or---------
    // searchResult.innerHTML = '' not recommended
    if (meals == null) {
        return alert('Sorry, No result')
    }
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top " alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 30)}This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url)
    const data = await res.json()
    displayMealDetail(data.meals[0]);
    // ----------or---------
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    console.log(meal)
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = ' ';
    // console.log(mealDetails.textContent)
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    mealDetails.appendChild(div)
}