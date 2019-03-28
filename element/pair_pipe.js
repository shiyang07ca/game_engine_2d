class PairPipe {
    constructor(game) {
        this.game = game
        this.speed = 1
        this.elements = []
        this.enterDistance = config.enterDistance.value
        this.earthH = 465
        this.initElements()
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    initElements() {
        // pipe.h = 320
        var topPipe = ImageBase.new(this.game, 'topPipe')
        var botPipe = ImageBase.new(this.game, 'botPipe')
        topPipe.x = 500
        topPipe.y = -80

        botPipe.x = 500
        botPipe.y =  topPipe.y + topPipe.h  + this.enterDistance
        this.topPipe = topPipe
        this.botPipe = botPipe
    }

    reset() {
        this.enterDistance = config.enterDistance.value
        this.topPipe.x = 450
        this.botPipe.x = 450

        var randomY = randomBetween(-this.topPipe.h + 40,  -10)
        this.topPipe.y = randomY
        this.botPipe.y =  this.topPipe.y + this.topPipe.h  + this.enterDistance
    }

    draw(){
        this.topPipe.draw()
        this.botPipe.draw()
    }

    update() {
        this.move()
        if(
            checkRect(this.topPipe, this.game.scene.bird) ||
            checkRect(this.botPipe, this.game.scene.bird)
        ) {
            this.game.scene.bird.hitten()
        }

        else if(this.checkPass()) {
            this.game.scene.scoreLabel.add(1)
        }
    }

    move() {
        this.topPipe.x -= this.speed
        this.botPipe.x -= this.speed
        if (this.topPipe.x == -50) {
            this.reset()
        }
    }

    checkPass() {
        return Math.abs(this.topPipe.x - this.game.scene.bird.x) <= 0.5
    }
}
