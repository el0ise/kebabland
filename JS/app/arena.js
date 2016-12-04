define(["app/ingredient", "app/gameMath"], function(Ingredient, gameMath){


    function Arena(w, h) {
        this.width = w;
        this.height = h;

        Arena.prototype = {
            isIngredientHit: function(snakeTrajectory) {
                // TODO: add ingredient to the snake array
            },


            draw: function(canvasContext) {
                // TODO: create initial snake

            }

        }

    }

    return Arena;

})