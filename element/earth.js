class Earth{
    constructor(game) {
        this.game = game
        this.game = game
        this.speed = 1
        this.landDistance = 96
        this.elements = []
        this.initElements()
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    initElements() {
        for (var i = 0; i < 3; i++) {
            var land = ImageBase.new(this.game, 'land')
            land.x = i * this.landDistance
            land.y = 500
            this.elements.push(land)
        }
    }

    draw() {
        for (var i = 0; i < this.elements.length; i++) {
            var land = this.elements[i]
            land.draw()
        }
    }

    update() {
        this.move()
    }

    move() {
        if (this.elements[0].x == -this.landDistance) {
            for (var i = 0; i < this.elements.length; i++) {
                var land = this.elements[i]
                land.x = i * this.landDistance
            }
        }
        else {
            for (var i = 0; i < this.elements.length; i++) {
                var land = this.elements[i]
                land.x -= this.speed
            }
        }
    }
}
