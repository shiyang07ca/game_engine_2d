class Label {
    constructor(game, text) {
        this.game = game
        this.initElements(text)
    }


    static new(game, text) {
        return new this(game, text)
    }


    initElements(text) {
        this.text  = text
        this.x = 150
        this.y = 100
        this.bgTexture = this.game.textureByName('labelBg')
        this.bgX = this.x - 40
        this.bgY = this.y - 42
    }


    draw() {
        log()
        this.game.context.drawImage(this.bgTexture,  this.bgX, this.bgY)
        this.game.context.fillText(this.text, this.x, this.y)
    }


    update() {
    }


    setText(text) {
        this.text = text
    }


    setXY(x, y) {
        this.x = x
        this.y = y
        this.bgX = x - 40
        this.bgY = y - 42
    }
}
