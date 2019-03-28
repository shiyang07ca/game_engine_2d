class Animation {
    constructor(game) {
        this.game = game
        this.statusDict = {
            'default' : [],
        }
        this.status = "default"
        this.initChangeCount = 100
        this.changeCount = this.initChangeCount
        this.changeSpeed = 2
    }

    static new(game)  {
        return new this(game)
    }

    frames() {
        return this.statusDict[this.status]
    }

    update() {
        this.changeCount -= this.changeSpeed
        if (this.changeCount < 0) {
            this.nextTexture()
            this.changeCount = this.initChangeCount
        }
    }

    draw() {
        this.game.drawImage(this)
    }

    nextTexture() {
        this.frameIndex += 1
        if (this.frameIndex == this.frames().length) {
            this.frameIndex = 0
        }
        this.texture = this.frames()[this.frameIndex]
    }

    changeStatus(name) {
        this.status = name
    }

    setXY(x, y) {
        this.x = x
        this.y = y
    }
}
