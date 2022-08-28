const loadFood = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
      .then(res => res.json())
      .then(data => displayFood(data.meals));
}
const displayFood =  foods =>{
    const foodsContainer = document.getElementById("food-container");
    foodsContainer.innerText = '';
    foods.forEach(food =>{
        console.log(food)
        const foodDiv = document.createElement('div');
        foodDiv.classList.add('col');
        foodDiv.innerHTML = `
        <div onclick="loadFoodDetalis(${food.idMeal})" class="card">
            <img src="${
              food.strMealThumb
            }" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        foodsContainer.appendChild(foodDiv);
    })
}
const searchFood = () =>{
    const searchField = document.getElementById("search-field");
    const searchText= searchField.value;
    searchField.value = '';
    loadFood(searchText);
}


const loadFoodDetalis = (idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayFoodDetalis(data.meals[0]));
}

const displayFoodDetalis = food =>{
    const detailContainer = document.getElementById("detail-container");
    detailContainer.innerHTML = '';
    const foodDiv = document.createElement('div');
    foodDiv.classList.add("card");
    foodDiv.innerHTML = `
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    detailContainer.appendChild(foodDiv)
}

loadFood('')