const { categorys, recipes, users} = require('../constants')
const uuid = require('uuid')
module.exports = {
    Query: {
        users: () => {
            return users
        },
    },
    Mutation: {
        
    },
    User: {
        recipes: ({ id }) => recipes.filter(recipe => recipe.userId === id )
    }
}