class SceneMain extends SceneBase {
    constructor(game) {
        super(game)
        this.game = game
        this.initElements()
        this.initKeyboardAction()
    }

    initElements() {
        this.bg = Backgroud.new(this.game)
        this.earth = Earth.new(this.game)
        this.pairPipe = PairPipe.new(this.game)
        this.bird = Bird.new(this.game)
        this.playDes = Label.new(this.game, '操作:空格跳跃')
        this.playDes.setXY(this.playDes.x, 550)
        this.scoreLabel = ScoreLabel.new(this.game)


        this.elementsList = [
            this.bg,
            this.pairPipe,
            this.earth,
            this.bird,
            this.scoreLabel,
            this.playDes,
        ]
        this.addElements(this.elementsList)
    }

    initKeyboardAction() {
        var self = this
        self.game.actions = {}
        self.game.keywords = {}
        // 因为第一次是window调用，所以需要用闭包先把this转为self闭包保存
        // 在需要把执行操作封装一个待执行的函数，同时形成闭包，保证环境
        self.game.registerAction(' ', function(){
            self.bird.jump()
        })
    }
}
