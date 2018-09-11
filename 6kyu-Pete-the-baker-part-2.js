/*
Pete, the baker (part 2)
6kyu

Pete is now mixing the cake mixture. He has the recipe, containing the required ingredients for one cake. 
He also might have added some of the ingredients already, but something is missing. 
Can you help him to find out, what he has to add to the mixture?

Requirements:
Pete only wants to bake whole cakes. And ingredients, that were added once to the mixture, can't be removed from that. That means: if he already added the amount of flour for 2.8 cakes, he needs to add at least the amount of flour for 0.2 cakes, in order to have enough flour for 3 cakes.
If Pete already added all ingredients for an integer amount of cakes, you don't need to add anything, just return an empty hash then.
If Pete didn't add any ingredients at all, you need to add all ingredients for exactly one cake.
For simplicity we ignore all units and just concentrate on the numbers. E.g. 250g of flour is simply 250 (units) of flour and 1 lb of sugar is also simply 1 (unit) of sugar.
Ingredients, which don't have to be added to the mixture (missing amount = 0), must not be present in the result.
Examples:

var recipe = {flour: 200, eggs: 1, sugar: 100};

getMissingIngredients(recipe, {flour: 50, eggs: 1}); // must return {flour: 150, sugar: 100}
getMissingIngredients(recipe, {}); // must return {flour: 200, eggs: 1, sugar: 100}
getMissingIngredients(recipe, {flour: 500, sugar: 200}); // must return {flour: 100, eggs: 3, sugar: 100}

*/


function getMissingIngredients(recipe, added) {
var recipeKeys = Object.keys(recipe);
var toAdd = {};
var cakesF = 1;
  for (r=0; r<3; r++){
    if (added.hasOwnProperty(recipeKeys[r])){
      if (recipe[recipeKeys[r]]>added[recipeKeys[r]]){
        toAdd[recipeKeys[r]] = recipe[recipeKeys[r]] - added[recipeKeys[r]];
      }
      if (recipe[recipeKeys[r]]<added[recipeKeys[r]]){
        var cakes = added[recipeKeys[r]]%recipe[recipeKeys[r]]==0 ? Math.floor(added[recipeKeys[r]]/recipe[recipeKeys[r]]) : Math.floor(added[recipeKeys[r]]/recipe[recipeKeys[r]]+1);
        cakesF = cakes>cakesF ? cakes : cakesF;
      }
    }
    else{toAdd[recipeKeys[r]] = recipe[recipeKeys[r]];}
  }
  if(cakesF>1){
    if(added[recipeKeys[0]]/recipe[recipeKeys[0]]==added[recipeKeys[1]]/recipe[recipeKeys[1]] && 
     added[recipeKeys[2]]/recipe[recipeKeys[2]]==added[recipeKeys[1]]/recipe[recipeKeys[1]]){
     toAdd = {};
     }
    else {
    for (a=0; a<3; a++){
     toAdd[recipeKeys[a]] = added.hasOwnProperty(recipeKeys[a]) ? (recipe[recipeKeys[a]]*cakesF) - added[recipeKeys[a]] : recipe[recipeKeys[a]]*cakesF;
     if (toAdd[recipeKeys[a]] == 0){ delete toAdd[recipeKeys[a]] }
     }}
  }
 
 return toAdd;
}