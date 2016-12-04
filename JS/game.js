define(["app/arena"], function(Arena){
    var canvas = $("#canvas");
    var context = canvas.get(0).getContext("2d");
    var width = canvas.get(0).width;
    var height = canvas.get(0).height;

    var arena = new Arena(width, height); //creates the arena and the snake
    var direction;

    function init(){
        direction = "right";
    }

    function draw() {
        context.clearRect(0, 0, width, height);
        arena.draw(context);
    }

    // check keyboard keys and update direction variable
    $(document).keydown(function(e){
        var k = e.which;
        if (k == "37" && direction != "right") direction = "left";
        if (k == "38" && direction != "down") direction = "up";
        if (k == "39" && direction != "left") direction = "right";
        if (k == "40" && direction != "up") direction = "down";
    })

    function update() {
        if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 120);
		// TODO: check if the wall will be hit
		// TODO: move in increments of the image size

    }

})

