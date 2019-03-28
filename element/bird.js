class Bird extends Animation {
    constructor(game) {
        super(game)
        this.game = game
        this.initElements()
    }

    initElements() {
        this.statusDict = {
            'default' : [],
        }
        this.status = 'default'

        for (var i=0; i<3; i++) {
            var name = `bird${i}`
            var t = this.game.textureByName(name)
            this.statusDict['default'].push(t)
        }
        this.texture = this.frames()[0]
        this.x = 100
        this.y = 200
        this.w = this.texture.width
        this.h = this.texture.height
        this.frameIndex = 0
        this.frameCount = 5
        this.speedX = 2
        this.speedY = this.speedX
        this.aaa
        this.jumpSpeed = 4  * -0.5
        this.gravity = 5 * 0.01
        this.bullets = []
    }

    draw() {
        // bird依据速度改变朝向
        let context = this.game.context
        context.save()
        let midX = this.x + this.w/2
        let midY = this.y + this.h/2
        context.translate(midX, midY)
        context.rotate(Math.atan(this.speedY / this.speedX))
        context.translate(-midX, -midY)
        super.draw()
        context.restore()
    }

    update() {
        super.update()
        this.drop()
        this.keepAwayNoard()
        this.romovePlayDes()
    }

    keepAwayNoard() {
        if(this.y +  this.h > 510){
            this.die()
        }
        if(this.y < -0){
            this.y = 0
        }
        if(this.x +  this.w > this.game.canvas.width){
            this.x = this.game.canvas.width - this.w
        }
        if(this.x < -0){
            this.x = 0
        }
    }

    drop() {
        this.speedY += this.gravity
        this.y += this.speedY
    }

    jump() {
        this.speedY = this.jumpSpeed
    }

    die() {
        this.game.shockDraw = false
        var end = SceneEnd.new(this.game)
        var nowScore = this.game.scene.scoreLabel.getScore()
        end.scoreLabel.setScore(nowScore)
        this.game.scene.setChangeScene(end)
    }

    hitten() {
        this.game.shockDraw = true
        this.game.scene.pairPipe.speed = 0
        this.game.scene.earth.speed = 0
        // 取消跳跃功能
        this.jump = function() {}
        this.update = function() {
            this.drop()
            this.keepAwayNoard()
        }
    }


    romovePlayDes() {
        var score = this.game.scene.scoreLabel.getScore()
        if (score > 1){
            this.game.scene.removeElement(this.game.scene.playDes)
        }
    }
}
