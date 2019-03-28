class SceneTitle extends SceneBase {

    constructor(game) {
        super(game)
        this.game = game
        this.initElements()
        this.initKeyboardAction()
    }

    initElements() {
        this.bg = Backgroud.new(this.game)
        this.earth = Earth.new(this.game)
        this.title = Label.new(this.game, '  Flappy Bird')
        this.title.setXY(this.game.canvas.width / 4 + 40, this.title.y)
        this.startDes = Label.new(this.game,  'R键开始游戏')
        this.startDes.setXY(this.title.x, this.title.y + 80)

        var loadElements = [
            this.bg,
            this.earth,
            this.title,
            this.startDes,
            // this.controlDes,
        ]
        this.addElements(loadElements)
    }

    initKeyboardAction() {
        var self = this
        self.game.initKeyboardListener()
        self.game.registerAction('r', function(){
            var m = SceneMain.new(self.game)
            self.game.setScene(m)
        })
    }
}
