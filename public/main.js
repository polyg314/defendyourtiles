var main = {
	preload: function() {
		// Load all our assets
		game.load.image('paddle', 'paddle.png');
		game.load.image('paddle2', 'paddle2.png');
		game.load.image('ball', 'ball.png');
		game.load.image('brik', 'brick.png');
		game.load.image('brik2', 'brick2.png');


	},

	create: function() { 
		// Init some variables
		game.physics.startSystem(Phaser.Physics.ARCADE);
		this.cursor = game.input.keyboard.createCursorKeys()

		this.cursor2= game.input.keyboard
		this.cursor2.A = game.input.keyboard.addKey(Phaser.Keyboard.A)
        this.cursor2.D = game.input.keyboard.addKey(Phaser.Keyboard.D)

		// Create the paddle
		this.paddle = game.add.sprite(200, 300, 'paddle2');
		game.physics.arcade.enable(this.paddle);
		this.paddle.body.immovable = true;

		// Create the second paddle
		this.paddle2 = game.add.sprite(200, 500, 'paddle');
		game.physics.arcade.enable(this.paddle2);
		this.paddle2.body.immovable = true;


		// Create the bouncy ball
		this.ball = game.add.sprite(200, 300, 'ball');
		game.physics.arcade.enable(this.ball);
		this.ball.body.collideWorldBounds = true;
		this.ball.body.velocity.x = 200; this.ball.body.velocity.y = 250;
		this.ball.body.bounce.x = 1; this.ball.body.bounce.y = 1;

		// Create first group of bricks
		this.bricks = game.add.group();
		this.bricks.enableBody = true;
		for (var i = 0; i < 5; i++) 
			for (var j = 0; j < 5; j++) 
				game.add.sprite(55+i*60, 55+j*35, 'brik2', 0, this.bricks);
		this.bricks.setAll('body.immovable', true);


		//Create second group of bricks
		this.bricks2 = game.add.group();
		this.bricks2.enableBody = true;
		for (var i = 0; i < 5; i++) 
			for (var j = 0; j < 5; j++) 
				game.add.sprite(55+i*60, 605+j*35, 'brik', 0, this.bricks2);
		this.bricks2.setAll('body.immovable', true);
	},

	update: function() {
		// Handle collisions
		game.physics.arcade.collide(this.paddle, this.ball);
		game.physics.arcade.collide(this.ball, this.bricks, this.hit, null, this);

		game.physics.arcade.collide(this.paddle2, this.ball);
		game.physics.arcade.collide(this.ball, this.bricks2, this.hit, null, this);
		
		// Move the paddle when the right or left arrow is pressed
		if (this.cursor.right.isDown) 
			this.paddle.body.velocity.x = 350;
		else if (this.cursor.left.isDown) 
			this.paddle.body.velocity.x = -350;
		else 
			this.paddle.body.velocity.x = 0;	



		if (this.cursor2.A.isDown) 
			this.paddle2.body.velocity.x = -350;
		else if (this.cursor2.D.isDown) 
			this.paddle2.body.velocity.x = 350;
		else 
			this.paddle2.body.velocity.x = 0;


	},

	hit: function(ball, brik) {
		// When the ball hits a brick, kill the brick
		brik.kill();
		if(brik._cache[1] > 400){
			bottomCount ++;
			console.log(bottomCount)
			if(bottomCount === 25){
				alert('Purple Wins!')
				// main.create();
				// var game = new Phaser.Game(400, 800, Phaser.AUTO, 'gameDiv');
				// var bottomCount = 0;
				// var topCount = 0;
				// game.state.add('main', main);
				// game.state.start('main');
			}
		}
		else{
			topCount ++;
			if(topCount === 25){
				alert('Green Wins!')
				// main.create();
				// var game = new Phaser.Game(400, 800, Phaser.AUTO, 'gameDiv');
				// var bottomCount = 0;
				// var topCount = 0;
				// game.state.add('main', main);
				// game.state.start('main');
			}
		}
	}
};

var game = new Phaser.Game(400, 800, Phaser.AUTO, 'gameDiv');
var bottomCount = 0;
var topCount = 0;
game.state.add('main', main);
game.state.start('main');