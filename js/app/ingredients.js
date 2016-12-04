define(["app/gameMath"], function(gameMath)){

    function Ingredient(x, y, type){
        this.x = x;
        this.y = y;
        this.type = type;
        this.inSnake = false;

    }

    Ingredient.prototype = {
        testHit : function(){

        }
        draw: function(canvasContext){
        // TODO: draw at a random point if inSnake = false

        }


    }




}