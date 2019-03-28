class ImageBase {
    constructor(game, name) {
        this.game = game
        this.texture = game.textureByName(name)
        this.setXY(0, 0)
        this.w = this.texture.width
        this.h = this.texture.height
    }


    static new(game, name) {
        var i = new this(game, name)
        return i
    }


    draw() {
        this.game.drawImage(this)
    }


    update() {

    }


    setXY(x, y) {
        this.x = x
        this.y = y
    }
}
