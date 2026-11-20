
// variables
var recipes = [

    // 1. Smash Burger
    {
        rating: 4.8,
        reviews: 2000,
        PrepTime: 20,
        CookTime: 15,
        Servings: 2,
        imgUrl: "./images/Smash-Burgers-3.jpg",
        difficulty: "Easy",
        cuisine: "American",
        title: "Smash Burger",
        description: "A delicious American smash burger with crispy beef patties, melted cheese, fresh onions, and pickles.",

        ingredients: [
            "400g ground beef (80/20 chuck)",
            "4 slices American cheese",
            "2 brioche burger buns",
            "2 tablespoons butter",
            "1/2 cup dill pickle slices",
            "1/2 small white onion, sliced",
            "3 tablespoons mayonnaise",
            "1 tablespoon ketchup",
            "Salt and black pepper"
        ],

        instructions: [
            "Preheat a skillet over medium-high heat.",
            "Divide the ground beef into small balls.",
            "Place beef balls on the hot skillet and smash them flat.",
            "Season with salt and pepper and cook for 2-3 minutes.",
            "Flip the patties and add American cheese.",
            "Toast the buns, add sauce, pickles, onions, and burger patties."
        ],

        nutrition: {
            calories: "740 kcal",
            fat: "45g",
            carbohydrates: "62g",
            protein: "32g",
            fiber: "4g",
            Sodium: "1120mg"
        },

        cheftips: [
            "Use ground beef with 80/20 fat ratio for juicy burgers.",
            "Don't press the patties after flipping.",
            "Use a very hot skillet to get crispy edges.",
            "Toast the buns with butter for extra flavor."
        ],

        isOverTime: function () {
            return this.PrepTime > 40;
        }
    },


    // 2. Pad Thai
    {
        rating: 4.9,
        reviews: 1845,
        PrepTime: 50,
        CookTime: 15,
        Servings: 2,
        imgUrl: "../images/images (2).jpg",
        difficulty: "Intermediate",
        cuisine: "Asian",
        title: "Pad Thai",
        description: "Popular Thai stir-fried rice noodles with shrimp, eggs, crunchy peanuts, and a delicious sweet and sour sauce.",

        ingredients: [
            "200g rice noodles",
            "200g shrimp, peeled",
            "2 eggs",
            "3 tablespoons tamarind paste",
            "2 tablespoons fish sauce",
            "1 tablespoon palm sugar",
            "1 cup bean sprouts",
            "Crushed peanuts",
            "Lime wedges and fresh cilantro"
        ],

        instructions: [
            "Soak rice noodles in warm water until soft.",
            "Mix tamarind paste, fish sauce, and palm sugar.",
            "Heat oil in a wok and cook the shrimp until pink.",
            "Add eggs and scramble them gently.",
            "Add noodles and sauce, then stir-fry everything together.",
            "Add bean sprouts and peanuts and serve with lime."
        ],

        nutrition: {
            calories: "540 kcal",
            fat: "16g",
            carbohydrates: "62g",
            protein: "32g",
            fiber: "4g",
            Sodium: "1120mg"
        },

        cheftips: [
            "Don't oversoak noodles or they will become mushy.",
            "Cook on high heat for authentic wok flavor.",
            "Balance sweet, sour, and salty flavors.",
            "Prepare all ingredients before starting to cook."
        ],

        isOverTime: function () {
            return this.PrepTime > 40;
        }
    },


    // 3. Margherita Pizza
    {
        rating: 4.7,
        reviews: 1560,
        PrepTime: 25,
        CookTime: 15,
        Servings: 4,
        imgUrl: "./images/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.jpg",
        difficulty: "Easy",
        cuisine: "Italian",
        title: "Margherita Pizza",
        description: "A classic Italian pizza topped with fresh tomato sauce, creamy mozzarella cheese, and fragrant basil leaves.",

        ingredients: [
            "1 pizza dough",
            "1/2 cup tomato sauce",
            "200g fresh mozzarella cheese",
            "Fresh basil leaves",
            "2 tablespoons olive oil",
            "1 teaspoon dried oregano",
            "1 garlic clove, minced",
            "Salt and black pepper"
        ],

        instructions: [
            "Preheat the oven to 220°C.",
            "Roll out the pizza dough into a round shape.",
            "Spread tomato sauce evenly over the dough.",
            "Add mozzarella cheese and fresh basil leaves.",
            "Drizzle with olive oil and sprinkle oregano.",
            "Bake for 12-15 minutes until the crust is golden."
        ],

        nutrition: {
            calories: "285 kcal",
            fat: "11g",
            carbohydrates: "36g",
            protein: "13g",
            fiber: "2g",
            Sodium: "640mg"
        },

        cheftips: [
            "Use fresh mozzarella for the best texture.",
            "Preheat your oven before baking the pizza.",
            "Avoid adding too much tomato sauce.",
            "Add fresh basil after baking for better flavor."
        ],

        isOverTime: function () {
            return this.PrepTime > 40;
        }
    },


    // 4. Creamy Alfredo Pasta
    {
        rating: 4.9,
        reviews: 2130,
        PrepTime: 60,
        CookTime: 20,
        Servings: 3,
        imgUrl: "./images/One-Pot-Chicken-Alfredo-2.webp",
        difficulty: "Easy",
        cuisine: "Italian",
        title: "Creamy Alfredo Pasta",
        description: "Rich and creamy Alfredo pasta made with tender fettuccine, parmesan cheese, garlic, and a smooth buttery sauce.",

        ingredients: [
            "250g fettuccine pasta",
            "1 cup heavy cream",
            "1/2 cup grated parmesan cheese",
            "2 tablespoons butter",
            "3 garlic cloves, minced",
            "1 tablespoon olive oil",
            "1/2 teaspoon black pepper",
            "Salt to taste",
            "Fresh parsley"
        ],

        instructions: [
            "Boil pasta in salted water until al dente.",
            "Melt butter in a pan over medium heat.",
            "Add minced garlic and cook until fragrant.",
            "Pour in heavy cream and stir gently.",
            "Add parmesan cheese and black pepper.",
            "Add cooked pasta and mix until coated with sauce."
        ],

        nutrition: {
            calories: "620 kcal",
            fat: "28g",
            carbohydrates: "72g",
            protein: "21g",
            fiber: "3g",
            Sodium: "780mg"
        },

        cheftips: [
            "Save some pasta water to adjust the sauce consistency.",
            "Use freshly grated parmesan cheese.",
            "Cook garlic gently to avoid burning it.",
            "Serve immediately while the sauce is creamy."
        ],

        isOverTime: function () {
            return this.PrepTime > 40;
        }
    },


    // 5. Sushi Rolls
    {
        rating: 4.8,
        reviews: 1320,
        PrepTime: 35,
        CookTime: 20,
        Servings: 2,
        imgUrl: "./images/images.jpg",
        difficulty: "Advanced",
        cuisine: "Japanese",
        title: "California Sushi Rolls",
        description: "Fresh Japanese-inspired sushi rolls filled with creamy avocado, cucumber, and crab sticks wrapped in seasoned rice and nori.",

        ingredients: [
            "2 cups sushi rice",
            "4 nori seaweed sheets",
            "150g crab sticks",
            "1 ripe avocado",
            "1 cucumber",
            "2 tablespoons rice vinegar",
            "1 tablespoon sugar",
            "1/2 teaspoon salt",
            "Soy sauce for serving"
        ],

        instructions: [
            "Wash sushi rice until the water runs clear.",
            "Cook the rice and let it cool slightly.",
            "Mix rice vinegar, sugar, and salt.",
            "Spread rice evenly over a nori sheet.",
            "Add crab sticks, avocado, and cucumber.",
            "Roll tightly using a bamboo mat and slice into pieces."
        ],

        nutrition: {
            calories: "320 kcal",
            fat: "9g",
            carbohydrates: "48g",
            protein: "12g",
            fiber: "5g",
            Sodium: "590mg"
        },

        cheftips: [
            "Wet your hands before handling sushi rice.",
            "Use a sharp knife to cut clean sushi slices.",
            "Don't overfill the sushi rolls.",
            "Keep the rice slightly warm when preparing the rolls."
        ],

        isOverTime: function () {
            return this.PrepTime > 40;
        }
    },


    // 6. Pancakes
    {
        rating: 4.9,
        reviews: 2450,
        PrepTime: 10,
        CookTime: 15,
        Servings: 4,
        imgUrl: "./images/images (1).jpg",
        difficulty: "Easy",
        cuisine: "American",
        title: "Fluffy Pancakes",
        description: "Soft and fluffy homemade pancakes served with fresh strawberries, maple syrup, and a little butter for a perfect breakfast.",

        ingredients: [
            "1 1/2 cups all-purpose flour",
            "2 tablespoons sugar",
            "1 tablespoon baking powder",
            "1/4 teaspoon salt",
            "1 egg",
            "1 1/4 cups milk",
            "3 tablespoons melted butter",
            "1 teaspoon vanilla extract",
            "Maple syrup and fresh strawberries"
        ],

        instructions: [
            "Mix flour, sugar, baking powder, and salt.",
            "In another bowl, whisk the egg, milk, melted butter, and vanilla.",
            "Pour wet ingredients into dry ingredients.",
            "Mix gently until just combined.",
            "Heat a non-stick pan over medium heat.",
            "Pour batter into the pan and cook until bubbles appear.",
            "Flip and cook until golden brown.",
            "Serve with maple syrup and fresh strawberries."
        ],

        nutrition: {
            calories: "350 kcal",
            fat: "12g",
            carbohydrates: "52g",
            protein: "9g",
            fiber: "2g",
            Sodium: "520mg"
        },

        cheftips: [
            "Don't overmix the pancake batter.",
            "Let the batter rest for 5 minutes before cooking.",
            "Use medium heat to avoid burning the pancakes.",
            "Flip pancakes only when bubbles appear on top."
        ],

        isOverTime: function () {
            return this.PrepTime > 40;
        }
    }

];
var imgSection = document.getElementById("imgSection");
var infoSection = document.getElementById("infoSection");
var ingredientsList = document.getElementById("ingredientsList");
var instructionsList = document.getElementById("instructionsList");
var nutritionList = document.getElementById("nutritionList");
var tipsList = document.getElementById("tipsList");
var lastIndex;
var showIndex = [];
// functions
function getRandomRecipe() {
    if(showIndex.length === recipes.length) {
        showIndex = [];
    }
    var randomIndex = Math.floor(Math.random() * recipes.length);
    while (lastIndex === randomIndex || showIndex.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * recipes.length);
    }
    console.log(randomIndex);
    lastIndex = randomIndex;
    showIndex.push(randomIndex);
    displayRecipe(randomIndex);
}
function displayRecipe(index) {
    var myrecipe = recipes[index];
     
    var imgContent = `
    <img src="${myrecipe.imgUrl}"
                        alt="${myrecipe.title}"
                        class="recipe-image"
                        >
                    <!-- Rating -->
                    <div class="star d-flex align-items-center gap-2">

                        <i class="fa-solid fa-star"></i>

                        <span id="rating">${myrecipe.rating}</span>

                        <p>(${myrecipe.reviews} reviews)</p>

                    </div>


                    <!-- Time Information -->
                    <div class="bar-buttom">

                        <div class="bar d-flex justify-content-around align-items-center">

                            <div class="bar-item d-flex flex-column align-items-center">

                                <i class="fa-solid fa-clock"></i>

                                <p>Prep Time</p>

                                <span id="prepTime">${myrecipe.PrepTime} min</span>

                            </div>


                            <div class="bar-item d-flex flex-column align-items-center">

                                <i class="fa-solid fa-fire-burner"></i>

                                <p>Cook Time</p>

                                <span id="cookTime">${myrecipe.CookTime} min</span>

                            </div>


                            <div class="bar-item d-flex flex-column align-items-center">

                                <i class="fa-solid fa-users"></i>

                                <p>Servings</p>

                                <span id="servings">${myrecipe.Servings}</span>

                            </div>

                        </div>

                    </div>

    
    `;

    var recipeInfo = `
    <div class="recipe-tags">
                            <span class="tag tag-green" id="difficulty">
                                ${myrecipe.difficulty}
                            </span>
                            <span class="tag tag-blue" id="category">
                                ${myrecipe.cuisine}
                            </span>
                        </div>
                        <div class="recipe-title d-flex justify-content-between align-items-start">
                            <div>
                                <h2 id="recipeName">${myrecipe.title}</h2>
                                <p id="recipeDescription">
                                    ${myrecipe.description}
                                </p>
                            </div>
                            <div class="recipe-actions d-flex gap-2">
                                <button class="action-btn">
                                    <i class="fa-solid fa-bookmark"></i>
                                </button>
                                <button class="action-btn">
                                    <i class="fa-solid fa-share-nodes"></i>
                                </button>
                            </div>
                        </div>
<div class="prep-alert ${myrecipe.isOverTime() ? "d-flex align-items-center p-3 rounded-3" : "d-none"}">
  <div class="prep-alert-icon me-3 flex-shrink-0">
    <!-- Triangle Warning SVG Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#fa2a31">
      <path d="M12 2L1 21h22L12 2zm1 15h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
    </svg>
  </div>
  <div>
    <h6 class="prep-alert-title mb-1 fw-semibold">Extended Preparation Time</h6>
    <p class="prep-alert-text mb-0">This recipe requires more than 40 minutes to prepare. Plan accordingly!</p>
  </div>
</div> 
    `;
    var instructionsHtml = "";
    for (var i = 0; i < myrecipe.instructions.length; i++) {
        instructionsHtml += `
            <div class="instruction-item">
                <span>${i + 1}</span>
                <p>${myrecipe.instructions[i]}</p>
            </div>
        `;
    }
    var ingredientsHtml = "";
    for (var i = 0; i < myrecipe.ingredients.length; i++) {
        ingredientsHtml += `
            <li>
                <span>${i + 1}</span>
                ${myrecipe.ingredients[i]}
            </li>
        `;
    }
    var nutritionHtml = `
        <div class="nutrition-item">
            <div class="nutrition-icon orange"><i class="fa-solid fa-fire"></i></div>
            <span>Calories</span>
            <strong>${myrecipe.nutrition.calories}</strong>
        </div>
        <div class="nutrition-item">
            <div class="nutrition-icon blue"><i class="fa-solid fa-dumbbell"></i></div>
            <span>Protein</span>
            <strong>${myrecipe.nutrition.protein}</strong>
        </div>
        <div class="nutrition-item">
            <div class="nutrition-icon yellow"><i class="fa-solid fa-wheat-awn"></i></div>
            <span>Carbohydrates</span>
            <strong>${myrecipe.nutrition.carbohydrates}</strong>
        </div>
        <div class="nutrition-item">
            <div class="nutrition-icon red"><i class="fa-solid fa-droplet"></i></div>
            <span>Fat</span>
            <strong>${myrecipe.nutrition.fat}</strong>
        </div>
        <div class="nutrition-item">
            <div class="nutrition-icon green"><i class="fa-solid fa-leaf"></i></div>
            <span>Fiber</span>
            <strong>${myrecipe.nutrition.fiber}</strong>
        </div>
        <div class="nutrition-item">
            <div class="nutrition-icon pink"><i class="fa-solid fa-cube"></i></div>
            <span>Sodium</span>
            <strong>${myrecipe.nutrition.Sodium}</strong>
        </div>
    `;
    var chefTipsList = "";
    for (var i = 0; i < myrecipe.cheftips.length; i++) {
        chefTipsList += `
       <div class="tip-item">
                <i class="fa-solid fa-circle-check"></i>
                <p>${myrecipe.cheftips[i]}</p>
            </div> 
        `;
    }
    imgSection.innerHTML = imgContent;
    infoSection.innerHTML = recipeInfo;
    ingredientsList.innerHTML = ingredientsHtml;
    instructionsList.innerHTML = instructionsHtml;
    nutritionList.innerHTML = nutritionHtml;
    tipsList.innerHTML = chefTipsList;
}
getRandomRecipe()

                    

