

var type = "chicken"
var range = 3
var health = "alcahol-free"
var getRecipes = $.get('https://api.edamam.com/search?q=' + type + '&app_id=' + 'f86a9d27&app_key=eafbbceae5126fcc52614412a2ae8441' + '&from=0&to=' + range + '&calories=gte%' + 20591 + ',%20lte%20722&health=' + health)

// Create a recipe object & set its properties

var recipes = getRecipes.done((result)=> 
{
	
	var recipes = []

	result['hits'].map((recipeItem)=> // Map through each recipe and retrieve its data
	{
	
		let recipeObj = {} // Create recipe object to store necassary data

		recipeObj.label = recipeItem['recipe']['label']
		recipeObj.image = recipeItem['recipe']['image']

		recipeObj.ingredients = [] // Create object to store ingredient data

		for (i in recipeItem['recipe']['ingredients']) 
		{
			let ingredient = {} // Create ingredient object

			ingredient.text = recipeItem['recipe']['ingredients'][i].text
			ingredient.weight = recipeItem['recipe']['ingredients'][i].weight

			recipeObj.ingredients.push(ingredient) // Add ingredient to ingredients array
			
		}
		console.log(recipeObj.ingredients)

		recipeObj.healthLabels = recipeItem['recipe']['healthLabels']
		recipeObj.yield = recipeItem['recipe']['yield']
		recipeObj.source = recipeItem['recipe']['source']

		// Create array to store daily nutrient data

		recipeObj.totalDaily = []
	
		for (i in recipeItem['recipe']['totalDaily']) 
		{
			let daily = {} // Store label and quantity of each item

			daily.label = recipeItem['recipe']['totalDaily'][i].label
			daily.qty = ((Math.floor(recipeItem['recipe']['totalDaily'][i].quantity))/recipeObj.yield) +
					recipeItem['recipe']['totalDaily'][i].unit

			recipeObj.totalDaily.push(daily) // Add data object to the daily nutrient array	
			
		}
		console.log(recipeObj.totalDaily)

		recipeObj.totalNutrients = []

		for (i in recipeItem['recipe']['totalNutrients']) 
		{
			let nutrient = {}
			
			nutrient.label = recipeItem['recipe']['totalNutrients'][i].label
			nutrient.qty = recipeItem['recipe']['totalNutrients'][i].quantity
			nutrient.unit = recipeItem['recipe']['totalNutrients'][i].unit

			recipeObj.totalNutrients.push(nutrient)

		}
		console.log(recipeObj.totalNutrients)

		recipeObj.tags = recipeItem['recipe']['tags']
		recipeObj.uri = recipeItem['recipe']['uri']
		recipeObj.url = recipeItem['recipe']['url']
		recipeObj.calories = recipeItem['recipe']['calories']
		
		recipes.push(recipeObj) 

	})

	console.log(recipes)

	return recipes
	
})

module.exports = recipes