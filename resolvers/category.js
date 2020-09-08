const { categorys, recipes, users} = require('../constants')
const uuid = require('uuid')
module.exports = {
    Query: {
        getCategories: () => {
            return categorys
        },
        getOneCategory: (_, { name }) => {
            return categorys.find(category => category.name === name)
        }
    },
    Category: {
        recipes: ( { name }) => recipes.filter(category => category.categoryName === name )
    }
}