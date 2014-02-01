module.exports = {
    logger: function(req, res, next) {
        console.log(req.method, req.url);
        next();
    },
    split_and_trim: function(string) {
        var trimmed = string.trim();
        var array = trimmed.split(",");
        for (var i=0; i<array.length; i++) {
            array[i] = array[i].trim();
        }
        return array;
    },
    recipe_html: function(recipe) {
        var html = "";

        html += "<h1>" + recipe.name + "</h1>";
        html += "<p>" + recipe.description + "</p>";
        html += "<ul>";

        for (var i = 0; i < recipe.ingredients.length; i++) {
            html += "<li>" + recipe.ingredients[i].quantity + " " +
                recipe.ingredients[i].quantity_type + " " +
                recipe.ingredients[i].name + "</li>";
        };

        html += "</ul>";

        return html;
    }
}
