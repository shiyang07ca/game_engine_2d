class Game {
    constructor(imagePaths) {
        this.imagePaths = imagePaths
        this.scene = null
        this.images = {}
        this.actions = {}
        this.keywords = {}
        this.shockDraw = false
        this.paused = false
        this.canvas = e("#id-canvas")
        this.context = this.canvas.getContext("2d")
        this.context.font="20px Arial";
        this.initKeyboardListener()
        this.initImages(this.imagePaths)
    }


    static new(imagePaths) {
        // js的单例模式
        this.ins = this.ins || new this(imagePaths)
        return this.ins
    }


    initKeyboardListener() {
        this.actions = {}
        this.keywords = {}
        var g = this
        window.addEventListener("keydown", function(event) {
            g.keywords[event.key] = "down"
        })
        window.addEventListener("keyup", function(event) {
            g.keywords[event.key] = "up"
        })
    }


    pause() {
        this.paused = true
    }


    recovery() {
        this.paused = false
    }


    initImages(imagePaths) {
        var g = this
        var loads = []
        var names = Object.keys(g.imagePaths)
        // 异步加载机制
        for (let i=0; i<names.length; i++) {
            let name = names[i]
            let path = g.imagePaths[name]
            let img = new Image()
            img.src = path

            img.onload = function(e) {
                g.images[name] = img
                loads.push(0)
                if (loads.length == names.length) {
                    log('all images are onload')
                    g.start()
                }
            }
        }
    }


    textureByName(name) {
        var g = this
        var img = g.images[name]
        return img
    }


    start() {
        var scene = SceneTitle.new(this)
        this.setScene(scene)
        this.runloop()
    }


    registerAction(key, callback) {
        this.actions[key] = callback
    }


    keyboardEvent() {
        var g = this
        var actions = Object.keys(g.actions)
        for (var i=0; i < actions.length; i++) {
            var key = actions[i]
            // 按键事件注册
            // keywords记入键盘情况
            // actions里面记入某键盘触发的对应函数
            // 核心：遍历键值——检测状态——状态事件
            var status = g.keywords[key]
            if (status == "down") {
                g.actions[key]("down")
            }
            else if (status == "up") {
                // 仅触发一次弹起，复原为null
                g.actions[key]("up")
                g.keywords[key] = null
            }
        }
    }


    runloop() {
        var g = this
        g.clear()
        g.update()
        g.keyboardEvent()
        g.draw()
        setTimeout(function() {
            g.runloop()
        }, 1000/window.fps)
    }


    setScene(scene){
        this.scene = scene
    }


    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }


    drawImage(image) {
        var o = image
        this.context.drawImage(o.texture, o.x, o.y)
    }


    update() {
        if (this.paused == true) {
            return
        }
        this.scene.update()
    }


    draw() {
        if (this.shockDraw){
            this.context.save()
            let r = randomBetween(-5, 5)
            this.context.translate(r, 0)
            this.scene.draw()
            this.context.restore()

        }
        else{
            this.scene.draw()
        }
    }
}
