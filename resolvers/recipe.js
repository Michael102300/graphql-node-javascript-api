const {recipes, users, categorys } = require('../constants')
const uuid = require('uuid')
module.exports = {
    Query: {
        getRecipes: () => {
            return recipes
        },
        getOneRecipe: (_, { name }) => {
            return recipes.find( recipe => recipe.name === name)
        },
        getMyRecipes: (_, { id }) => {
            return recipes.filter( recipe => recipe.userId === id)
        }
    },
    Mutation:{
        createRecipe: (_,{ input }) => {
            const recipe = { ...input, id: uuid.v4() };
            recipes.push(recipe);
            return recipe;
        }
    },
    Recipe: {
        user: ({ userId }) => users.find(user => user.id === userId)
    }
}