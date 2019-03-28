class Backgroud {
    constructor(game) {
        this.game = game
        this.sky = ImageBase.new(this.game, 'sky')
        this.sky.setXY(-10, 0)
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    draw() {
        this.sky.draw()
    }

    update() {
        this.sky.update()
    }
}
