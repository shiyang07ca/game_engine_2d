class ScoreLabel {
    constructor(game) {
        this.game = game
        this.scoreCount = 0
        this.initElements()
    }

    static new(game) {
        var i = new this(game)
        return i
    }

    initElements() {
        this.label = Label.new(this.game,`得分：${this.scoreCount}`)
        this.x = this.label.x
        this.y = this.label.y
    }

    draw() {
        this.label.draw()
    }

    update() {
    }

    add(num) {
        this.scoreCount += num
        this.label.setText(`得分：${this.scoreCount}`)
    }

    setScore(num) {
        this.scoreCount = num
        this.label.setText(`得分：${this.scoreCount}`)
    }

    getScore() {
        return this.scoreCount
    }
}
