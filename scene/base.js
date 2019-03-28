class SceneBase {
    constructor(game) {
        this.game = game
        this.elements = []
        this.needChange = false
        this.changeScene = null
    }

    static new(game) {
        return new this(game)
    }

    addElement(element) {
        this.elements.push(element)
    }

    addElements(elements) {
        for (var i = 0; i < elements.length; i++) {
            this.addElement(elements[i])
        }
    }

    removeElement(element) {
        var index = this.elements.indexOf(element)
        if (index == -1) {
        }
        else {
            this.elements.splice(index, 1);
        }
    }

    removeElements(elements) {
        for (var i = 0; i < elements.length; i++) {
            this.removeElement(elements[i])
        }
    }

    draw() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.draw()
        }
    }

    update() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            e.update()
        }

        if (this.needChange) {
            this.game.setScene(this.changeScene)
        }
    }

    initKeyboardAction() {
    }

    setChangeScene(scene) {
        this.needChange = true
        this.changeScene = scene
    }
}
