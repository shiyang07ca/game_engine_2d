class SceneEnd extends SceneBase {
    constructor(game) {
        super(game)
        this.game = game
        this.initElements()
        this.initKeyboardAction()
    }

    initElements() {
        this.bg = Backgroud.new(this.game)
        this.earth = Earth.new(this.game)
        this.scoreLabel = ScoreLabel.new(this.game)
        this.restartDes = Label.new(this.game,  'R键重新游戏')
        this.restartDes.setXY(this.scoreLabel.x, this.scoreLabel.y + 80)
        // this.over = ImageBase.new(this.game, 'over')
        // this.over.setXY(this.scoreLabel.x - 40, this.scoreLabel.y + 160)

        var loadElements = [
            this.bg,
            this.earth,
            this.scoreLabel,
            this.restartDes
        ]
        this.addElements(loadElements)
    }

    initKeyboardAction() {
        var self = this
        self.game.initKeyboardListener()
        self.game.actions = {}
        self.game.keywords = {}
        self.game.registerAction('r', function(){
            self.restart()
        })
    }

    setScore(num) {
        this.scoreLabel.setScore(num)
    }

    restart() {
        log('restart')
        var self = this
        var scene = SceneMain.new(this.game)
        self.game.setScene(scene)
    }
}
