const loadFood = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(res => res.json())
    .then(data => displayFood(data.meals))
}
const displayFood =  foods =>{
    const foodsContainer = document.getElementById("food-container");
    foods.forEach(food =>{
        console.log(food)
    })
}

loadFood()